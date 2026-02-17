import React from "react";

type Overlay = { id: number; label: string };

const VideoOverlay = React.memo(({ overlays }: { overlays: Overlay[] }) => {
  console.log("Rendering VideoOverlay");
  return (
    <div className="card">
      {overlays.map(o => (
        <span key={o.id}>{o.label} </span>
      ))}
    </div>
  );
});

export default VideoOverlay;
