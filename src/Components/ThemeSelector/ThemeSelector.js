import React from "react";
// import "../../App.css";
// Light Theme
const Theme1 = React.lazy(() => import("../../assets/Themes/Theme1"));
// Dark Theme
const Theme2 = React.lazy(() => import("../../assets/Themes/Theme2"));

const ThemeSelector = ({ children }) => {
  const theme = localStorage.getItem("Theme");

  return (
    <>
      <React.Suspense fallback={<div>Loading....</div>}>
        {theme === "light" && <Theme1 />}
        {theme === "dark" && <Theme2 />}
      </React.Suspense>
      {children}
    </>
  );
};

export default ThemeSelector;
