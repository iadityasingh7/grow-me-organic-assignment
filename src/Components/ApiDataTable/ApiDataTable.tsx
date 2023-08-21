import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// interface ApiSingleDataFormat {
//   userId: number;
//   id: number;
//   title: string;
// }

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userId",
    headerName: "User Id",
    width: 150,
  },
  {
    field: "title",
    headerName: "Title",
    width: 650,
  },
];

// interface ApiDataFormat extends Array<ApiSingleDataFormat> {}


const fetchData = async () => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    const responseData = await fetch(apiUrl);
    const jsonData = await responseData.json();

    return jsonData;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export default function ApiDataTable() {
  // Todo! Decalred but Not able to assig interface to state variable
  // let apiData: ApiDataFormat = [
  //   {
  //     id: 2,
  //     userId: 3,
  //     title: "chdbn cd",
  //   },
  // ];

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData().then((jsonData) => {
      setApiData(jsonData);
    });
  }, []);

  return (
    <ul>
      <Box sx={{ height: 635, width: "98%" }}>
        <DataGrid
          rows={apiData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          />
      </Box>
    </ul>
  );
}
