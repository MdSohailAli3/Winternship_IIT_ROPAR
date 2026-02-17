import React, { useState } from "react";

type Props = {
  onAddTag: (tag: string) => void;
};

const TagInput = React.memo(({ onAddTag }: Props) => {
  console.log("Rendering TagInput");
  const [value, setValue] = useState("");

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => onAddTag(value)}>Add</button>
    </div>
  );
});

export default TagInput;
