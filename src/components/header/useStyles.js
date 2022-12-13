const useStyles = (theme) => ({
    logo: {
        typography: 'h5',
        fontWeight: 'bold',
        color: 'white'
    },
    menuButton: {
        display: 'none',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            display: "block",
        }
    },
    root: {
        backgroundColor: theme.palette.primary,
        borderRadius: 0,
    }
})

export default useStyles