
import MainLayout from "../../layouts/MainLayout";

import Logo from "../../components/common/Logo/Logo";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";
import StatCard from "../../components/common/StatCard/StatCard";

/* import HeroBanner from "../../components/common/HeroBanner/HeroBanner"; */

import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <MainLayout>
  <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: 8,
    }}
    >
    <Logo />

    <PageHeader
        title="Welcome to AI-EOS"
        subtitle="Building the future of AI-native enterprises"
    />

    <PrimaryButton onClick={() => navigate(ROUTES.LOGIN)}>
        Enter AI-EOS
    </PrimaryButton>
    </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt: 4 }}>
      
    
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard title="Human Employees" value={12} />
    </Grid>

    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard title="AI Workers" value={250} />
    </Grid>

    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard title="Departments" value={7} />
    </Grid>

    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <StatCard title="Active Tasks" value={184} />
    </Grid>
    </Grid>

    </Container>

    </MainLayout>
  );
}

export default LandingPage;