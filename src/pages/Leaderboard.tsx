import { useEffect, useState } from "react";
import LeaderboardTable from "../components/LeaderBoardTable";
import { Team } from "../components/types";
import { getLeaderboardData } from "../service/apiService";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  Grid,
  Box,
  Button,
} from "@mui/material";
import Flag from "react-flagkit";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import TableLayout from "../components/TableLayout";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<Team[]>();

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const data = await getLeaderboardData();
        setLeaderboardData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGamesData();
  }, []);
  return (
    <>
      <TableLayout>
        <TableContainer
          component={Paper}
          style={{ borderRadius: "15px", padding: "16px" }}
        >
          <Table>
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
                  href="/"
                  style={{
                    color: "black",
                    borderColor: "#999999",
                    textTransform: "none",
                  }}
                >
                  Mecze
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
          <LeaderboardTable leaderboardData={leaderboardData} />
        </TableContainer>
      </TableLayout>
    </>
  );
}
