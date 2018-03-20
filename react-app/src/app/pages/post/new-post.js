import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, Grid, TextField } from 'material-ui';
import { savePost } from '../../actions'
import { getCategoryList } from '../../actions';
import MenuItem from 'material-ui/Menu/MenuItem';
import './new-post.css';

class NewPost extends PureComponent {
  state = {
    form: {
      title: '',
      message: '',
      category: ''
    }
  };

  componentDidMount() {
    this.props.getCategoryList();
  }

  handleChange = name => event => {
    const { value } = event.target;
    this.setState(state => ({ form: { ...state.form, [name]: value } }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.form.category) {
      this.props.savePost(this.state.form);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              label="Title"
              value={this.state.form.title}
              onChange={this.handleChange('title')}
              margin="normal"
              className="w-100"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="body"
              label="Body"
              value={this.state.form.body}
              onChange={this.handleChange('body')}
              margin="normal"
              className="w-100"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="select-currency"
              required
              select
              label="Select"
              value={this.state.form.category}
              onChange={this.handleChange('category')}
              SelectProps={{
                native: false
              }}
              helperText="Please select the category"
              margin="normal"
              className="w-100"
            >
              {
                this.props.categories.map(option => (
                  <MenuItem key={option.path} value={option.path}>
                    {option.name}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="raised" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
      </form >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesReducer.categories
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCategoryList,
  savePost
}, dispatch);

NewPost.propTypes = {
  getCategoryList: PropTypes.func,
  categories: PropTypes.array,
  savePost: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
