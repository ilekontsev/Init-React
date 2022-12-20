import { useEffect, useState } from 'react';

import {
    Avatar,
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
    const [nameChanel, setNameChanel] = useState('');

   const createNewChanel = () => {
        const obj = {
            nameChanel
        }
        handleClickOpen(obj)
        setNameChanel('')
    }

    return (
        <div>
            <Dialog open={openDialog} onClose={handleClickOpen}>
                <DialogTitle>Create chanel</DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <Avatar src='/static/images/avatar/1.jpg' sx={{ width: 50, height: 50 }} />
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='name chanel'
                        type='text'
                        fullWidth
                        variant='standard'
                        value={nameChanel}
                        onChange = {(event) => setNameChanel(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickOpen}>Cancel</Button>
                    <Button onClick={createNewChanel}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
