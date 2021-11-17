import React from "react";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";


const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "review",
    headerName: "Review",
    width: 150,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    editable: true,
  },
  //{
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "firstName") || ""} ${
  //       params.getValue(params.id, "lastName") || ""
  //     }`,
  // },
];

const rows = [
  { id: 1, date: "23/23/2021", review: "Good", age: 35 },
  { id: 2, date: "1/4/2022", review: "Best", age: 42 },
  { id: 3, date: "5/7/2022", review: "Okay", age: 45 },
  { id: 4, date: "10/3/2021", review: "Outstanding", age: 16 },
];

export default function Index() {
  return (
    <>
      <div className="App">
        <h1>Student Portal</h1>
      </div>
      <div>
        <div>
          Upload the Abstract here &nbsp;
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden />
          </Button>
        </div>
        <br />
      </div>
      <div>
        <div>
          Paste Your Project Link here &nbsp;
          <TextField id="outlined-basic" label="link-here" variant="outlined" />
        </div>
      </div>

       <h4 className="App">The Review Sections are</h4> 
      <div className="App">
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>  
    </>
  );
}
