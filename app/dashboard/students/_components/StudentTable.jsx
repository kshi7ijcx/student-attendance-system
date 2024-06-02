"use client";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const StudentTable = ({ studentList }) => {
  const CustomBtn = (props) => {
    return (
      <Button variant="destructive">
        <Trash2 />
      </Button>
    );
  };

  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "address", filter: true },
    { field: "contact", filter: true },
    { field: "action", cellRenderer: CustomBtn },
  ]);

  const [rowData, setRowData] = useState();
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    studentList && setRowData(studentList);
  }, [studentList]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <Input
        className="w-60 h-8 my-2"
        placeholder={"Search"}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        quickFilterText={searchVal}
        pagination={true}
        paginationPageSize={500}
        paginationPageSizeSelector={[25, 50, 75]}
      />
    </div>
  );
};
export default StudentTable;
