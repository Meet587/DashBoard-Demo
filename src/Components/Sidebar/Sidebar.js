import React, { useState } from "react";
import Logo from "../../assets/Index";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expended, setExpended] = useState(true);
  const SidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
    
      <motion.div
        className="bars"
        style={expended ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpended(!expended)}
      >
        <UilBars />
      </motion.div>
      <motion.div
        className="Sidebar"
        variants={SidebarVariants}
        animate={window.innerWidth <= 768 ? `${expended}` : ``}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((items, i) => {
            return (
              <div
                className={selected == i ? "menuItem active" : "menuItem"}
                key={i}
                onClick={() => setSelected(i)}
              >
                <div>
                  <items.icon />
                </div>
                <span>{items.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
