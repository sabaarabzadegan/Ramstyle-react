import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FullWidthTabs from "./component/LoginInUp";
import RTL from "./RTL";

const theme = createMuiTheme({
    direction: 'rtl',
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
}));

function App() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <FullWidthTabs/>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div>
    )
}

export default App;
