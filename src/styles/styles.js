import { makeStyles } from "@material-ui/core/styles";

export const cardStyle = makeStyles(theme => ({
  movieCard: {
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25,
    width: "80%",
    padding: 10
  },
  movieCard2: {
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25,
    width: "100%",
    padding: 5
  },
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

export const styles = {
  queryMobile: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  queryWeb: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  webShareButtons: {
    width: 350,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "space-between"
  },
  mobileShareButton: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column"
  }
};
