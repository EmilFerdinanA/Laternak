import { useRef } from "react";
import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";

interface MenuItem {
  label?: string;
  items?: MenuItem[];
  icon?: string;
}

const items: MenuItem[] = [
  {
    label: "Options",
    items: [
      {
        label: "Refresh",
        icon: "pi pi-refresh",
      },
      {
        label: "Export",
        icon: "pi pi-upload",
      },
    ],
  },
];

const Header = () => {
  const menuProfie = useRef<Menu>(null);

  const profile: JSX.Element = (
    <Avatar
      onClick={(event) =>
        menuProfie.current && menuProfie.current.toggle(event)
      }
      image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
      shape="circle"
      size="large"
    />
  );

  const burgerButton: JSX.Element = <i className="pi pi-bars md:hidden" />;

  return (
    <>
      <Menubar
        start={burgerButton}
        end={profile}
        className="h-20 bg-gray-100 shadow-sm"
      />
      <Menu model={items} popup ref={menuProfie} />
    </>
  );
};

export default Header;
