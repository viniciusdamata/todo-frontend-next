import { createContext, PropsWithChildren, useState } from "react";

interface SidebarContextProps {
  open: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  open: false,
  toggleSidebar: () => {},
});

export const SidebarContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpen((old) => !old);
  };

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
