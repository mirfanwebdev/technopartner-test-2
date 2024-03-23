import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import home from "../../assets/home2.png";
import homeActive from "../../assets/home1.png";
import menu from "../../assets/menu2.png";
import menuActive from "../../assets/menu1.png";
export default function Rootpage() {
  const navItems = [
    {
      imgSource: home,
      active: homeActive,
      alt: "Home",
      link: "/home",
    },
    {
      imgSource: menu,
      active: menuActive,
      alt: "Menu",
      link: "/menu",
    },
  ];
  return (
    <div className="h-screen scroll-smooth">
      <Outlet />
      <Navbar>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            className="flex flex-col items-center"
            to={item.link}
          >
            <img src={item.imgSource} alt={item.alt} width={30} />
            <p>{item.alt}</p>
          </NavLink>
        ))}
      </Navbar>
    </div>
  );
}
