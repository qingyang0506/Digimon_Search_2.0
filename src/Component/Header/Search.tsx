import { Box, TextField, Button, useTheme, Tooltip, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import HelpIcon from "@mui/icons-material/Help"
import { useAppDispatch } from "../../app/hook"
import { reset } from "../../feature/search/searchkeyword";
import { useState } from "react";
import { useMyContext } from "../../App";

const Search = () => {

    const dispatch = useAppDispatch();
    const [input, setInput] = useState<string>("");

    const { handleOpen } = useMyContext();

    const theme = useTheme();
    return (
        <Box
            sx={{
                width: "80%",
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: "3vh",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Enter a Digimon name or level"
                    variant="outlined"
                    placeholder="Search..."
                    size="medium"
                    sx={{ color: theme.palette.primary.light }}
                    onChange={(e) => setInput(e.target.value.trim())}
                />

                <Button
                    size="small"
                    startIcon={
                        <SearchIcon
                            sx={{ color: theme.palette.primary.light, fontSize: "18px", mr: "-4px" }}
                        />
                    }
                    sx={{ ml: { xs: '2vw', sm: '1vw' } }}
                    onClick={() => dispatch(reset(input))}
                >
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    position: { sm: "absolute" },
                    right: { sm: "8rem", xs: "0rem" },
                    mt: { xs: '1.4rem', sm: '0' }

                }}>

                <Tooltip title="help">
                    <IconButton onClick={handleOpen} color={"primary"}>
                        <HelpIcon sx={{ fontSize: "35px" }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Search;