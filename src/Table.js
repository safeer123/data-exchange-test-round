import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import socketController from "./WSConnect";

import Actions from "./Actions";

const columnDefs = [
  {
    headerName: "Symbol",
    field: "symbol",
    width: 150,
    pinned: "left",
  },
  {
    headerName: "Description",
    field: "description",
    width: 200,
  },
  {
    headerName: "Underlying Asset",
    field: "underlying_asset.symbol",
    width: 150
  },
  {
    headerName: "Mark Price",
    field: "Mark_Price",
    width: 150
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

  React.useEffect(() => {
    socketController.connect();
    setTimeout(() => {
      const symbols = data?.map(item => item.symbol) || [];
      socketController.sendData(symbols);
    }, 3000);
  }, [data]);

  return (
    <div className="ag-theme-balham table-root">
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        enableFilter={true}
        enableSorting={true}
      />
    </div>

  );
};
