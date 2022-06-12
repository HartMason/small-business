import * as React from "react";
import Stack from "@mui/material/Stack";

export default function BasicStack(props) {
  return (
    <Stack sx={props.sx} spacing={2}>
      {props.children}
    </Stack>
  );
}
