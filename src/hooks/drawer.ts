import React from "react";
import {
  DrawerSiderbarNavContextData,
  DrawerSiderbarNavContext,
  DrawerSiderbarNavProvider,
  initialValues,
} from "../contexts/DrawerSiderbarNavContext";

export function useDrawerSidebarNav(): DrawerSiderbarNavContextData {
  const context = React.useContext(DrawerSiderbarNavContext);

  if (!context || context === initialValues) {
    throw new Error("useDrawerSidebarNav not in useDrawerSidebarNav");
  }

  return context;
}

export { DrawerSiderbarNavProvider };
