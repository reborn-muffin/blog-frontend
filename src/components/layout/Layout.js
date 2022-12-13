import Header from "../header/Header";
import {AppBar, createTheme, ThemeProvider, useTheme} from "@mui/material";
import customTheme from "./customTheme";

const Layout = () => {
    const defaultTheme = useTheme()
    const theme = createTheme(defaultTheme, customTheme)

    return <ThemeProvider theme={theme}>
        <AppBar variant={'outlined'} elevation={0} color={'default'} sx={{border: 'none'}}>
            <Header/>
        </AppBar>
    </ThemeProvider>
}

export default Layout