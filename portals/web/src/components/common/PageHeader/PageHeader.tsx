import { Box, Typography } from "@mui/material";

interface StatCardProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  subtitle,
}: StatCardProps) {
  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        gutterBottom
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}