import { Box, Button, Grid, TableCell } from "@mui/material";
import { RoundsData } from "./types";
import TvIcon from "@mui/icons-material/Tv";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

type Props = {
  roundData: RoundsData;
};

export default function MatchTableRow({ roundData }: Props) {
  return (
    <>
      <TableCell align="left" width={150}>
        {roundData.date}
      </TableCell>
      <TableCell>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              margin="5px"
            >
              <img
                src={roundData.home_team_object.image}
                style={{ marginRight: "10px", width: "20px" }}
                alt="teamLogo"
              />
              {roundData.home_team}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              margin="5px"
            >
              <img
                src={roundData.away_team_object.image}
                style={{ marginRight: "10px", width: "20px" }}
                alt="teamLogo"
              />
              {roundData.away_team}
            </Grid>
          </Grid>
        </Box>
      </TableCell>
      <TableCell align="left">
        <Box>{roundData.home_score}</Box>
        <Box>{roundData.away_score}</Box>
      </TableCell>
      <TableCell align="right" width={40}>
        <Button
          variant="outlined"
          style={{
            color: "#999999",
            borderColor: "#999999",
            margin: "0px",
            minWidth: "40px",
            fontSize: "small",
            minHeight: "36px",
          }}
        >
          <TvIcon style={{ fontSize: "medium" }} />
        </Button>
      </TableCell>
      <TableCell align="right" width={40}>
        <Button
          variant="outlined"
          style={{
            color: "black",
            borderColor: "#999999",
            textTransform: "none",
          }}
        >
          Szczegóły
          <ArrowCircleRightOutlinedIcon
            style={{ fontSize: "medium", marginLeft: "5px", color: "#FC671D" }}
          />
        </Button>
      </TableCell>
    </>
  );
}
