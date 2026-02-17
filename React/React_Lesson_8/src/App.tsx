import { useCallback, useState } from "react";
import AnalyticsChart from "./components/AnalyticsChart";
import CommentsPanel from "./components/CommentsPanel";
import VideoOverlay from "./components/VideoOverlay";
import TagList from "./components/TagList";
import TagInput from "./components/TagInput";

import { analyticsData, comments, overlays, tags as initialTags } from "./data/mockData";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [tags, setTags] = useState(initialTags);
  const [tagFilter, setTagFilter] = useState("");

  const addTag = useCallback((tag: string) => {
    setTags(prev => [...prev, tag]);
  }, []);

  return (
    <div className="container">
      <button onClick={() => setCounter(c => c + 1)}>
        Unrelated State: {counter}
      </button>

      <AnalyticsChart data={analyticsData} />
      <VideoOverlay overlays={overlays} />
      <CommentsPanel comments={comments} />

      <TagInput onAddTag={addTag} />
      <input onChange={e => setTagFilter(e.target.value)} placeholder="Filter tags" />
      <TagList tags={tags} filter={tagFilter} />
    </div>
  );
}
