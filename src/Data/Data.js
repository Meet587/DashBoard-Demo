// Sidebars Imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";

//Card Theme Import
import { CardDark, CardLight } from "../assets/Themes/CardTheme";

const Theme = localStorage.getItem("Theme");

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

// Card Data
export const CardData = [
  {
    id: 2,
    title: "Sales",
    color: Theme === "dark" ? CardDark.Card1 : CardLight.Card1,
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    id: 3,
    title: "Revenue",
    color: Theme === "dark" ? CardDark.Card2 : CardLight.Card2,
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    id: 4,
    title: "Expenses",
    color: Theme === "dark" ? CardDark.Card3 : CardLight.Card3,
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdateData = [
  {
    img: img1,
    name: "Meet Rakholiya",
    noti: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    time: "25 sec ago",
  },
  {
    img: img2,
    name: "Meet Rakholiya",
    noti: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    time: "30 min ago",
  },
  {
    img: img3,
    name: "Meet Rakholiya",
    noti: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    time: "2 hours ago",
  },
];
