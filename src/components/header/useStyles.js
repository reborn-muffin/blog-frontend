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
        backgroundColor: "#68B984",
        borderRadius: 0,
    }
})

export default useStyles