import React from "react";
import AddUpdateTodo from "@/components/AddUpdateTodo";
import TodoContextProvider from "@/context/TodoContext";
import TodoList from "@/components/TodoList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "20px",
    textAlign: "center",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <TodoContextProvider>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Typography variant="h4" gutterBottom>
                Todo App <br/>
                with <br/>
                Context API & Material UI
              </Typography>
              <AddUpdateTodo type="add" id={null} />
              <TodoList />
            </Grid>
            <Grid item xs={4} />
          </Grid>
        </TodoContextProvider>
      </div>
    </ThemeProvider>
  );
}
