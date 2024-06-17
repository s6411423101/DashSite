"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import Image from "next/image";
type Props = {};
import { SlidersVertical, Newspaper, CircleGauge, FileUp } from "lucide-react";
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
    <div className="relative min-w-[150px] border-r px-9  pb-11 pt-16">
      <Image src="/pkru.png" width={170} height={200} alt="PKRU LOGO" />
      <div className="pt-20">
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
    </div>
  );
}
