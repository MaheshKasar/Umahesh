import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Box sx={{ textAlign: "center", mb: 3, }}>
        
      <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
      >
        AI-EOS
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
      >
       The Operating System for AI-Native Enterprises
      </Typography>
    </Box>
  );
}