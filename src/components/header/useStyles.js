const useStyles = (theme) => ({
    logo: {
        typography: 'h4',
        fontWeight: 'bold',
            [theme.breakpoints.down('sm')]: {
            typography: 'h5',
            fontWeight: 'bold'
        }
    }
})

export default useStyles