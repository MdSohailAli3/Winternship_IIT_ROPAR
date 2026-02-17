import React, { useMemo } from "react";

type Props = {
  tags: string[];
  filter: string;
};

const TagList = React.memo(({ tags, filter }: Props) => {
  console.log("Rendering TagList");

  const filteredTags = useMemo(
    () => tags.filter(t => t.toLowerCase().includes(filter.toLowerCase())),
    [tags, filter]
  );

  return (
    <ul>
      {filteredTags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
});

export default TagList;
