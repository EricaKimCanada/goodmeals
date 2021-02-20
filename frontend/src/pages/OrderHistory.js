import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default function OrderHistory(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  const useStyles = makeStyles((theme) => ({
    divDivider: {
      backgroundColor: "teal",
      textAlign: "center",
      color: "#ffffff",
      paddingTop: "1%",
      paddingBottom: "1%",
      marginTop: "3%",
      marginBottom: "4%",
    },
  }));

  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: "url(/images/orderimg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "3%",
        marginTop: "-2%",
        paddingBottom: "3%",
        height: "100%",
      }}
    >
      <div className="col-xs-12" className={classes.divDivider}>
        <h1>Order History</h1>
      </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <TableContainer
          component={Paper}
          style={{ width: "70%", marginLeft: "15%" }}
        >
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell style={{ color: "white", fontWeight: "bold" }}>
                  Order Number
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Order Date
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Total Price
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Order Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell align="left">{order._id}</TableCell>
                  <TableCell align="right">
                    {order.createdAt.substring(0, 10)}
                  </TableCell>
                  <TableCell align="right">
                    {order.totalPrice.toFixed(2)}$
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button
                      type="button"
                      size="medium"
                      onClick={() => {
                        props.history.push(`/order/${order._id}`);
                      }}
                      style={{
                        fontWeight: "900",
                        backgroundColor: "cadetblue",
                      }}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
