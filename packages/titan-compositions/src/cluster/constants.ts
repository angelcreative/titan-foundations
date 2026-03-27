export const TITAN_CLUSTER_COLORS = [
  '#8e8de5',
  '#7faffa',
  '#92c9c2',
  '#f29e77',
  '#8cbddb',
  '#f3c880',
  '#f17bb7',
  '#d2779b',
  '#b878f8',
  '#ad97f9',
  '#7ed7de',
  '#90d0ab',
  '#9dea8d',
  '#d5f389',
  '#fae08a',
  '#f1867f',
  '#da797f',
  '#FB876A',
  '#cb998b',
  '#9c706f',
]

export const TITAN_CLUSTER_GROUP_LABELS = [
  'Fashion Influence 👗',
  'University Fitness 🌍',
  'Fitness Entertainment 🏋️',
  'Mom Life 🎶',
  'Wellness Coaching 💪',
  'Lifestyle Branding ✨',
  'Canadian Family 🇨🇦',
  'Sports Marketing 🥇',
  'Tech Trends 📱',
  'Eco Living 🌿',
  'Urban Photography 📸',
  'Gourmet Food 🍔',
  'Travel Diaries ✈️',
  'Crypto News 🪙',
  'Indie Gaming 🎮',
  'Pet Lovers 🐶',
  'DIY Crafts 🧶',
  'Mental Health 🧠',
  'Auto Enthusiasts 🏎️',
  'Book Club 📚',
]

export const TITAN_CLUSTER_DEFAULT_GROUP_COUNT = 8
export const TITAN_CLUSTER_DEFAULT_NODE_COUNT = 450

export function getTitanClusterSegmentLabel(
  groupIndex: number,
  groupCount: number,
  segmentLabels?: string[],
): string {
  const labels =
    segmentLabels && segmentLabels.length >= groupCount
      ? segmentLabels
      : TITAN_CLUSTER_GROUP_LABELS
  return labels[groupIndex] ?? `Segment ${groupIndex + 1}`
}
