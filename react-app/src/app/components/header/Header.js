import React, { PureComponent } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import { Button, Grid } from 'material-ui';
import { getCategoryList } from '../../actions';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
    render() {
        const { categories, title } = this.props;

        return (
            <div className="header" >
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Header title='List of categories' />
                    </Grid>
                    {
                        categories && (
                            categories.map((category, index) => (
                                <Link key={index} to={`categories/${category.path}`}>
                                    <Button color="primary">
                                        {category.name}
                                    </Button>
                                </Link>
                            )
                            ))
                    }
                </Grid>
                <Typography className="title-header" type="headline" component="h2">
                    {title}
                </Typography>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    categories: state.categoriesReducer.categories
});

const mapDispatchToProps = {
    getCategoryList
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)