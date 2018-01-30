import React, { PureComponent } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import StarIcon from 'material-ui-icons/Star';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import Moment from 'react-moment';
import './Posts.css'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function Posts(props) {
    const post = {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all . Everyone says so after allEveryone says so after allEveryone says so after allEveryone says so after allEveryone says so after allEveryone says so after all',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
    };

    return (
        <Card>
            <CardContent>
                <div className="header-card">
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography className="category">{post.category}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="author">{post.author}</Typography>
                        </Grid>
                    </Grid>
                </div>
                <Typography className="title" type="headline" component="h2">
                    {post.title}
                </Typography>
                <Grid container wrap="nowrap">
                    <Grid item xs zeroMinWidth>
                        <Typography component="p" noWrap>
                            Text: {post.body}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className="card-icons">
                <IconButton aria-label="Star">
                    <Typography component="p" noWrap>
                        {post.voteScore}
                    </Typography>
                    <StarIcon />
                </IconButton>
                <IconButton aria-label="Comments">
                    <Typography component="p" noWrap>
                        {post.commentCount}
                    </Typography>
                    <CommentIcon />
                </IconButton>
                <Typography className="register-date" component="p">
                    <Moment format="YYYY/MM/DD" >
                        {post.timestamp}
                    </Moment>
                </Typography>
                <IconButton>
                    <AddIcon />
                </IconButton>
                {/* 
                <InputRange
                    maxValue={1000}
                    minValue={0}
                    value={post.voteScore}
                    onChange={(value) => { post.voteScore = value }} /> */}
            </CardActions>
        </Card>
    )
}
