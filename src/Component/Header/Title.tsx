import { Box, Typography } from "@mui/material"

const Title = () => {
    return (
        <Box>
            <Typography
                variant="h4"
                fontWeight={700}
                textAlign="center"
                fontSize={"30px"}
                mt="2rem"
                sx={{
                    background: 'linear-gradient(to right, #88d3ce 0%, #6e45e2 100%)',
                    backgroundClip: "text",
                    color: "transparent"
                }}
            >
                Digimon Search
            </Typography>
        </Box>
    )
}

export default Title;