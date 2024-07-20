import React, { useState } from "react";
import Links from "./Links";
import Sidebard from "./Sidebard";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Dashboard } from '@mui/icons-material'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Console from "./Console";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";
import CreateProduct from "./CreateProduct";

const menu = [
  {name: "Dashboard", path:"/admin", icon: <Dashboard />},
  {name: "Products", path:"/admin/products", icon: <Inventory2Icon />},
  {name: "Customers", path:"/admin/customers", icon: <PeopleAltIcon />},
  {name: "Orders", path:"/admin/orders", icon: <PointOfSaleIcon />},
  {name: "AddProduct", path:"/admin/product/create", icon: <QrCodeIcon />},
];

const Admin = () => {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  // const [open, setOpen] = useState(true);

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border: "1px solid blue",
        height: "100%"
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar/>} */}
        <List>
          {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>)}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
    <div>
        <div className="flex h-[100vh]">
          <CssBaseline />
          <div
            // variant="permanent"
            // sx={{
            //   height: "100vh",
            //   width: 240,
            //   flexShrink: 0
            // }}
            className=" w-[15%] border border-r-gray-300 h-full"
          >
            {drawer}
          </div>
          <div className="w-[85%]">
            <Routes>
              <Route path="/" element={<Console/>}></Route>
              <Route path="/product/create" element={<CreateProduct/>}></Route>
              <Route path="/products" element={<ProductsTable/>}></Route>
              <Route path="/orders" element={<OrdersTable/>}></Route>
              <Route path="/customers" element={<CustomersTable/>}></Route>
            </Routes>
          </div>
        </div>
    </div>
    // <div>
    //   {/* <Sidebard open={open} onClose={() => setOpen(false)} /> */}
    //   {/* <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900"> */}
    //   {/* <main
    //       className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
    //     > */}

    //   <div className="flex">
    //     <div>
    //         {/* <Sidebard open={open} onClose={() => setOpen(false)}/> */}
    //         <Box>
    //         <h1>Hola</h1>

    //         </Box>
    //     </div>
    //     <div>
    //         {/* <h1>hola</h1> */}
    //       <div className="h-full">
    //         <Routes>
    //             <Route path="/admin" element={<CreateProduct/>}/>
    //             {/* <Route path="/admin/products" element={<CreateProduct />}></Route> */}
    //         </Routes>
    //       </div>
    //     </div>

    //     {/* </main> */}
    //   </div>
    // </div>
  )
};

export default Admin;
