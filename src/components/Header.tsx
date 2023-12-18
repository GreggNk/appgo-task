import { Box } from "@mui/material";
import logo from "../img/logo.jpg";

export default function Header() {
  return (
    <>
      <Box>
        <img src={logo} alt="logo" style={{ width: "170px" }} />
      </Box>
    </>
  );
}
