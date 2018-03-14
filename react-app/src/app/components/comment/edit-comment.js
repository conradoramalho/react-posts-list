import React from 'react';
import { Button } from 'material-ui';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

const EditComment = ({ comment, onEdit, onEditSave, handleClose, open }) => {
    return (
        <Dialog
            open={open}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title"> Edit comment</DialogTitle>
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
}

export default EditComment;