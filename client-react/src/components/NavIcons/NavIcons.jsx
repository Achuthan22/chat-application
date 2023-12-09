import React, { useRef } from "react";

import { UilSetting } from "@iconscout/react-unicons";

import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

const NavIcons = () => {
  const menuLeft = useRef(null);

  const items = [
    {
      label: "Logout",
      icon: "pi pi-file-export",
      command: () => {
        localStorage.clear();
        document.location.reload();
      },
    },
  ];

  return (
    <div className="navIcons">
      <Menu model={items} ref={menuLeft} popup id="popup_menu_left" />

      <Button
        icon="pi pi-cog"
        rounded
        text
        severity="info"
        aria-label="menu"
        onClick={(event) => menuLeft.current.toggle(event)}
        aria-haspopup
        aria-controls="popup_menu_left"
      />
    </div>
  );
};

export default NavIcons;
