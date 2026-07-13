import { ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fa" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            AI-EOS
          </Typography>

          <Typography variant="body2">
            The Operating System for AI-Native Enterprises
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        {children}
      </Box>

      <Box
        sx={{
          textAlign: "center",
          p: 2,
          color: "gray",
          borderTop: "1px solid #ddd",
        }}
      >
        AI-EOS MVP v0.1
      </Box>
    </Box>
  );
}