import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const PaymentTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {
      id: "name",
      label: "Name",
      align: "center",
      minWidth: 120,
    },
    {
      id: "regNo",
      label: "Registration Number",
      minWidth: 120,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "status",
      label: "Status",
      minWidth: 120,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 120,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "phone",
      label: "Phone",
      align: "center",
      minWidth: 120,
    },
    {
      id: "date",
      label: "Date",
      align: "center",
      minWidth: 120,
      format: (value) => new Date(value).toLocaleDateString("en-US"),
    },
  ];

  function createData(name, regNo, status, amount, phone, date) {
    return { name, regNo, status, amount, phone, date };
  }

  const rows = [
    createData(
      "Musaiyib Yakubu Usman",
      "NAS/CSC/18/1181",
      "Paid",
      20000,
      "07010952922",
      Date.parse("2022-07-09T01:14:26.859+00:00")
    ),
  ];

  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        marginTop: 10,
        marginBottom: 10,
        overflow: "hidden",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PaymentTable;
