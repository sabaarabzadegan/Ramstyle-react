import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import RTL from "./RTL";
import TextField from "@material-ui/core/TextField";
import React from "react";

export default function App() {
    const theme = createMuiTheme({
        direction: 'rtl',
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <RTL>
                    <TextField
                        id="standard-name"
                        label="نام"
                        value={"سلام"}
                        variant='outlined'
                    />
                </RTL>
            </div>
        </ThemeProvider>
    );
}
