import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ArticleApproval } from "../components/ArticleApproval";

test("shows Approved! after clicking approve", () => {
    render(
        <ArticleApproval article={{ title: "Test", author: "Author" }} />
    );

    fireEvent.click(screen.getByText("Approve"));

    expect(screen.getByText("Approved!")).toBeInTheDocument();
});
