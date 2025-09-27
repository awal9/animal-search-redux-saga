import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

const baseUrl = `https://api.rescuegroups.org/v5`;

const variableUrl = `/public/animals/search/available/haspic?fields[animals]=distance&include=breeds%2Clocations&sort=random&limit=10`

function App() {
  useEffect(() => {
    (async () => {
      const data = await fetch(baseUrl+variableUrl, {
        method: "post",
        body: JSON.stringify(apiBodyData),
        headers: {
          "Content-Type": "application/vnd.api+json",
          "Authorization": 
        },
      });
      console.log(data.json());
    })();
  });
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "grey.900",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        paddingTop: 1,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h3" color="primary">
          Animal search page
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
