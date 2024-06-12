"use client";
import { useState } from "react";
import { Nav } from "./nav";
type Props = {};
import { ArchiveX, ChevronRight, File, Inbox, Send } from "lucide-react";
export default function SideNavbar({}: Props) {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <div className="relative min-[80px] border-r px-3 pb-10 pt-24">
      {/* has error with variant */}
      <button variant="secondary" className=" rounded-full">
        <ChevronRight />
      </button>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Inbox",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Drafts",
            label: "9",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Sent",
            label: "",
            icon: Send,
            variant: "ghost",
          },
          {
            title: "Junk",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
