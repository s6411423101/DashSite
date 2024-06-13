"use client";
import { useState } from "react";
import { Nav } from "./nav";
type Props = {};
import {
  SlidersVertical,
  ChevronRight,
  Newspaper,
  CircleGauge,
  FileUp,
} from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "./button";
export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashbord",
            label: "",
            icon: CircleGauge,
            variant: "default",
          },
          {
            title: "Report",
            label: "",
            icon: Newspaper,
            variant: "ghost",
          },
          {
            title: "Export",
            label: "",
            icon: FileUp,
            variant: "ghost",
          },
          {
            title: "setting",
            label: "",
            icon: SlidersVertical,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
