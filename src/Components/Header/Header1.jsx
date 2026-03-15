import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, Facebook, Instagram, LightModeOutlined, Twitter } from "@mui/icons-material";
import {Box} from "@mui/material";

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box sx={{bgcolor:"#283445",}}>
      <Stack direction={"row"} alignItems={"center"}>
    <Typography sx={{
      mr:2,
      p:"3px 10px",
      bgcolor:"#d23f57",
      borderRadius:"12px",
      fontSize:"10px",
      fontWeight:"bold",
      color:"#fff"
    }}>
      HOT
    </Typography>
    <Typography sx={{
      fontSize:"12px",
      fontWeight:"300",
      color:"#fff"
    }}>
      Free Express Shipping
    </Typography>
      <Box flexGrow={"1"}/>
      <div>
        {theme.palette.mode === "light" ? (
          <IconButton 
          sx={{color: "white"}}
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined fontSize="small" />
          </IconButton>
        )}
      </div>
      <IconButton >
      <Facebook 
      sx={{
        fontSize:"14px",
        color:"#fff"
      }}
      />
      </IconButton>
      <IconButton >
      <Instagram 
      sx={{
        fontSize:"14px",
        color:"#fff"
      }}
      />
      </IconButton>
      <IconButton >
      <Twitter 
      sx={{
        fontSize:"14px",
        color:"#fff"
      }}
      />
      </IconButton>
      </Stack>
    </Box>
  );
}
