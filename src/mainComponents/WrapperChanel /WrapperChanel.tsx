import { useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';

import { CreateChanelDialog } from '../../dialogs/CreateChanelDialog/CreateChanelDialog';

import styles from './WrapperChanel.module.scss';

export function WrapperChanel() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    };
  

    return (
        <div className={styles.wrapper}>
            <IconButton onClick={handleClickOpen}>
                <AddCircleIcon className={styles.addChanel} />
            </IconButton>

            <CreateChanelDialog openDialog={open} handleClickOpen={handleClickOpen} />
        </div>
    );
}
