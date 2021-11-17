import React from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Hellopage = () => {
    return (
      <div>
        <h1>welcome to the website</h1>
        <p>tell us you are student or Faculty</p>
        <div>
          Faculty
          <Link to="/FacultyLogin">
            <Button variant="outlined">click-here</Button>
          </Link>
        </div>
        <br />

        <br />
        <div>
          Student
          <Link to="/StudentLogin">
            <Button variant="outlined">click-here</Button>
          </Link>
        </div>
      </div>
    );
}
