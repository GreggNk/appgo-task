import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Team } from "./types";
import LeaderboardRow, { GridColorComponent } from "./LeaderBoardRow";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

type Props = {
  leaderboardData: Team[] | undefined;
};

export default function LeaderboardTable({ leaderboardData }: Props) {
  return (
    <>
      <Table
        sx={{ minWidth: 800, maxWIdth: 1200, padding: "16px" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{ paddingLeft: "15px" }}>
              LP.
            </TableCell>
            <TableCell>DRUŻYNA</TableCell>
            <TableCell align="center">M</TableCell>
            <TableCell align="center">B</TableCell>
            <TableCell align="center">RB</TableCell>
            <TableCell align="center">P</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData?.map((row, i) => (
            <TableRow key={row.team.name}>
              <LeaderboardRow data={row} lp={i + 1} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        padding="15px"
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="5px"
        >
          <Box>{GridColorComponent(undefined, 1)}</Box>
          <Box marginLeft="8px">Awans - Liga Mistrzów (Runda grupowa)</Box>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="5px"
        >
          <Box>{GridColorComponent(undefined, 5)}</Box>
          <Box marginLeft="8px">Awans - Liga Europy (Runda grupowa)</Box>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="5px"
        >
          <Box>{GridColorComponent(undefined, 7)}</Box>
          <Box marginLeft="8px">Spadek - Championship</Box>
        </Grid>
      </Grid>
    </>
  );
}
