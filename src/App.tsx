import { createContext, useContext, useState } from 'react';
import { Box } from "@mui/material"
import Header from "./Component/Header"
import CardList from './Component/CardList';
import HelpModel from './Component/HelpModel/HelpModel';

const context = createContext(
  {} as {
    handleOpen: () => void
  }
);

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <Box sx={{
      width: "100vw",
      height: "100vh",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <context.Provider value={{ handleOpen }}>
        <Header />
      </context.Provider>

      <CardList />
      {
        open ? <HelpModel open={open} handleClose={() => setOpen(false)} /> : null
      }

    </Box>

  );
}

export const useMyContext = () => {
  return useContext(context);
}

export default App;
