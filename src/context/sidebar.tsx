import { createContext, PropsWithChildren, useState } from "react";

interface SidebarContextProps {
  open: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>(null);

export const SidebarContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [open, setOpen] = useState<boolean>(false);
  console.log("SidebarContext->open", open);

  const toggleSidebar = () => {
    setOpen((old) => !old);
  };

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
