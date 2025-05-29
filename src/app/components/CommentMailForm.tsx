"use client";
import { useState } from "react";

export default function CommentMailForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Yellow Dragon Fruit Website Comment/Question");
    const body = encodeURIComponent(`Name: ${name}\nComment/Question: ${content}`);
    window.location.href = `mailto:alenguo7578@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
      <input
        type="text"
        placeholder="Your Name (required)"
        required
        className="border border-yellow-300 rounded px-3 py-2"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Comment or Question (required)"
        required
        className="border border-yellow-300 rounded px-3 py-2 min-h-[80px]"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded px-4 py-2 w-fit self-end">
        Submit
      </button>
    </form>
  );
} 