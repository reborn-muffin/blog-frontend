const useStyles = (theme) => ({
    articleCard: {
        marginTop: `calc(${theme.mixins.toolbar.minHeight * 2}px + 1.5rem)`,
        marginX: 'auto',
        width: '65%',
        marginBottom: '3rem',
        backgroundColor: '#EDEDED',
        [theme.breakpoints.down('sm')]: {
            marginX: 0,
            width: '100%',
            borderRadius: 0,
            marginTop: theme.mixins.toolbar.minHeight + 'px',
            height: '100%',
            marginBottom: 0
        }
    },
    mainGridContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem',
        }
    },
    headOfArticle: {
        flexDirection: 'column',
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },
    likesAndComments: {
        width: '80%',
        justifyContent: 'flex-end',
        marginBottom: '3rem',
        color: theme.palette.primary.main
    }
})

export default useStyles