import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

const baseUrl = "https://api.rescuegroups.org/v5";
const currentUrl =
  "/public/animals/search/available/haspic?fields[animals]=distance&include=breeds%2Clocations&sort=random&limit=10";

const apiBodyData = {
  data: {
    filterRadius: {
      miles: 25,
      postalcode: 90210,
    },
  },
};

function App() {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(baseUrl + currentUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/vnd.api+json",
            Authorization: import.meta.env.VITE_RESCUE_GROUPS_API_KEY,
          },
          body: JSON.stringify(apiBodyData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        console.log(result);
      } catch (err) {
        console.error("Fetch error:", err);
      }
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
