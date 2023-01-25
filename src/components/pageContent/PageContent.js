import {Card, Grid, Typography, useTheme} from "@mui/material";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll} from "./articlesSlice";
import useStyles from "./useStyles";
import {getDateAgoString} from "../../common/utility/dateAgo";
import Comments from "../comments/Comments";

const PageContent = () => {
    const theme = useTheme()
    const customStyle = useStyles(theme)

    const dispatch = useDispatch()
    const article = useSelector(state => state.articles.articles)

    useEffect(() => {
        dispatch(fetchAll())
    }, [dispatch])

    return article?.length > 0 ? <Card sx={customStyle.articleCard}>
        <Grid container sx={customStyle.mainGridContainer}>
            <Grid container sx={customStyle.headOfArticle}>
                <Typography variant={'overline'}>Опубліковано {getDateAgoString(article[0].createdDate)}</Typography>
                <Typography variant={'overline'}>{article[0].author}</Typography>
            </Grid>

            <Grid item xs={11} md={10}>
                <Typography variant={'h5'} marginTop={'0.4rem'}>{article[0].title}</Typography>
                <Typography variant={'body1'} marginTop={'0.4rem'}>{article[0].content}</Typography>
            </Grid>
            <Grid container sx={customStyle.likesAndComments}>
                <Comments articleId={article[0].id}/>
            </Grid>
        </Grid>
    </Card> : []
}

export default PageContent