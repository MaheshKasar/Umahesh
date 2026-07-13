import Button from "@mui/material/Button";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      sx={{
        borderRadius: 2,
        px: 4,
      }}
    >
      {children}
    </Button>
  );
}