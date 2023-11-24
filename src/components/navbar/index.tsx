import NavItem from "./NavItem";
import { MENU_ITEMS } from "@/constants";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import NavItemInfo from "./NavItemInfo";

interface NavbarProps {
  nameItemShow: boolean;
  handlerNameItem: () => void;
}

function Navbar({ nameItemShow, handlerNameItem }: NavbarProps) {
  return (
    <nav className="h-full bg-background flex">
      <div>
        {MENU_ITEMS.map((item, index) => (
          <NavItem key={index} {...item} itemShow={nameItemShow} />
        ))}
        <Button
          onClick={handlerNameItem}
          variant="ghost"
          className="relative top-1 h-10 left-2"
        >
          <ArrowRightLeft className="w-4" />
        </Button>
      </div>
      {nameItemShow && (
        <ul className="h-full w-52">
          {MENU_ITEMS.map((item, index) => (
            <NavItemInfo key={index} {...item} />
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
