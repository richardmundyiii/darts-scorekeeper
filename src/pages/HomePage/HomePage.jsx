import { Button } from "@mui/material";

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
          501
        </Button>
        <Button variant="contained" sx={{ p: 2, m: 3, width: "15rem" }}>
          Cricket
        </Button>
      </div>
    </>
  );
}
