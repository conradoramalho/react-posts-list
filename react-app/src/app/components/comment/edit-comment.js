import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'material-ui';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

const EditComment = ({ comment, onEdit, onEditSave, handleClose, open }) => (
  <Dialog
    open={open}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">
      Edit comment
      </DialogTitle>
    <DialogContent>
      <DialogContentText>
        <input type="text" value={comment.body} onChange={e => onEdit(e.target.value)} />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onEditSave} color="primary">
        Save
        </Button>
      <Button onClick={handleClose} color="secondary">
        Cancel
        </Button>
    </DialogActions>
  </Dialog>
)

EditComment.propTypes = {
  comment: PropTypes.object,
  onEdit: PropTypes.func,
  onEditSave: PropTypes.func,
  handleClose: PropTypes.func,
  open: PropTypes.func,
};

export default EditComment; 