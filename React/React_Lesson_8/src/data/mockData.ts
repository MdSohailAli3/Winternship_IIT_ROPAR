export const analyticsData = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  value: Math.random() * 100
}));

export const comments = [
  { id: 1, text: "Great stream quality!" },
  { id: 2, text: "Overlay looks clean" },
  { id: 3, text: "Lagging a bit" }
];

export const overlays = [
  { id: 1, label: "FPS Counter" },
  { id: 2, label: "Bitrate" }
];

export const tags = ["React", "Performance", "Memoization", "Video"];
