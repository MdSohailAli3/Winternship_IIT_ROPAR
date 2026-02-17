import { useCallback, useMemo, useState } from "react";
import FilterInput from "./FilterInput";

type Comment = { id: number; text: string };

export default function CommentsPanel({ comments }: { comments: Comment[] }) {
  const [filter, setFilter] = useState("");

  const filtered = useMemo(
    () => comments.filter(c => c.text.toLowerCase().includes(filter.toLowerCase())),
    [comments, filter]
  );

  const handleFilter = useCallback((value: string) => {
    setFilter(value);
  }, []);

  return (
    <div className="card">
      <FilterInput onFilter={handleFilter} />
      <ul>
        {filtered.map(c => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
}
