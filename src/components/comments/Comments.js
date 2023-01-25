import {Box, Button, Card, Divider, IconButton, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAll} from "./commentsSlice";
import {FavoriteBorderOutlined} from "@mui/icons-material";

const Comments = ({ articleId }) => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.comments?.filter(comment => comment.articleId === articleId))
    const noComments = <>
        <Typography>Цю статтю ще ніхто не коментував</Typography>
    </>

    useEffect(() => {
        dispatch(fetchAll())
    }, [])

    return comments?.length > 0 ? <Box width={'100%'} wdisplay={'flex'} justifyContent={'flex-start'}>
        <Divider variant={'fullWidth'} sx={{marginY: '2rem'}}/>
        <Typography variant={'subtitle1'}>Коментарі</Typography>
        {comments.map(comment => {
            return <Card style={{margin: '1em', padding: '1em', width: '70%', backgroundColor: '#DFDFDF'}} elevation={0}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography variant={'body1'}>@{comment.author}</Typography>
                    <Typography variant={'overline'}>{comment.createdDate}</Typography>
                </Box>
                <Typography variant={'body2'}>{comment.content}</Typography>

                <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                    <IconButton>
                        <FavoriteBorderOutlined color={'primary'}/>
                    </IconButton>
                    <Typography variant={'body2'}>{comment.likeCount}</Typography>
                    <Button>Відповісти</Button>
                </Box>
            </Card>
        })}
    </Box> : noComments
}

export default Comments