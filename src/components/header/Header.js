import {Card, Toolbar, Typography, useTheme} from "@mui/material";
import useStyles from "./useStyles"

const Header = () => {
    const theme = useTheme()
    const customStyles = useStyles(theme)

    return <Card variant={'outlined'} sx={customStyles.root} elevation={0}>
        <Toolbar variant={'dense'}>
            <div id={'header-toolbar'}/>
            <Typography sx={customStyles.logo}>
                {"JAVIST"}
            </Typography>
        </Toolbar>
    </Card>
}

export default Header