import React from "react";
import { Box } from "@mui/material";

import { Icon } from "@iconify/react";

const Iconify = ({ icon, size = 24, ...others }) => {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ fontSize: size, ...others.sx }}
      {...others}
    ></Box>
  );
};

export default Iconify;
