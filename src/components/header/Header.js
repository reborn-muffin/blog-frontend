import {Card, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import useStyles from "./useStyles"

const Header = () => {
    const theme = useTheme()
    const customStyles = useStyles(theme)

    return <Card variant={'outlined'} sx={customStyles.root} elevation={0}>
        <Toolbar variant={'dense'}>
            <IconButton>
                <MenuOutlined sx={customStyles.menuButton} fontSize={'large'} />
            </IconButton>
            <Typography sx={customStyles.logo}>
                {"JAVIST"}
            </Typography>
        </Toolbar>
    </Card>
}

export default Header