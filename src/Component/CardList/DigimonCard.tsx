import { Digimon } from "../../type";
import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@mui/material"

const getColor = (level: string) => {
    if (level.toLowerCase() === 'mega') {
        return "#fda085";
    } else if (level.toLowerCase() === "in training") {
        return "#a18cd1";
    } else if (level.toLowerCase() === "rookie") {
        return "#b1f4cf";
    } else if (level.toLowerCase() === "training") {
        return "pink";
    } else if (level.toLowerCase() === "champion") {
        return "#a6c0fe";
    } else if (level.toLowerCase() === "fresh") {
        return "#d1fdff"
    } else if (level.toLowerCase() === "ultimate") {
        return "#fee140";
    } else {
        return "#c2e9fb";
    }
}

const DigimonCard: React.FC<Digimon> = ({ img, name, level }) => {


    return (
        <Card sx={{
            maxWidth: 265,
            backgroundColor: getColor(level),
            transition: "all 0.4s",
            '&:hover': {
                boxShadow: 10,
                transform: "translateY(-0.7rem)"
            }

        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography variant="body1" textAlign={'center'}>
                        Name:{name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                        Level:{level}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default DigimonCard;
