import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" sx={{ p: 2, m: 3, width: "15rem" }}>
          301
        </Button>
        <Button variant="contained" sx={{ p: 2, m: 3, width: "15rem" }}>
          <Link to="/game/501">501</Link>
        </Button>
        <Button variant="contained" sx={{ p: 2, m: 3, width: "15rem" }}>
          <Link to="/game/cricket">Cricket</Link>
        </Button>
      </div>
    </>
  );
}
