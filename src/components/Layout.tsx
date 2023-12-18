import { Box } from "@mui/material";
import Header from "./Header";

export default function TableConfig({ children }: React.PropsWithChildren) {
  return (
    <>
      <Box sx={{ minHeight: `100vh` }}>
        <header>
          <Header />
        </header>
        <main>
          <Box sx={{ position: "relative", padding: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "40px",
                justifyContent: "flex-start",
                alignItems: "center",
                minHeight: `100vh`,
                textAlign: "center",
                backgroundColor: "#EFEFEF",
              }}
            >
              {children}
            </Box>
          </Box>
        </main>
      </Box>
    </>
  );
}
