export interface HotWord {
  url: string;
  text: string;
  textEn?: string;
  count: number;
  // Lifecycle metadata
  firstSeen?: string;    // ISO timestamp when first observed
  peakCount?: number;    // Highest count ever recorded for this topic
  prevCount?: number;    // Count from previous scrape (for velocity calc)
  status?: "new" | "rising" | "hot" | "falling" | "gone";
  velocity?: number;     // Percentage change from previous scrape
}
