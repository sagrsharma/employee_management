import React, { useState } from "react";
import Modal from "react-modal";
import {
  Button,
  Grid,
  TextField,
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
}));
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("*");

export default function AddEmployee({
  employeeList,
  setEmployeeList,
  projectList,
}) {
  const classes = useStyles();
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [project, setProject] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function onSelect(e) {
    setProject(e.target.value);
  }

  function reset() {
    setName("");
    setEmail("");
    setMobileNumber("");
    setProject("");
  }
  function closeModal() {
    setIsOpen(false);
    setName("");
    setEmail("");
    setMobileNumber("");
    setProject("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100);
    const employee = {
      id,
      name,
      email,
      mobileNumber,
      projectTitle: project,
    };
    localStorage.setItem("employeeDetail", JSON.stringify(employee));
    setEmployeeList([...employeeList, employee]);
    closeModal();
  };

  return (
    <div>
      <Grid container style={{ marginTop: "1em" }}>
        <Grid item sm={10}></Grid>
        <Grid item sm={2}>
          <Button variant="contained" color="primary" onClick={openModal}>
            Add Employee
          </Button>
        </Grid>
      </Grid>

      <Dialog
        onClose={closeModal}
        aria-labelledby="customized-dialog-title"
        open={modalIsOpen}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <DialogTitle id="customized-dialog-title" onClose={closeModal}>
            Add Employee
            <span
              onClick={closeModal}
              style={{ cursor: "pointer", float: "right" }}
            >
              X
            </span>
          </DialogTitle>
          <DialogContent dividers style={{ textAlign: "center" }}>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                variant="outlined"
                label="Name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="small"
                error={!name}
                id="outlined-error"
                required
              />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                variant="outlined"
                label="Email"
                placeholder="Enter Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                error={!email}
                id="outlined-error"
                required
              />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                variant="outlined"
                label="Mobile"
                placeholder="Enter Mobile"
                value={mobileNumber}
                type="number"
                onChange={(e) => setMobileNumber(e.target.value)}
                size="small"
                id="outlined-error"
                error={!mobileNumber}
                required
              />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-error-label"
                style={{ marginTop: "-8px" }}
              >
                Projects *
              </InputLabel>
              <Select
                error={!project}
                style={{ width: "230px", height: "40px" }}
                id="demo-simple-select-error"
                labelId="demo-simple-select-error-label"
                value={project}
                onChange={onSelect}
                label="Projects"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {projectList.map((project) => (
                  <MenuItem key={project.id} value={project.title}>
                    {project.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions style={{ justifyContent: "center" }}>
            <FormControl variant="outlined" className={classes.formControl}>
              <Button variant="outlined" color="primary" type="submit">
                Save
              </Button>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <Button variant="outlined" color="secondary" onClick={reset}>
                Reset
              </Button>
            </FormControl>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
