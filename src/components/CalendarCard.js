import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    paddingTop: "5%"
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  button: {
    width: "100%"
  }
}));

export default function CalendarCard({ getDate, changeDate, date }) {
  const classes = useStyles();
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
