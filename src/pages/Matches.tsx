import { useState, useEffect } from "react";
import MatchTable from "../components/MatchTable";
import { RoundsData } from "../components/types";
import { getMatchesData } from "../service/apiService";
import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Flag from "react-flagkit";
import TableLayout from "../components/TableLayout";

export default function Matches() {
  const [gamesData, setGamesData] = useState<RoundsData[] | undefined>();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        setIsLoading(true);
        const data = await getMatchesData(page, 10, "desc", "round");
        setGamesData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGamesData();
  }, [page]);
  const nextPage = () => {
    if (!isLoading) {
      setPage(page + 1);
    }
  };

  const pervPage = () => {
    if (!isLoading) {
      page > 1 ? setPage(page - 1) : setPage(1);
    }
  };
  return (
    <>
      <TableLayout>
        <TableContainer component={Paper} style={{ borderRadius: "15px" }}>
          <Table>
            <TableRow>
              <TableCell align="left" colSpan={2}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#1C336C", fontWeight: "bold" }}
                >
                  Wszystkie
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  margin="5px"
                >
                  <Flag country="GB-ENG" style={{ marginRight: "10px" }} />
                  <Box style={{ fontWeight: "bold", fontSize: "17px" }}>
                    Anglia: Premier League
                  </Box>
                </Grid>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="text"
                  href="/table"
                  style={{
                    color: "black",
                    borderColor: "#999999",
                    textTransform: "none",
                  }}
                >
                  Tabela
                  <ArrowCircleRightOutlinedIcon
                    style={{
                      fontSize: "medium",
                      marginLeft: "5px",
                      color: "#FC671D",
                    }}
                  />
                </Button>
              </TableCell>
            </TableRow>
          </Table>
          <MatchTable gamesData={gamesData} round={gamesData?.[0].round} />
        </TableContainer>
      </TableLayout>
      <Box width={"800px"} marginTop={"20px"}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Button
            variant="text"
            onClick={pervPage}
            disabled={page === 1}
            style={{
              color: page === 1 ? "grey" : "black",
              borderColor: "#999999",
              textTransform: "none",
            }}
          >
            <ArrowBackIcon
              style={{
                fontSize: "medium",
                marginRight: "5px",
                color: page === 1 ? "grey" : "#FC671D",
              }}
            />
            Wstecz
          </Button>
          <Button
            variant="text"
            onClick={nextPage}
            disabled={gamesData?.[0].round === 1}
            style={{
              color: gamesData?.[0].round === 1 ? "grey" : "black",
              borderColor: "#999999",
              textTransform: "none",
            }}
          >
            Dalej
            <ArrowForwardIcon
              style={{
                fontSize: "medium",
                marginLeft: "5px",
                color: gamesData?.[0].round === 1 ? "grey" : "#FC671D",
              }}
            />
          </Button>
        </Grid>
      </Box>
    </>
  );
}
