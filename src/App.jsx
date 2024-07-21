import React, { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef();

  // Column Definitions
  const columnDefs = [
    { headerName: "Event", field: "time" },
    { headerName: "col1", field: "col1" },
    { headerName: "Column 2", field: "col2" },
    { headerName: "Column 3", field: "col3" },
    { headerName: "Column 4", field: "col4" },
    { headerName: "Column 5", field: "col5" },
    { headerName: "Column 6", field: "col6" },
    { headerName: "Column 7", field: "col7" },
    { headerName: "Column 8", field: "col8" },
    { headerName: "Column 9", field: "col9" }
  ];

  // Flattened Data
  const data = [
    {
      past: [
        { col1: 'value1', col2: 'value2', col3: 'value3'},
        { col1: 'value4', col2: 'value5', col3: 'value6'}
      ],
      present: [
        { col4: 'value7', col5: 'value8', col6: 'value9' },
        { col4: 'value10', col5: 'value11', col6: 'value12' }
      ],
      future: [
        { col7: 'value13', col8: 'value14', col9: 'value15' }
      ]
    },
    {
      past: [{}, {}],
      present: [{}],
      future: [{}]
    },
    {
      past: [{}, {}],
      present: [{}, {}],
      future: [{}, {}]
    },
    {
      past: [{}, {}],
      present: [{}, {}],
      future: [{}, {}]
    }
  ];
  const flattenedData = data.flatMap((item, index) => {
    const pastRows = item.past.map((row, idx) => ({ ...row, time: 'past', id: `${index}-past${idx}` }));
    const presentRows = item.present.map((row, idx) => ({ ...row, time: 'present', id: `${index}-present-${idx}` }));
    const futureRows = item.future.map((row, idx) => ({ ...row, time: 'future', id: `${index}-future-${idx}` }));
    return [...pastRows, ...presentRows, ...futureRows];
  });

  useEffect(() => {
    setRowData(flattenedData);
    console.log(rowData)
  },[]);

  return (
    <>
    <div
      id="myGrid"
      style={{ height: '500px', width: '100%' }}
      className="ag-theme-alpine"
    >
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={rowData}
      />
      </div>
      <button onClick={() => {console.log("Clicked"); console.log(rowData);}}>Reveal</button>
      </>
  );
};

export default App;
