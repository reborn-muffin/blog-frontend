import {Button, Stack, TextField, useTheme} from "@mui/material";
import useStyles from "./useStyles";

const SearchComponent = () => {
    const theme = useTheme()
    const customStyles = useStyles(theme)

    return <Stack sx={customStyles.searchContainer}>
        <TextField variant={'outlined'} fullWidth inputProps={{ style: customStyles.searchField }} />
        <Button variant={'contained'} sx={customStyles.searchButton}>Шукати</Button>
    </Stack>
}

export default SearchComponent