import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SideBarLogo from "../logo/SideBarLogo";
import { Link } from "react-router-dom";

export const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [theme, setTheme] = React.useState("light");

  const themes = {
    light: {
      sidebar: {
        backgroundColor: "#ffffff",
        color: "#607489",
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#0098e5",
        hover: {
          backgroundColor: "#c5e4ff",
          color: "#44596e",
        },
        disabled: {
          color: "#9fb6cf",
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: "#0b2948",
        color: "#8ba1b7",
      },
      menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
          backgroundColor: "#00458b",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
  };

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div className="grid grid-cols-7 min-h-[100vh]">
      <Sidebar className="col-span-2">
        <div className="px-4 mt-8">
          <SideBarLogo />
        </div>
        <Menu menuItemStyles={menuItemStyles} className="mt-4">
          <MenuItem component={<Link to="/overview" />}> Overview </MenuItem>
          <MenuItem component={<Link to="/campaign" />}> Campaign </MenuItem>
          <MenuItem component={<Link to="/trivia" />}> Trivia </MenuItem>
          <MenuItem> Wallet </MenuItem>
          <SubMenu label="Settings">
            <MenuItem component={<Link to="/settings/profile" />}>
              {" "}
              Profile{" "}
            </MenuItem>
            <MenuItem component={<Link to="/settings/security" />}>
              {" "}
              Security{" "}
            </MenuItem>
            <MenuItem component={<Link to="/settings/support" />}>
              {" "}
              FAQs & Support{" "}
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main className="col-span-5">{children}</main>
    </div>
  );
};
