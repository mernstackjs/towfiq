import React from "react";
import { MenuList, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
const Nav = () => {
  const navData = [
    { path: "Home", text: "Home" },
    { path: "Laxhjalp", text: "Läxhjälp" },
    { path: "Home", text: "Om Oss" },
  ];
  return (
    <header
      style={{
        height: "23px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        color: "white",
        padding: "0 20px",
        boxShadow: "1px 2px 15px 2px rgba(0,0,0,0.90)",
        position: "fixed",
        top: "0",
        backgroundColor: "black",
        color: "white",
        zIndex: "6666",
        width: "100%",
      }}
    >
      <div className="logo">Towfiq</div>
      <MenuList sx={{ display: "flex" }}>
        {navData.map((nav, index) => (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            key={index}
            to={nav.path}
          >
            <MenuItem
              sx={{
                fontSize: "10px",
                padding: "4px",
              }}
            >
              {nav.text}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
      <Button variant="outlined" startIcon={<PhoneInTalkIcon />}>
        0736757029
      </Button>
    </header>
  );
};

export default Nav;
