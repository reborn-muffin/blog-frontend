import {AppBar, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import useStyles from "./useStyles"

const Header = () => {
    const theme = useTheme()
    const customStyles = useStyles(theme)

    return <AppBar style={{backgroundColor: "#68B984"}}>
        <Toolbar>
            <IconButton>
                <MenuOutlined fontSize={'large'} sx={{color: 'white', display: {md: 'none'}}} />
            </IconButton>
            <Typography sx={customStyles.logo}>
                {"JAVIST"}
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Header