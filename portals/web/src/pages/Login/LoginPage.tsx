import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { ROUTES } from "../../routes/routes";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            mt: 8,
            p: 5,
            borderRadius: 3,
          }}
        >
          <Stack spacing={3}>

            <Box
        sx={{textAlign: "center",}}>
              <Typography
                variant="h3"
                fontWeight="bold"
                color="primary"
              >
                AI-EOS
              </Typography>

              <Typography color="text.secondary">
                The Operating System for AI-Native Enterprises
              </Typography>
            </Box>

            <Typography
                variant="h5"
                sx={{textAlign: "center",}}
            >
              Sign In
            </Typography>

            <TextField
              label="Email Address"
              fullWidth
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Department</InputLabel>

              <Select
                defaultValue="hr"
                label="Department"
              >
                <MenuItem value="hr">
                  HR Operations
                </MenuItem>

                <MenuItem value="legal">
                  Legal Operations
                </MenuItem>

                <MenuItem value="admin">
                  Administration
                </MenuItem>

                <MenuItem value="agents">
                  Customer AI Agents
                </MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />

            <Button
              variant="contained"
              size="large"
              onClick={() => navigate(ROUTES.DEPARTMENTS)}
            >
              Sign In
            </Button>

          </Stack>
        </Paper>
      </Container>
    </MainLayout>
  );
}