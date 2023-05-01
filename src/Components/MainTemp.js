import { Box } from "@chakra-ui/react";
import React from "react";

const Main_temp = ({ Children }) => {
  const Styles = {
    position: "relative",
    left: {base:"0" , md:"20%"},
    top: {base:"200px" , md:"100px"},
    width: {base:"100%" , md:"80%"},
    bg: "gray.100",
    minHeight: "100vh",
  };
  return <Box sx={Styles}>{Children}</Box>;
};

export default Main_temp;
