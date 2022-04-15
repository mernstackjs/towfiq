import React from "react";
import { MenuList, MenuItem } from "@mui/material";
const Nav = () => {
  const navData = ["Home", "Läxhjälp", "Om oss", "Kontekt"];
  return (
    <header>
      <div className="logo">BrandName</div>
      <MenuList>
        <MenuItem>halo</MenuItem>
      </MenuList>
    </header>
  );
};

export default Nav;
