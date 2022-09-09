import { Button, Box } from "@mui/material"
import React, { useState } from "react";
import { sortButtonProps } from "../../type";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SortButton: React.FC<sortButtonProps> = ({ name, sortAscend, sortDescend }) => {
    const [isAscendByName, setAscendingByName] = useState(false);
    const [isAscendByLevel, setAscendingByLevel] = useState(false);

    return (
        <Box >
            {
                name.toLowerCase() === "name" ? (
                    isAscendByName ? (
                        <Button
                            variant="contained"
                            sx={{
                                '&:hover': {
                                    backgroundColor: "pink"
                                }
                            }}
                            startIcon={<ArrowDownwardIcon />}
                            onClick={() => {
                                sortDescend();
                                setAscendingByName(false)
                            }}>
                            Name
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            sx={{
                                '&:hover': {
                                    backgroundColor: "pink"
                                }
                            }}
                            startIcon={<ArrowUpwardIcon />}
                            onClick={() => {
                                sortAscend();
                                setAscendingByName(true);
                            }
                            }>
                            Name
                        </Button>
                    )
                ) : isAscendByLevel ? (
                    <Button
                        variant="contained"
                        sx={{
                            '&:hover': {
                                backgroundColor: "pink"
                            }
                        }}
                        startIcon={<ArrowDownwardIcon />}
                        onClick={() => {
                            sortDescend();
                            setAscendingByLevel(false);
                        }}>
                        Level
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        sx={{
                            '&:hover': {
                                backgroundColor: "pink"
                            }
                        }}
                        startIcon={<ArrowUpwardIcon />}
                        onClick={() => {
                            sortAscend();
                            setAscendingByLevel(true);

                        }}>
                        Level
                    </Button>
                )
            }

        </Box>
    )
}


export default SortButton;