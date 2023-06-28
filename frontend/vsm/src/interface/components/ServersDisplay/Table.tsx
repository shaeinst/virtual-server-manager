import { useState } from "react"
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid"

import "./stylesServerDisplay.scss"

const columns: GridColDef[] = [
    {
        field: "server",
        headerName: "SERVER",
        width: 130,
        headerClassName: "header",
    },
    {
        field: "status",
        headerName: "STATUS",
        width: 130,
        headerClassName: "header",
        // cellClassName: (params: GridCellParams) => {
        //     return params.value === "online"
        //         ? "cell__status-online"
        //         : "cell__status-offline"
        // },
    },
]

const rows = [
    { id: 1, server: "Snow", status: "online" },
    { id: 2, server: "Lannister", status: "offline" },
    { id: 3, server: "Lannister", status: "online" },
    { id: 4, server: "Stark", status: "offline" },
    { id: 5, server: "Targaryen", status: "online" },
    { id: 6, server: "Melisandre", status: "offline" },
    { id: 7, server: "Clifford", status: "online" },
    { id: 8, server: "Frances", status: "offline" },
    { id: 9, server: "Roxie", status: "online" },
]

function Table() {
    //

    // servers are selected and store in [] by id
    const [selectedServers, setSelectedServers] =
        useState<GridRowSelectionModel>([])

    const Display = () => {
        //

        return (
            <div className="TABLE" style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 100, 200, 1000]}
                    checkboxSelection
                    getRowClassName={(params) => {
                        return params.row.status === "online"
                            ? ""
                            : "cell__status-offline"
                    }}
                    rowSelectionModel={selectedServers}
                    onRowSelectionModelChange={(servers) => {
                        setSelectedServers(servers)
                    }}
                />
            </div>
        )
    }

    return {
        Display,
        selectedServers,
    }
}

export default Table
