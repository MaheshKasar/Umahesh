import { Box, Typography } from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function Hero() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
      >
        Human Workforce + AI Workforce
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          mb: 4,
          maxWidth: 800,
          mx: "auto",
        }}
      >
        AI-EOS enables organizations to build a governed Human–AI hybrid workforce,
        where AI agents operate as digital employees across enterprise functions,
        collaborating with people under enterprise policies and oversight.
      </Typography>

      <PrimaryButton>
        Enter AI-EOS
      </PrimaryButton>
    </Box>
  );
}