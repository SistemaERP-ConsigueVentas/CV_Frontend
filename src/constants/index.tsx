import FileIcon from "../assets/icons/FileIcon.svg";
import ProfileIcon from "../assets/icons/UserIcon.svg";

const MENU_ITEMS = [
  {
    name: "Dashboard",
    urlPage: "/",
    urlIcon: ProfileIcon,
  },
  {
    name: "Profile",
    urlPage: "/users",
    urlIcon: ProfileIcon,
  },
  {
    name: "Files",
    urlPage: "/file",
    urlIcon: FileIcon,
  },
];

export { MENU_ITEMS };
