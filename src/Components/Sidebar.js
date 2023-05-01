import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LumenContext } from "../Context/LumenContext";

const Sidebar = () => {
  const {auth} = useContext(LumenContext);
  const {pathname} = useLocation()
  const SidebarItems = [
    {
      name: "All Videos",
      route: "/main/Dashboard",
    },
    {
      name: "Saved Templates",
      route: "/main/Saved",
    },
    {
      name: "Instant Videos",
      route: "/main/Videos",
    },
  ];
  const styles = {
    position:"fixed" ,
     top:"0" ,
     borderRight:"1px solid" ,
     borderColor:"blackAlpha.300" ,
     width:{base:"100%" , md:"20%"} ,
     height:{base:"" , md:"100%"} ,
     zIndex:"5" ,
     bg:"white"
  }
  return (
    <>
    {auth ? <Box as="div" sx={styles} display={`${pathname === "/pricing" ? "none" : ""}` || `${pathname === "/payment" ? "none" : ""}` || `${pathname === "/enterprise" ? "none" : ""}`}>
    <List m="5px 0px" marginTop="110px" display={{base:"flex" , md:"block"}} >
    {SidebarItems.map((item) => {
      return (
        <ListItem  key={item.name} padding="18px" bg={pathname === item.route ? "gray.100" : ""} color={pathname === item.route ? "main" : ""} fontWeight="semibold" my={1}>
          <Link to={item.route}>
            <Text >{item.name}</Text>
          </Link>
        </ListItem>
      );
    })}
  </List>
  </Box> : ""}
    </>
  );
};

export default Sidebar;
