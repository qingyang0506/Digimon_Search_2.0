import { Box, Grid, CircularProgress, Typography, Slide } from "@mui/material"
import { useEffect, useState } from "react";
import { Digimon } from "../../type";
import DigimonCard from "./DigimonCard"
import axios from "axios"
import { constant } from "../../constant";
import { useAppSelector } from "../../app/hook";
import { selectSearchKeyword } from "../../feature/search/searchkeyword";
import SortButton from "./SortButton";

const isLevel = (name: string) => {
    if (name.toLowerCase() === "mega" ||
        name.toLowerCase() === "in training" ||
        name.toLowerCase() === "Rookie".toLowerCase() ||
        name.toLowerCase() === "Champion".toLowerCase() ||
        name.toLowerCase() === "Fresh".toLowerCase() ||
        name.toLowerCase() === "Ultimate".toLowerCase() ||
        name.toLowerCase() === "Training".toLowerCase() ||
        name.toLowerCase() === "Armor".toLowerCase()) {
        return true;
    }

    return false;
}

const CardList = () => {

    const searchkeyword = useAppSelector(selectSearchKeyword);
    const [digimons, setDigimons] = useState<Digimon[]>([]);
    const [isloading, setloading] = useState<Boolean>(false);


    const fetchData = (name: string) => {
        setloading(true);
        setDigimons([]);

        if (name.toLowerCase() === "all") {
            axios.get(`${constant.api}`).then(res => {
                setDigimons(res.data);
                setloading(false);
            });
        } else if (isLevel(name)) {
            axios.get(`${constant.api}` + '/level/' + `${name}`).then(res => {
                setDigimons(res.data);
                setloading(false);
            });
        } else {
            axios.get(`${constant.api}` + '/name/' + `${name}`).then(res => {
                setDigimons(res.data);
                setloading(false);
            }).catch(err => {
                setloading(false);
            });
        }
    }

    useEffect(() => {
        fetchData(searchkeyword);
    }, [searchkeyword]);


    //sort card ascend by name
    const sortAscendByName = () => {

        let temp: Digimon[] = digimons?.sort((e1, e2) => e1.name.toLowerCase().localeCompare(e2.name.toLowerCase()));
        setDigimons([...temp]);
    }

    //sort card descend by name
    const sortDescendByName = () => {

        let temp: Digimon[] = digimons?.sort((e1, e2) => e2.name.toLowerCase().localeCompare(e1.name.toLowerCase()));
        setDigimons([...temp]);
    }

    //sort card ascend by level
    const sortAscendByLevel = () => {

        let temp: Digimon[] = digimons?.sort((e1, e2) => e1.level.toLowerCase().localeCompare(e2.level.toLowerCase()));
        setDigimons([...temp]);
    }

    //sort card descend by level
    const sortDescendByLevel = () => {

        let temp: Digimon[] = digimons?.sort((e1, e2) => e2.level.toLowerCase().localeCompare(e1.level.toLowerCase()));
        setDigimons([...temp]);
    }


    return (
        <Box
            sx={{
                mt: '2rem',
                width: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignment: 'center'
            }}>


            {
                isloading ?
                    (<Box sx={{ display: "flex", mt: "20vh" }}>
                        <CircularProgress />
                    </Box>
                    ) : digimons.length === 0 ? (
                        <Box sx={{ mt: "20vh" }}>
                            <Typography variant="h3" color={"#bfa"}>
                                No Result
                            </Typography>
                        </Box>
                    ) : (

                        <Box
                            sx={{ width: "100%" }}
                        >

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                <SortButton
                                    name={"name"}
                                    sortAscend={sortAscendByName}
                                    sortDescend={sortDescendByName} />
                                <SortButton
                                    name={"level"}
                                    sortAscend={sortAscendByLevel}
                                    sortDescend={sortDescendByLevel}
                                />

                            </Box>


                            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={800}>

                                <Grid
                                    container
                                    spacing={6}
                                    sx={{
                                        mt: "2vh",
                                    }}
                                >
                                    {digimons &&
                                        digimons.map((item: Digimon, index: number) => {
                                            return (
                                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                                    <DigimonCard {...item} />
                                                </Grid>
                                            );
                                        })}
                                </Grid>
                            </Slide>
                        </Box>
                    )
            }
        </Box>

    )
}

export default CardList;