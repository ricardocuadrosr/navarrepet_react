import {
    Avatar,
    Button,
    Card,
    CardHeader,
    Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { findProducts } from "../../state/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = () => {

    const dispatch = useDispatch();
    const {products} = useSelector(store=>store)

    console.log("products ---", products);

    useEffect(()=>{
        const data = {
            category: "canine_dry_food",
            minPrice: 0,
            maxPrice: 100000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: "",
          };
          dispatch(findProducts(data));
    },[])

  return (
    <div className="p-5 ">
      {/* <TableContainer sx={{bgcolor:"#242B2E"}} component={Paper}> */}
      <Card>
        <CardHeader title="Productos" />
      </Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Ctegoria</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.products.content?.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                    <Avatar src={item.imageUrl}></Avatar>
                </TableCell>
                <TableCell component="th" scope="row">
                    {item.title}
                </TableCell>
                <TableCell align="right">{item.category.name}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="left">
                    <Button variant="outlined">
                        Eliminar
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsTable;
