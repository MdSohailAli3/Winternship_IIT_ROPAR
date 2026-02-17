import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import { ErrorBoundary } from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const VideoLecture = lazy(() => import("./pages/VideoLecture"));
const Forum = lazy(() => import("./pages/Forum"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));

export default function App() {
  return (
    <div className="container">
      <Navbar />

      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecture/:id" element={<VideoLecture />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
