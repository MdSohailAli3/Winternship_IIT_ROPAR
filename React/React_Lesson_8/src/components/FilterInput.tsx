import React from "react";

type Props = {
  onFilter: (value: string) => void;
};

const FilterInput = React.memo(({ onFilter }: Props) => {
  console.log("Rendering FilterInput");
  return (
    <input
      placeholder="Filter comments"
      onChange={(e) => onFilter(e.target.value)}
    />
  );
});

export default FilterInput;
