import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import home from "../../assets/home2.png";
import menu from "../../assets/menu2.png";
export default function Rootpage() {
  const navItems = [
    {
      imgSource: home,
      alt: "home",
    },
    {
      imgSource: menu,
      alt: "menu",
    },
  ];
  return (
    <div>
      <h1>Root Page</h1>
      <div className="shadow-lg">
        <Outlet />
      </div>
      <Navbar>
        {navItems.map((item, index) => (
          <img key={index} src={item.imgSource} alt={item.alt} width={40} />
        ))}
      </Navbar>
    </div>
  );
}
