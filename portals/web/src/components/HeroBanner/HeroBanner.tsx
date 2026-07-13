import { Box, Typography } from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function HeroBanner() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
        maxWidth: 900,
        mx: "auto",
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        fontWeight="bold"
        gutterBottom
      >
        AI-EOS
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        gutterBottom
      >
        The Operating System for AI-Native Enterprises
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mt: 6,
          mb: 3,
          fontWeight: 600,
        }}
      >
        Build Your Human + AI Workforce
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          mb: 5,
          lineHeight: 1.7,
        }}
      >
        AI-EOS enables organizations to operate with governed AI workers
        collaborating alongside human employees across every enterprise
        function.
      </Typography>

      <PrimaryButton>
        Enter AI-EOS
      </PrimaryButton>
    </Box>
  );
}