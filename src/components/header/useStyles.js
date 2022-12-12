const useStyles = (theme) => ({
    logo: {
        typography: 'h5',
        fontWeight: 'bold',
    },
    menuButton: {
        display: 'none',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            display: "block",
        }
    },
    appBar: {
        backgroundColor: "#68B984",
    }
})

export default useStyles