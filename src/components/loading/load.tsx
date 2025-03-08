import { CircularProgress, Box } from "@mui/material";
import { colors } from "../../assets/colors";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: colors.bg,
      }}
    >
      <CircularProgress
        sx={{
          color: colors.white,
        }}
      />
    </Box>
  );
}

