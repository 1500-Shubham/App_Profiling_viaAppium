import React from 'react'
import '../styles/sessionList.scss'
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

export const SessionListItems = (props) => {

  return (
    <div className="itemsList">
      <Paper boxShadow="0 1px 6px 1px blue" elevation={5}>
        <Typography
          variant="body2"
          component="h6"
          fontWeight={"bold"}
          display="inline"
        >
          {props.item.platform_name} {props.item.platform_version}
        </Typography>
        <Typography
          variant="body2"
          component="h6"
          fontWeight={"bold"}
          display="inline"
        >
          {"   "} {props.item.device_name}
        </Typography>
        <br />
        <br />
        <p>{props.item.session_id}</p>
      </Paper>
    </div>
  );
}
