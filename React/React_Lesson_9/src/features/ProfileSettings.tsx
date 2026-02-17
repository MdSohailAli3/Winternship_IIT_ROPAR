import { lazy, Suspense, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const SettingsPanel = lazy(() => import("../features/SettingsPanel"));

export default function ProfileSettings() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Settings</button>

      {open && (
        <Suspense fallback={<LoadingSpinner />}>
          <SettingsPanel />
        </Suspense>
      )}
    </div>
  );
}
