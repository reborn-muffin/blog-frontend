const useStyles = (theme) => ({
    logo: {
        typography: 'h5',
        fontWeight: 'bold',
        color: theme.palette.primary.contrastText
    },
    root: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
    }
})

export default useStyles