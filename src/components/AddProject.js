import React, { useState } from "react";
import Modal from "react-modal";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("*");

export default function AddProject({ setProjectList, projectList }) {
  const classes = useStyles();
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectValue, setProjectValue] = useState("");
  const [temp, setTemp] = useState("");
  function onSelectProject(e) {
    setProjectValue(e.target.value);
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setProjectValue("");
  }
  function reset() {
    setProjectValue("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100);
    const project = {
      id: projectList.length + 1,
      title: projectValue,
    };
    localStorage.setItem("projectDetails", JSON.stringify(project));
    projectList.push(project);
    closeModal();
  };

  return (
    <div>
      <Grid container>
        <Grid item sm={10}></Grid>
        <Grid item sm={2}>
          <Button variant="contained" color="primary" onClick={openModal}>
            Add Project
          </Button>
        </Grid>
      </Grid>
      <Dialog
        onClose={closeModal}
        aria-labelledby="customized-dialog-title"
        open={modalIsOpen}
      >
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="add-employee__form"
        >
          <DialogTitle id="customized-dialog-title" onClose={closeModal}>
            Modal title
            <span
              onClick={closeModal}
              style={{ cursor: "pointer", float: "right" }}
            >
              X
            </span>
          </DialogTitle>
          <DialogContent dividers>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                error={!projectValue}
                id="outlined-error"
                variant="outlined"
                label="Projects"
                placeholder="Enter Project"
                value={projectValue}
                onChange={onSelectProject}
                required
              />
            </FormControl>
          </DialogContent>
          <DialogActions style={{ justifyContent: "center" }}>
            <FormControl>
              <Button variant="outlined" color="primary" type="submit">
                Save
              </Button>
            </FormControl>
            <FormControl>
              <Button
                variant="outlined"
                color="secondary"
                onClick={reset}
                type="reset"
              >
                Reset
              </Button>
            </FormControl>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
