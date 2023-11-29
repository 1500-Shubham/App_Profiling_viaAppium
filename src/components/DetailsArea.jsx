import React, { useContext } from "react";
import { AppContext } from "../Main";
import "../styles/home.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const GridTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "body1" },
          style: { fontSize: 15, fontWeight: "bold" },
        },
        {
          props: { variant: "body3" },
          style: { fontSize: 11, backgroundColor: "#FFFBF5" },
        },
      ],
    },
  },
});
export const DetailsArea = () => {
  const { sessionId, setSessionId, sessionDetails, setSessionDetails } =
    useContext(AppContext);
  return (
    <ThemeProvider theme={GridTheme}>
      <Box
        component="container"
        sx={{
          border: "1px solid black",
          height: "20%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginBottom: 0,
          p: 0,
        }}
      >
        <Box
          component="container"
          sx={{
            m: 0,
            p: 0,
          }}
        >
          <Typography variant="body1" component="h4" display={"inline"}>
            Session ID :
          </Typography>{" "}
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.session_id}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            Start Time :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.start_time}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            Device Name :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.device_name}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            Total Cpu :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.device_info.total_cpu}
          </Typography>
        </Box>
        <Box
          component="container"
          sx={{
            m: 0,
            p: 0,
          }}
        >
          <Typography variant="body1" component="h4" display={"inline"}>
            OS :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.platform_name}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            End Time :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.end_time}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            UDID :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.udid}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            Total Memory :{" "}
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {(sessionDetails.device_info.total_memory / 1024).toFixed(2)} MB
          </Typography>
        </Box>
        <Box
          component="container"
          sx={{
            m: 0,
            p: 0,
          }}
        >
          <Typography variant="body1" component="h4" display={"inline"}>
            OS Version:
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.platform_version}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            Automation :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.automation_name}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            App :
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.app}
          </Typography>
          <br />
          <br />
          <Typography variant="body1" component="h4" display={"inline"}>
            API Level :{" "}
          </Typography>
          <Typography variant="body1" component="h4" display={"inline"}>
            {sessionDetails.device_info.api_level}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
