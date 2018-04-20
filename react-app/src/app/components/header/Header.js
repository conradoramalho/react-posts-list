import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Button, Grid } from "material-ui";
import PropTypes from "prop-types";
import { getCategoryList } from "../../actions";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import "./Header.css";

const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

const Category = styled.div`
  font-size: 1em;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #fff;
  h1 {
    font-size: 0.8em;
  }
`;

class Header extends PureComponent {
  static propTypes = {
    getCategoryList: PropTypes.func,
    categories: PropTypes.array,
    title: PropTypes.string,
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.getCategoryList();
  }

  render() {
    const { title, match: { params } } = this.props;
    let { categories } = this.props;

    if (params.category)
      categories = [{ name: 'dashboard', path: '' }, ...categories];

    return (
      <div className="header">
        <Category>
          <Title>Categorias</Title>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              {categories &&
                categories.map((category, index) => (
                  <Link key={index} to={`/${category.path}`}>
                    <Button color="secondary">{category.name}</Button>
                  </Link>
                ))}
            </Grid>
          </Grid>
        </Category>
        <Title>{title}</Title>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories
});

const mapDispatchToProps = {
  getCategoryList
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
