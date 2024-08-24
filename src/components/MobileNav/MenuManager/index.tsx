import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
});
export default function MenuManager(props: any) {
  const [open, setOpen] = useState(false);

  return <MenuContext.Provider value={{ open, setOpen }}>{props.children}</MenuContext.Provider>;
}
