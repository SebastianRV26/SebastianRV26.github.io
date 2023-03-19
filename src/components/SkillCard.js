import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SkillCard({ skill }) {
  const [hover, setHover] = React.useState(false);

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: skill.bgPrimaryColor,
          color: skill.primaryColor,
          ...(hover
            ? {
                color: skill.secondaryColor,
                backgroundColor: skill.bgSecondaryColor, // bgSecondaryColor
              }
            : null), // opacity: 0.6
        }}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h3" component="div" sx={{ padding: "25px 0" }}>
            {skill.skillname}
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
      </Card>
    </Box>
  );
}
