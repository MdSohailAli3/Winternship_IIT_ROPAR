import React from "react";
import { ArticleApproval } from "./components/ArticleApproval";
import { CommentBox } from "./components/CommentBox";

export default function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>NewsFleet Dashboard</h1>

      <ArticleApproval
        article={{ title: "Breaking News", author: "Editor" }}
      />

      <hr />

      <CommentBox
        onPost={(comment) => {
          console.warn("Comment posted:", comment);
        }}
      />
    </div>
  );
}
