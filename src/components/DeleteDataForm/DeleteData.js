import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteData.css";

const DeleteData = (props) => {
  const history = useNavigate();
  const closeForm = () => {
    props.setDeleteForm(false);
  };

  const delEmpData = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/employees/" + props.deleteId, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {

        var array = [...props.employee]

        if(props.deleteIndex != -1){
          array.splice(props.deleteIndex, 1);
        }

        props.setEmployee(array);
  
        props.setDeleteForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={delEmpData} method="DELETE">
        <div className="add-employee">
          <div className="emp-form-heading">
            <h3>
              <span className="cross-add-emp" onClick={closeForm}>
                &times;
              </span>
            </h3>
          </div>

          <h1 style={{ textAlign: "center" }}>Are You sure ?</h1>

          <div className="add-emp-button">
            <button>Yes</button>
          </div>
        </div>
        <div className="overlay" onClick={closeForm}></div>
      </form>
    </>
  );
};

export default DeleteData;
