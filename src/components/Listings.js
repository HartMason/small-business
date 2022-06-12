import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from 'react-redux';

const rows = [];

export default function BasicTable(props) {
  const { businesses, user } = props;
  const dispatch = useDispatch();
  const handleDelete = (event, index) => {
    dispatch(props.removeBusiness(index))
  }

  console.log(props);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
            {user.online && <TableCell align="right">Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {businesses.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">
                <Button component={Link} to={`/About/${row.id}`}>
                  {row.business_name}
                </Button>
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.operating_hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              {user.online && (
                <TableCell align="right">
                  <DeleteIcon onClick={() => props.removeBusiness(index)}/>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
