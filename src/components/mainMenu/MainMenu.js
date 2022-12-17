import {Box, Button, Card, Grid, useTheme} from "@mui/material";
import useStyles from "./useStyles";
import {FeedOutlined, LightModeOutlined, LoginOutlined, SettingsOutlined} from "@mui/icons-material";
import SearchComponent from "./SearchComponent";

const MainMenu = () => {
    const theme = useTheme()
    const customStyles = useStyles(theme)

    const menuItems = <>
        <Button variant={'text'} style={customStyles.mainMenuItem} endIcon={<FeedOutlined color={'primary'} />}>
            {"Всі статті"}
        </Button>
        <Button variant={'text'} style={customStyles.mainMenuItem} endIcon={<LightModeOutlined color={'primary'} />}>
            {"Тема"}
        </Button>
        <Button variant={'text'} style={customStyles.mainMenuItem} endIcon={<SettingsOutlined color={'primary'} />}>
            {"Налаштування"}
        </Button>
        <Button variant={'text'} style={customStyles.mainMenuItem} endIcon={<LoginOutlined color={'primary'} />}>
            {"Вхід"}
        </Button>
    </>

    return <Card sx={{borderRadius: 0}}>
        <Grid container sx={customStyles.container}>
            <Grid width={'50%'}>
                <Box style={customStyles.itemList}>
                    {menuItems}
                </Box>
            </Grid>
            <Grid width={'50%'} >
                <Box style={customStyles.menuSearchSection} menuSearchSection>
                    <SearchComponent/>
                </Box>
            </Grid>
        </Grid>
    </Card>
}

export default MainMenu