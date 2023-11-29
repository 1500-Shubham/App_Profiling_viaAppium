import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { SessionList } from "./pages/SessionList";
import "./styles/app.scss";
import { Box, ThemeProvider } from "@mui/system";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Box
          component="container"
          height={900}
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 0,
            m: 0,
            width: "100%",
          }}
        >
          <Box
            component="container"
            height={900}
            sx={{ p: 0.5, border: "1px solid grey", width: "25%" }}
          >
            <SessionList />
          </Box>

          <Box
            component="container"
            height={900}
            sx={{ p: 1, border: "1px solid grey", width: "75%" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
