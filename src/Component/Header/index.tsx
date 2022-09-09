import React from "react";
import { Box } from "@mui/material"
import Title from "./Title"
import Search from "./Search";

const Header = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "space-around"
            }}>
            <Title />
            <Search />

        </Box>
    )
}

export default Header;