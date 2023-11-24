import { FileText, Home, PieChart, Receipt, Settings } from "lucide-react";

const MENU_ITEMS = [
  {
    name: "Inicio",
    url: "/",
    icon: <Home/>,
  },
  {
    name: "Gastos",
    url: "/users",
    icon: <Receipt/>,
  },
  {
    name: "Reportes",
    url: "/file",
    icon: <PieChart/>,
  },
  {
    name: "Facturación",
    url: "/billing",
    icon: <FileText/>,
  },
  {
    name: "Configuración",
    url: "/reports",
    icon: <Settings/>,
  }
];

export { MENU_ITEMS };
