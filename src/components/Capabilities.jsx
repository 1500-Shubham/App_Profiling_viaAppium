import React, { useContext } from "react";
import { AppContext } from "../Main";
import "../styles/home.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export const Capabilities = () => {
  const { sessionId, setSessionId, sessionDetails, setSessionDetails } =
    useContext(AppContext);
  const capabiltiesJson = sessionDetails.capabilities;
  const capabiltiesJsonKeys = Object.keys(capabiltiesJson);
  const capabiltiesJsonValues = Object.values(capabiltiesJson);
  const desiredCapabiltiesJson = sessionDetails.capabilities.desired;
  const desiredCapabiltiesJsonKeys = Object.keys(desiredCapabiltiesJson);
  const desiredCapabiltiesJsonValues = Object.values(desiredCapabiltiesJson);
  return (
    <Box
      component="container"
      sx={{
        height: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 0,
        p: 0,
      }}
    >
      <Box
        component="container"
        sx={{
          overflowY: "scroll",
          border: "1px dashed black",
          height: "100%",
          width: "50%",
          margin: 0,
          p: 0.5,
        }}
      >
        <Box
          component="section"
          sx={{
            height: "10%",
            width: "100%",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="h4" color="common.white">
            Capabilities
          </Typography>
        </Box>

        <Box>
          {capabiltiesJsonKeys.map((item, index) => {
            return (
              <div>
                <Typography
                  variant="body1"
                  component="h4"
                  display="inline"
                  // fontWeight={"bold"}
                >
                  {item} :{" "}
                </Typography>
                {typeof capabiltiesJsonValues[index] === undefined ? (
                  <Typography variant="body2" component="h4" display="inline">
                    {" "}
                    {"null"}{" "}
                  </Typography>
                ) : typeof capabiltiesJsonValues[index] === "string" ? (
                  <Typography variant="body2" component="h4" display="inline">
                    {" "}
                    {capabiltiesJsonValues[index]}{" "}
                  </Typography>
                ) : typeof capabiltiesJsonValues[index] === "object" ? (
                  <Typography variant="body2" component="h4" display="inline">
                    {" "}
                    {JSON.stringify(capabiltiesJsonValues[index])}{" "}
                  </Typography>
                ) : (
                  <Typography variant="body2" component="h4" display="inline">
                    {" "}
                    {capabiltiesJsonValues[index].toString()}{" "}
                  </Typography>
                )}{" "}
                <br />
                <br />
              </div>
            );
          })}
        </Box>
      </Box>
      <Box
        component="container"
        sx={{
          overflowY: "scroll",
          border: "1px dashed black",
          height: "100%",
          width: "50%",
          margin: 0,
          p: 0.5,
        }}
      >
        <Box
          component="section"
          sx={{
            height: "10%",
            width: "100%",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="h4" color="common.white">
            Desired Capabilities
          </Typography>
        </Box>
        {desiredCapabiltiesJsonKeys.map((item, index) => {
          return (
            <div>
              <Typography
                variant="body1"
                component="h4"
                display="inline"
                // fontWeight={"bold"}
              >
                {item} :{" "}
              </Typography>
              {typeof capabiltiesJsonValues[index] === undefined ? (
                <Typography variant="body2" component="h4" display="inline">
                  {"null"}{" "}
                </Typography>
              ) : typeof desiredCapabiltiesJsonValues[index] === "string" ? (
                <Typography variant="body2" component="h4" display="inline">
                  {" "}
                  {desiredCapabiltiesJsonValues[index]}{" "}
                </Typography>
              ) : typeof desiredCapabiltiesJsonValues[index] === "object" ? (
                <Typography variant="body2" component="h4" display="inline">
                  {" "}
                  {JSON.stringify(desiredCapabiltiesJsonValues[index])}{" "}
                </Typography>
              ) : (
                <Typography variant="body2" component="h4" display="inline">
                  {" "}
                  {desiredCapabiltiesJsonValues[index].toString()}{" "}
                </Typography>
              )}{" "}
              <br />
              <br />
            </div>
          );
        })}
      </Box>
    </Box>
  );
};
