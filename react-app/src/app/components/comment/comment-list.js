import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
    componentWillMount() {
        this.props.getComments(this.props.postId);
    }

    render() {
        return (
            <div>
                {
                    comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }
            </div>
        );
    }
}

export default CommentList;