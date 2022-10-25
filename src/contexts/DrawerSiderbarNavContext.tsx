/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export interface DrawerSiderbarNavContextData {
  open: boolean;
  toggle(): void;
}

const initialValues = {} as DrawerSiderbarNavContextData;

const DrawerSiderbarNavContext = React.createContext(initialValues);

const DrawerSiderbarNavProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const toggle = React.useCallback(() => {
    setOpen((state) => !state);
  }, []);

  React.useEffect(() => {
    toggle();
  }, [router.asPath]);

  return (
    <DrawerSiderbarNavContext.Provider value={{ open, toggle }}>
      {children}
    </DrawerSiderbarNavContext.Provider>
  );
};

export { DrawerSiderbarNavContext, DrawerSiderbarNavProvider, initialValues };
