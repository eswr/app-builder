import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => (
  <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
    <div className="container flex h-14 items-center"></div>
  </header>
);

export default function Builder() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">
          <div className="border-b">
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
              <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                <div
                  dir="ltr"
                  className="relative overflow-hidden h-full py-6 pl-8 pr-6 lg:py-8"
                  style={{}}
                ></div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <main role="main" className="w-full flex flex-col h-screen">
        <Button>Click me</Button>
      </main>
    </div>
  );
}
