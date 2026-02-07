#!/usr/bin/env python3
"""Bridge script to import weibo-daily-hot-search data into WeiboInsight's MongoDB.

Reads raw/*.json files and inserts them into MongoDB so WeiboInsight's
analyze_weibo_data.py can run NLP analysis (topic modeling, clustering)
on trending topic data.

Usage:
    pip install pymongo jieba
    python bridge.py                    # Import today's data
    python bridge.py 2026-02-07         # Import specific date
    python bridge.py --all              # Import all dates

Requires MongoDB running locally (default: mongodb://localhost:27017).
"""

import json
import os
import sys
from datetime import datetime
from pathlib import Path

try:
    from pymongo import MongoClient
except ImportError:
    print("Install pymongo: pip install pymongo")
    sys.exit(1)

try:
    import jieba
except ImportError:
    jieba = None
    print("Warning: jieba not installed, skipping text segmentation")

MONGO_URI = os.environ.get("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.environ.get("MONGO_DB", "weibo_data")
RAW_DIR = Path(__file__).parent / "raw"

STOP_WORDS = {"的", "了", "在", "是", "我", "有", "和", "就", "不", "人", "都",
              "一", "一个", "上", "也", "很", "到", "说", "要", "去", "你", "会",
              "着", "没有", "看", "好", "自己", "这"}


def segment_text(text: str) -> list[str]:
    """Segment Chinese text using jieba."""
    if jieba is None:
        return list(text)
    words = jieba.cut(text, cut_all=False)
    return [w for w in words if w.strip() and w not in STOP_WORDS and len(w) > 1]


def import_date(db, date_str: str) -> int:
    """Import a single date's data into MongoDB. Returns count of inserted docs."""
    filepath = RAW_DIR / f"{date_str}.json"
    if not filepath.exists():
        print(f"  No data for {date_str}")
        return 0

    with open(filepath, "r", encoding="utf-8") as f:
        topics = json.load(f)

    if not topics:
        print(f"  Empty data for {date_str}")
        return 0

    collection = db["trending_topics"]
    count = 0

    for topic in topics:
        doc = {
            "text": topic.get("text", ""),
            "textEn": topic.get("textEn", ""),
            "count": topic.get("count", 0),
            "url": topic.get("url", ""),
            "status": topic.get("status", "hot"),
            "velocity": topic.get("velocity", 0),
            "firstSeen": topic.get("firstSeen", ""),
            "peakCount": topic.get("peakCount", 0),
            "date": date_str,
            "source": "weibo-daily-hot-search",
        }

        if topic.get("engagement"):
            doc["engagement"] = topic["engagement"]

        # Add text segmentation for NLP analysis
        doc["segmented_text"] = segment_text(topic.get("text", ""))

        # Upsert by text + date to avoid duplicates
        collection.update_one(
            {"text": doc["text"], "date": date_str},
            {"$set": doc},
            upsert=True,
        )
        count += 1

    print(f"  Imported {count} topics for {date_str}")
    return count


def main():
    client = MongoClient(MONGO_URI)
    db = client[MONGO_DB]

    if len(sys.argv) > 1 and sys.argv[1] == "--all":
        # Import all available dates
        total = 0
        for filepath in sorted(RAW_DIR.glob("*.json")):
            date_str = filepath.stem
            total += import_date(db, date_str)
        print(f"\nTotal: {total} topics imported")
    elif len(sys.argv) > 1:
        # Import specific date
        import_date(db, sys.argv[1])
    else:
        # Import today
        today = datetime.now().strftime("%Y-%m-%d")
        import_date(db, today)

    client.close()


if __name__ == "__main__":
    main()
