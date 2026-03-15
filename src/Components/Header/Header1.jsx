import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import {
  DarkModeOutlined,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
import { Box } from "@mui/material";
// selected menu
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["AR", "EN"];
export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  // selected menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Box sx={{ bgcolor: "#283445" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#d23f57",
            borderRadius: "12px",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          HOT
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "300",
            color: "#fff",
          }}
        >
          Free Express Shipping
        </Typography>
        <Box flexGrow={"1"} />
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark",
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
                  theme.palette.mode === "dark" ? "light" : "dark",
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined fontSize="small" />
            </IconButton>
          )}
          {/*  */}
        </div>
        <List component="nav" sx={{ bgcolor: "transparent", color: "#fff" }}>
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText primary={options[selectedIndex]} />
          </ListItemButton>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "lock-button",
              role: "listbox",
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={false}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <IconButton>
          <Facebook
            sx={{
              fontSize: "14px",
              color: "#fff",
            }}
          />
        </IconButton>
        <IconButton>
          <Instagram
            sx={{
              fontSize: "14px",
              color: "#fff",
            }}
          />
        </IconButton>
        <IconButton>
          <Twitter
            sx={{
              fontSize: "14px",
              color: "#fff",
            }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}
