import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CommentBox } from "../components/CommentBox";

test("posts comment and clears input", () => {
    const mockPost = jest.fn();

    render(<CommentBox onPost={mockPost} />);

    const input = screen.getByLabelText("comment-input");
    const button = screen.getByText("Post");

    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(button);

    expect(mockPost).toHaveBeenCalledWith("Hello");
    expect(input).toHaveValue("");
});
