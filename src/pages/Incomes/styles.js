import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom: theme.spacing(2),
    width: "50%",
    margin: "0 auto",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: { display: "flex" },
  button: {
    width: "50%",
    margin: "0 auto",
    backgroundColor: "rgba(184, 58, 46)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgba(184, 58, 46, 0.8)",
    },
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #000",
  },
  listItemContainer: {
    display: "flex",
    width: "55%",
    justifyContent: "space-between",
  },

  empty: {
    display: "flex",
    justifyContent: "center",
  },

  emptyTitle: {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "PT Serif",

  },
}));

export default useStyles;
