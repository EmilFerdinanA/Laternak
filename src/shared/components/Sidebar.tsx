import { useRef } from "react";
import { StyleClass } from "primereact/styleclass";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

interface IMainMenu {
  label: string;
  icon: string;
  link: string;
}

export default function Sidebar() {
  const btnRef2 = useRef(null);

  const mainMenu: IMainMenu[] = [
    {
      label: "Dashboard",
      icon: "pi-home",
      link: "/",
    },
    {
      label: "User",
      icon: "pi-user",
      link: "user",
    },
    {
      label: "Product",
      icon: "pi-briefcase",
      link: "product",
    },
    {
      label: "Setting",
      icon: "pi-cog",
      link: "setting",
    },
  ];

  return (
    <div className="text-black h-screen w-[24rem] hidden md:flex flex-col bg-gray-100 shadow-2xl pt-3">
      <Logo />
      <div className="overflow-y-auto">
        <ul className="flex flex-col gap-1 p-3">
          {mainMenu.map((menu) => (
            <li key={menu.label}>
              <NavLink
                to={menu.link}
                className={({ isActive }) =>
                  `${
                    isActive && "bg-red-600 text-white"
                  } flex align-items-center cursor-pointer p-3 border-round text-black hover:text-white hover:bg-red-600 transition-duration-150 transition-colors w-full`
                }
              >
                <i className={`pi ${menu.icon} mr-2`} />
                <span className="font-medium">{menu.label}</span>
              </NavLink>
            </li>
          ))}

          <li>
            <StyleClass
              nodeRef={btnRef2}
              selector="@next"
              enterClassName="hidden"
              enterActiveClassName="slidedown"
              leaveToClassName="hidden"
              leaveActiveClassName="slideup"
            >
              <div
                ref={btnRef2}
                className="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full text-black hover:text-white hover:bg-red-600"
              >
                <i className="pi pi-chart-line mr-2"></i>
                <span className="font-medium">Reports</span>
                <i className="pi pi-chevron-down ml-auto mr-1"></i>
              </div>
            </StyleClass>
            <ul className="list-none py-0 pl-3 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
              <li>
                <a className="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full text-black hover:text-white hover:bg-red-600">
                  <i className="pi pi-chart-line mr-2"></i>
                  <span className="font-medium">Expenses</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* <div className="mt-auto">
        <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
        <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors">
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
          />
          <span className="font-bold">Amy Elsner</span>
        </a>
      </div> */}
    </div>
  );
}
