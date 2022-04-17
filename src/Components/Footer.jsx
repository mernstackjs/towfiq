import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        zIndex: "55",
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <span>&copy; All right resever</span>
    </Box>
  );
}

export default Footer;
