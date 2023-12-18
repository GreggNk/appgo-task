import { Grid, TableCell } from "@mui/material";
import { Team } from "./types";
type Props = {
  data: Team;
  lp: number;
};

export default function LeaderboardRow({ data, lp }: Props) {
  return (
    <>
      <TableCell align="left" style={{ paddingLeft: "15px" }}>
        {GridColorComponent(lp, lp)}
      </TableCell>
      <TableCell>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          margin="5px"
        >
          <img
            src={data.team.image}
            style={{ marginRight: "10px", width: "20px" }}
            alt="teamLogo"
          />
          {data.team.name}
        </Grid>
      </TableCell>
      <TableCell align="center">{data.games}</TableCell>
      <TableCell align="center">
        {data.goals_scored}:{data.goals_conceded}
      </TableCell>
      <TableCell align="center">{data.goals_ratio}</TableCell>
      <TableCell align="center">{data.points}</TableCell>
    </>
  );
}

export function style(lp: number) {
  if (lp < 5) {
    return "#1C336C";
  } else if (lp === 5) {
    return "#C82D2D";
  } else if (lp === 6) {
    return "#A7A7A7";
  } else {
    return "#FF5F5F";
  }
}

export function GridColorComponent(lp: number | undefined, colorStyle: number) {
  return (
    <>
      <Grid
        container
        direction="row"
        style={{
          width: "23px",
          height: "23px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "4px",
          color: "white",
          backgroundColor: style(colorStyle),
        }}
      >
        {lp}
      </Grid>
    </>
  );
}
