import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

import { cardStyle } from "../styles/styles";

export default function CalendarCard({ getDate, changeDate, date }) {
  const classes = cardStyle();
  return (
    <>
      <Card className={classes.card} elevation={3}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            What Movies Were Released On Your Birthday?
          </Typography>
          <TextField
            id="date"
            label="Enter Your Birthday"
            type="date"
            defaultValue={date}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            onChange={changeDate}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={getDate}
            className={classes.button}
            elevation={2}
          >
            Submit Birthday
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
