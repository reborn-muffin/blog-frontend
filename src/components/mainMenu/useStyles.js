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
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '1rem',
        }
    },
    itemList: {
        display: 'flex',
        width: '500px',
        justifyContent: 'space-around',
    },
    menuSearchSection: {
        marginRight: '1rem',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    searchButton: {
        textTransform: 'none',
        padding: '0.15rem 1rem',
        marginLeft: '0.5rem',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: 0,
            marginTop: '0.2rem',
        },
    },
    searchField: {
        padding: '0.2rem 0.3rem',
    },
    menuButton: {
        display: 'none',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            display: "block",
        }
    },
    searchContainer: {
        direction: 'row',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '2rem 1rem',
        },
    },
    sideMenuContainer: {
        width: '290px',
    },
})

export default useStyles