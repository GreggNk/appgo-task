import { Box } from "@mui/material";

export default function TableLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Box
        sx={{
          marginTop: "15px",
          backgroundColor: "white",
          boxShadow: "0 4px 40px rgb(0 0 0 / 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          borderRadius: "15px",
        }}
      >
        {children}
      </Box>
    </>
  );
}
