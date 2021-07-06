import React from "react";
import Button from "@material-ui/core";

export default function ProjectButton({ onClickProject }) {
  return (
    <Button variant="contained" color="primary" onClick={onClickProject}>
      Add Project
    </Button>
  );
}
