import {Card, Grid, IconButton, Typography, useTheme} from "@mui/material";
import {FavoriteBorderOutlined, ModeCommentOutlined} from "@mui/icons-material";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll} from "./articlesSlice";
import useStyles from "./useStyles";

const PageContent = () => {
    const theme = useTheme()
    const customStyle = useStyles(theme)

    const dispatch = useDispatch()
    const article = useSelector(state => state.articles)

    const fetchOptimized = useCallback(() => dispatch(fetchAll), [dispatch])

    useEffect(() => {
        fetchOptimized()
    }, [fetchOptimized])

    return article ? <Card sx={customStyle.articleCard}>
        <Grid container sx={customStyle.mainGridContainer}>
            <Grid container sx={customStyle.headOfArticle}>
                <Typography variant={'overline'}>{article[0].createdDate}</Typography>
                <Typography variant={'overline'}>{article[0].author}</Typography>
            </Grid>

            <Grid item xs={11} md={10}>
                <Typography variant={'h5'} marginTop={'0.4rem'}>{article[0].title}</Typography>
                <Typography variant={'body1'} marginTop={'0.4rem'}>{article[0].content}</Typography>
            </Grid>
            <Grid container sx={customStyle.likesAndComments}>
                <Grid item display={'flex'} alignItems={'center'}>
                    <IconButton>
                        <ModeCommentOutlined fontSize={'medium'} color={'primary'}/>
                    </IconButton>
                    <Typography>{article[0].comments.length}</Typography>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'}>
                    <IconButton>
                        <FavoriteBorderOutlined fontSize={'medium'} color={'primary'}/>
                    </IconButton>
                    <Typography>{article[0].likeCount}</Typography>
                </Grid>
            </Grid>
        </Grid>
    </Card> : []
}

export default PageContent