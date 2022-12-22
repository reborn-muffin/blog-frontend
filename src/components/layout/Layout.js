import MainMenu from "../mainMenu/MainMenu";
import Header from "../header/Header";
import {AppBar, createTheme, ThemeProvider, useTheme} from "@mui/material";
import customTheme from "./customTheme";
import PageContent from "../pageContent/PageContent";

const Layout = () => {
    const defaultTheme = useTheme()
    const theme = createTheme(defaultTheme, customTheme)

    return <ThemeProvider theme={theme}>
        <AppBar variant={'outlined'} elevation={0} sx={{border: 'none'}}>
            <Header/>
            <MainMenu/>
        </AppBar>
        <PageContent />
    </ThemeProvider>
}

export default Layout