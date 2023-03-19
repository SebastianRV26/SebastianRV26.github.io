import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SkillCard from "./SkillCard";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(2),
  textAlign: "center",
  fontWeight: "bold",
  // color: theme.palette.text.secondary,
}));

const SkillCards = ({ skills }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <SkillCard skill={skill} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillCards;
