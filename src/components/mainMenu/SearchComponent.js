import {Button, Stack, TextField, useTheme} from "@mui/material";
import useStyles from "./useStyles";

const SearchComponent = () => {
    const theme = useTheme()
    const customStyles = useStyles(theme)

    return <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <TextField variant={'outlined'} inputProps={{ style: customStyles.searchField }} />
        <Button variant={'contained'} style={customStyles.searchButton}>Шукати</Button>
    </Stack>
}

export default SearchComponent