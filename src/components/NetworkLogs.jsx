import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const NetworkLogs = (props) => {
  const nLog = props.nLog; // nLog String type
  const nLogObject = JSON.parse(nLog); //object type array
  const nLogArray = [];
  console.log();
  nLogObject.map((item) => {
    // console.log(item.title);
    // console.log(typeof item.title);
    // console.log(item.title_info);
    // console.log(typeof item.title_info);
    // console.log(item.start_time);
    // console.log(typeof item.start_time);
    // console.log(item.end_time);
    // console.log(typeof item.end_time);
    // // nLogArray.push([item.])
    // if (item.start_time){
    //     console.log(Date.parse(item.start_time));
    //     console.log(typeof Date.parse(item.start_time));
    // }
    // if (item.end_time) {
    //   console.log(Date.parse(item.end_time));
    //   console.log(typeof Date.parse(item.end_time));
    // }
    var tempArray = [];
    tempArray.push(item.title);
    item.title_info === null
      ? tempArray.push("null")
      : tempArray.push(item.title_info);
    item.start_time === null
      ? tempArray.push("null")
      : tempArray.push(Date.parse(item.end_time) - Date.parse(item.start_time));
    nLogArray.push(tempArray);

  });
  return (
    <div>
      {nLogArray.map((item) => (
        <Paper
          boxShadow="0 1px 6px 1px blue"
          elevation={5}
          sx={{ height: "50px", marginBottom: "10px" }}
        >
          <Typography
            variant="body2"
            component="h6"
            fontWeight={"bold"}
            marginBottom={"5px"}
          >
            {item[0]}
          </Typography>
          <Box sx={{ width: "100%", display: "flex", flexDirection:"row", justifyContent:"center" }}>
            <Box sx={{ width: "90%", display: "inline" }}>
              {item[1] !== "null" ? (
                <Typography
                  variant="body2"
                  component="h6"
                  display="inline"
                  align="center"
                >
                  {item[1]}
                </Typography>
              ) : (
                <Typography></Typography>
              )}
            </Box>
            <Box
              sx={{
                width: "10%",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {item[2] !== "null" ? (
                <Typography
                  variant="body2"
                  component="h6"
                  display="inline"
                  align="center"
                >
                  <WatchLaterIcon sx={{ height: "15px" }}></WatchLaterIcon>
                  {item[2]}ms
                </Typography>
              ) : (
                <Typography></Typography>
              )}
            </Box>
          </Box>
        </Paper>
      ))}
    </div>
  );
};
