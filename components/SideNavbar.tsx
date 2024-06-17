"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};
import {
  SlidersVertical,
  ChevronRight,
  Newspaper,
  CircleGauge,
  FileUp,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[150px] border-r px-7  pb-20 pt-40">
      <Nav
        links={[
          {
            title: "Dashbord",
            icon: CircleGauge,
            href: "/dashbord",
            variant: "default",
          },
          {
            title: "Report",
            icon: Newspaper,
            href: "/report",
            variant: "ghost",
          },
          {
            title: "Export",
            icon: FileUp,
            href: "/export",
            variant: "ghost",
          },
          {
            title: "Setting",
            icon: SlidersVertical,
            href: "/setting",
            variant: "ghost",
          },
        ]}
        isCollapsed={false}
      />
    </div>
  );
}
