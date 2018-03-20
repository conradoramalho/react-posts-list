import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import TextField from 'material-ui/TextField';
import { getCategoryList } from '../../actions';
import MenuItem from 'material-ui/Menu/MenuItem';

class NewPost extends PureComponent {
  state = {
    form: {
      category: {}
    }
  };

  componentDidMount() {
    this.props.getCategoryList();
  }

  render() {
    return (
      <div>
        <form>
          <TextField
            id="title"
            label="Title"
            value={this.state.form.title}
          // onChange={this.handleChange('name')}
          // margin="normal"
          />
          <TextField
            id="message"
            label="Message"
            value={this.state.form.message}
          // onChange={this.handleChange('message')}
          // margin="normal"
          />
          <TextField
            id="select-currency"
            select
            label="Select"
            value={this.state.form.category}
            // onChange={this.handleChange('currency')}
            SelectProps={{
              native: false
            }}
            helperText="Please select the category"
            margin="normal"
          >
            {
              this.props.categories.map(option => (
                <MenuItem key={option.path} value={option.path}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesReducer.categories
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCategoryList
}, dispatch);

NewPost.propTypes = {
  getCategoryList: PropTypes.func,
  categories: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
