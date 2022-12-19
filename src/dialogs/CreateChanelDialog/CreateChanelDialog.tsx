import { useEffect, useState } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';

export function CreateChanelDialog(props) {
    const { openDialog, handleClickOpen } = props;

    return (
        <div>
            <Dialog open={openDialog} onClose={handleClickOpen}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will
                        send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Email Address'
                        type='email'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickOpen}>Cancel</Button>
                    <Button onClick={handleClickOpen}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
