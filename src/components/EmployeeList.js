import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "0px 4em 0px 4em",
  },
});

export default function EmployeeList({ employeeList }) {
  const classes = useStyles();

  return (
    <div>
      <h2 style={{ background: "#0f1228", color: "#e7e9e7" }}>Employee List</h2>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Series</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Project</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.mobileNumber}</TableCell>
                <TableCell align="right">{row.projectTitle}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
