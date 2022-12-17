const useStyles = (theme) => ({
    container: {
        backgroundColor: '#EDEDED',
        minHeight: theme.mixins.toolbar.minHeight,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    mainMenuItem: {
        color: theme.palette.text.primary,
        textTransform: 'none',
    },
    itemList: {
        display: 'flex',
        width: '60%',
        justifyContent: 'space-between',
        marginLeft: '3rem',
    },
    menuSearchSection: {
        marginRight: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    searchButton: {
        textTransform: 'none',
        padding: '0.2rem 0.4rem',
    },
    searchField: {
        padding: '0.2rem 0.3rem',
    },
})

export default useStyles