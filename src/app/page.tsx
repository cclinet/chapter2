"use client";

import { useChat } from "ai/react";

export const runtime = "edge";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex h-full min-h-screen flex-1 flex-col">
      <div className="flex h-full w-full flex-1 flex-col items-center lg:justify-between">
        <div className="z-30 flex min-h-[56px] w-full items-center justify-between gap-3 bg-white px-4 shadow-[0_1px_1px_rgba(0,0,0,.05),0_1px_0_rgba(203,208,217,.28)] sm:gap-3.5">
          header
        </div>
        <div className="flex h-full w-full flex-col overflow-y-auto bg-zinc-100 md:flex-row md:overflow-y-hidden lg:pl-[260px]">
          <aside>left side</aside>
          <div className="@container h-full min-h-[250px] w-full min-w-[280px] bg-zinc-50">
            <div className="h-full w-full overflow-hidden">
              <div className="flex h-full flex-col flex-nowrap overflow-y-auto">
                <div className="sticky top-0 z-10 min-h-0 min-w-0 flex-shrink-0">
                  model name
                </div>
                <div className="min-w-0 flex-1">
                  <div className="scrolling-touch scrolling-gpu relative h-full w-full overflow-auto overscroll-y-auto pb-12">
                    content
                  </div>
                </div>
                <div className="sticky bottom-0 z-10 min-h-0 min-w-0 flex-shrink-0">
                  <form
                    onSubmit={handleSubmit}
                    className={"relative mx-auto flex max-w-2xl items-center"}
                  >
                    <textarea
                      // 78px+20px height
                      value={input}
                      placeholder="Send a message"
                      className={
                        "h-[38px] w-full flex-1 resize-none scroll-m-2 rounded-md border border-zinc-200/80 bg-zinc-200/50 pb-12 text-base transition-colors focus:border-zinc-400 focus:outline-none focus:ring-0 sm:text-sm"
                      }
                      onChange={handleInputChange}
                    />
                    <div
                      className={
                        "@sm:gap-2 absolute bottom-2 right-2 inline-flex items-center justify-end gap-1"
                      }
                    >
                      <button
                        type="submit"
                        className={
                          "group inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-100 shadow-md transition-colors hover:bg-zinc-800 hover:text-zinc-300 disabled:cursor-not-allowed disabled:border-zinc-200 disabled:bg-white disabled:text-zinc-400 disabled:shadow-none disabled:hover:text-zinc-400"
                        }
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Chat /> */}
    </div>
  );
}
