import MainMenu from "../mainMenu/MainMenu";
import Header from "../header/Header";
import {AppBar, createTheme, ThemeProvider, useTheme} from "@mui/material";
import customTheme from "./customTheme";
import PageContent from "../pageContent/PageContent";
import {Provider} from "react-redux";
import store from "../../store/store";

const Layout = () => {
    const defaultTheme = useTheme()
    const theme = createTheme(defaultTheme, customTheme)

    return <ThemeProvider theme={theme}>
        <Provider store={store}>
            <AppBar variant={'outlined'} elevation={0} sx={{border: 'none', background: 'transparent'}}>
                <Header/>
                <MainMenu/>
            </AppBar>
            <PageContent />
        </Provider>
    </ThemeProvider>
}

export default Layout