import React from "react";
import { format } from "date-fns";

export default function AdminPanel() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Last login: {format(new Date(), "yyyy-MM-dd")}</p>
    </div>
  );
}
