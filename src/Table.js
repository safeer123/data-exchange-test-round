import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-balham.css";

import Actions from "./Actions";

const columnDefs = [
  {
    headerName: "Symbol",
    field: "Symbol",
    width: 100,
    suppressSizeToFit: true
  },
  {
    headerName: "Description",
    field: "Description",
    width: 150,
    minWidth: 50,
    maxWidth: 100
  },
  {
    headerName: "Underlying Asset",
    field: "Underlying_Asset",
    width: 150
  },
  {
    headerName: "Mark Price",
    field: "Mark_Price",
    width: 100
  }
];
export default () => {
  const { data } = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(data);

  React.useEffect(() => {
    dispatch({
      type: Actions.FETCH_TABLE_DATA
    });
  }, []);

  return (
    <AgGridReact
      columnDefs={columnDefs}
      rowData={data}
      enableFilter={true}
      enableSorting={true}
    />
  );
};
