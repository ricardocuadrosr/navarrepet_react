import { Dashboard } from '@mui/icons-material'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import QrCodeIcon from '@mui/icons-material/QrCode';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const menu = [
    {name: "Dashboard", path:"/admin", icon: <Dashboard />},
    {name: "Products", path:"/admin/products", icon: <Inventory2Icon />},
    {name: "Customers", path:"/admin/customers", icon: <PeopleAltIcon />},
    {name: "Orders", path:"/admin/orders", icon: <PointOfSaleIcon />},
    {name: "AddProduct", path:"/admin/product/create", icon: <QrCodeIcon />},
];

const Links = () => {
    const navigate = useNavigate();

    return (
        <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {menu.map((item) => (
                    <li
                        key={item.name}
                        className="flex cursor-pointer items-center p-3"
                        onClick={() => navigate(item.path)}
                        style={{ cursor: 'pointer', outline: 'none' }}
                        tabIndex={0} // Hace que los elementos sean seleccionables
                        onFocus={(e) => e.currentTarget.style.outline = 'none'} // Elimina la línea de enfoque
                        onMouseDown={(e) => e.preventDefault()} // Previene la aparición de la línea al hacer clic
                    >
                        <span className={"font-medium text-gray-600"}>
                            {item.icon ? item.icon : <Dashboard />}{" "}
                        </span>
                        <p className={"leading-1 ml-4 flex font-medium text-gray-600"}>
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Links
