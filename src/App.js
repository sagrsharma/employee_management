import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import AddProject from "./components/AddProject";
import EmployeeList from "./components/EmployeeList";
import "./styles.css";

const initialState = [
  {
    id: 1,
    name: "Jogn",
    email: "email@example.com",
    mobileNumber: "98787",
    projectTitle: "Project 1",
  },
  {
    id: 2,
    name: "Josfdgn",
    email: "emaiasdfl@example.com",
    mobileNumber: "95498787",
    projectTitle: "Project 2",
  },
  {
    id: 3,
    name: "Jogasfdn",
    email: "eadsfmail@example.com",
    mobileNumber: "0090998787",
    projectTitle: "Project 3",
  },
];

const initialProjectList = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
];

export default function App() {
  const [employeeList, setEmployeeList] = useState(initialState);
  const [projectList, setProjectList] = useState(initialProjectList);

  return (
    <div className="App">
      <AddProject setProjectList={setProjectList} projectList={projectList} />
      <AddEmployee
        employeeList={employeeList}
        setEmployeeList={setEmployeeList}
        projectList={projectList}
      />
      <EmployeeList employeeList={employeeList} />
    </div>
  );
}
