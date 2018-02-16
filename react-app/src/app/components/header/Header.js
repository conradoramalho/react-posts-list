import React from 'react';
import './Header.css';
import Typography from 'material-ui/Typography';

export default function Header(props) {
    return (
        <div className="header">
            <Typography className="title-header" type="headline" component="h2">
                {props.title}
            </Typography>
        </div>
    )
}
