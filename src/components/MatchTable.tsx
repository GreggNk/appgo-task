import MatchTableRow from "./MatchTableRow";
import { RoundsData } from "./types";
import { Table, TableRow, TableBody, TableCell } from "@mui/material";

type Props = {
  gamesData: RoundsData[] | undefined;
  round: number | undefined;
};

const MatchTable = ({ gamesData, round }: Props) => {
  return (
    <>
      <div style={{ padding: "0  20px 0 20px" }}>
        <Table sx={{ minWidth: 800, maxWIdth: 1200 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell style={{ padding: "0px" }} colSpan={5}>
                <div
                  style={{
                    backgroundColor: "#EAEBED",
                    padding: "8px 16px 8px 16px",
                    color: "black",
                    borderRadius: "4px",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  RUNDA {round}
                </div>
              </TableCell>
            </TableRow>
            {gamesData?.map((row) => (
              <TableRow key={row.id}>
                <MatchTableRow roundData={row} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default MatchTable;
