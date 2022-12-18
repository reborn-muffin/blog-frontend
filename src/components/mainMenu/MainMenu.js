import {
    Box,
    Button,
    Card, Divider,
    Drawer,
    Grid,
    IconButton,
    useTheme
} from "@mui/material";
import useStyles from "./useStyles";
import {FeedOutlined, LightModeOutlined, LoginOutlined, MenuOutlined, SettingsOutlined} from "@mui/icons-material";
import SearchComponent from "./SearchComponent";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

const MainMenu = () => {
    const theme = useTheme()
    const customStyles = useStyles(theme)

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isDocumentMounted, setIsDocumentMounted] = useState(false)

    useEffect(() => setIsDocumentMounted(true), [])

    const menuItems = [
        {content: 'Всі статті', icon: <FeedOutlined color={'primary'}/>},
        {content: 'Тема', icon: <LightModeOutlined color={'primary'}/>},
        {content: 'Налаштування', icon: <SettingsOutlined color={'primary'}/>},
        {content: 'Вхід', icon: <LoginOutlined color={'primary'}/>}]

    const renderMenuItems = items => items.map(item =>
        <Button variant={'text'} size={'large'} sx={customStyles.mainMenuItem} endIcon={item.icon}>
                {item.content}
            </Button>)

    const mobileMenuButton = <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuOutlined sx={customStyles.menuButton} fontSize={'large'} />
    </IconButton>
    const toolbarNode = document.getElementById("header-toolbar")

    const menuButtonPortal = isDocumentMounted && createPortal(mobileMenuButton, toolbarNode)

    return <Card sx={{borderRadius: 0}}>
        {menuButtonPortal}
        <Drawer anchor={'left'} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box style={customStyles.sideMenuContainer}>
                <SearchComponent />
                <Divider color={theme.palette.primary} style={{margin: '1rem'}}/>
                {renderMenuItems(menuItems)}
            </Box>
        </Drawer>
        <Grid container sx={customStyles.container}>
            <Grid width={'50%'}>
                <Box style={customStyles.itemList}>
                    {renderMenuItems(menuItems)}
                </Box>
            </Grid>
            <Grid width={'50%'}>
                <Box style={customStyles.menuSearchSection} menuSearchSection>
                    <SearchComponent/>
                </Box>
            </Grid>
        </Grid>
    </Card>
}

export default MainMenu