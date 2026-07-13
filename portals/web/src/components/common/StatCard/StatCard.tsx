import { Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps){
  return (
    <Card elevation={2} sx={{ height: "100%", minHeight: 150, borderRadius: 3, }}>
    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", 
                      alignItems: "center", textAlign: "center", height: "100%",}}>

        {icon}

      <Typography color="text.secondary" gutterBottom sx={{
          minHeight: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",}}>
            
  {title}
</Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}