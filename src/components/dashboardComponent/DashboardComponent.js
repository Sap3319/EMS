import React, { useState, useEffect } from "react";
import Sidebar from "../../utils/dashboard/sidebar";
import Main from "../../utils/dashboard/maincover";
import Nav from "../../utils/dashboard/navbar";
import AddEmp from "../addEmpFrom/AddEmp";

const DashboardComponent = (props) => {
  const [showAddform, setShowAddForm] = useState(false);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showForm = (show) => {
    setShowAddForm(show);
  };

  return (
    <>
      <Sidebar showForm={showForm} />
      <Nav />
      <Main employee={employee} />
      {showAddform ? (
        <AddEmp
          setFormFalse={setShowAddForm}
          setEmployee={setEmployee}
          employee={employee}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default DashboardComponent;
