"use client";

import { useChat } from "ai/react";

export default function MyComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className={"flex flex-col"}>
      <ul>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </li>
        ))}
      </ul>
      <div className="sticky bottom-0 flex-shrink-0 min-w-0 min-h-0">
        <div
          className={
            "p-3 pr-2.5 bg-white/70 backdrop-blur shadow-[0_-1px_rgba(229,231,235,.53),0_5px_20px_-5px_rgba(0,0,0,.24)]"
          }
        >
          <form
            onSubmit={handleSubmit}
            className={"relative flex items-center max-w-2xl mx-auto"}
          >
            <textarea
              value={input}
              placeholder="Send a message"
              className={
                "w-full rounded-md flex-1 sm:text-sm text-base bg-zinc-200/50 border border-zinc-200/80 resize-none scroll-m-2 h-[38px] transition-colors focus:border-zinc-400 focus:ring-0 focus:outline-none pb-12"
              }
              onChange={handleInputChange}
            />
            <div
              className={
                "absolute right-2 bottom-2 inline-flex gap-1 @sm:gap-2 items-center justify-end"
              }
            >
              <button
                type="submit"
                className={
                  "whitespace-nowrap font-medium group inline-flex justify-center gap-2 items-center bg-zinc-900 hover:bg-zinc-800 text-zinc-100 rounded-md shadow-md text-sm hover:text-zinc-300 py-1.5 transition-colors px-3 border border-zinc-700 disabled:bg-white disabled:border-zinc-200 disabled:text-zinc-400 disabled:shadow-none disabled:hover:text-zinc-400 disabled:cursor-not-allowed select-none"
                }
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
