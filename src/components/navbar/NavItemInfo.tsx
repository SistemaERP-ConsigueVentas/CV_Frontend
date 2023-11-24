import { NavLink } from "react-router-dom";
interface PropsInfo {
  name: string;
  url: string;
}

function NavItemInfo({ url, name }: PropsInfo) {
  return (
    <NavLink className="block py-4 h-14 font-medium hover:bg-gray-700" to={url}>
      {name}
    </NavLink>
  );
}

export default NavItemInfo;
