import { useEffect, useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';

import { Chanel } from '../../components/Chanel/Chanel';
import { CreateChanelDialog } from '../../dialogs/CreateChanelDialog/CreateChanelDialog';

import styles from './WrapperChanel.module.scss';

export function WrapperChanel() {
    const [open, setOpen] = useState(false);
    const [chanels, setChanels] = useState([]);

    const handleClickOpen = (obj?) => {
        setOpen(!open);
        console.log(obj)
        if(obj.nameChanel){
            chanels.push(obj)
            setChanels(chanels)
        }
    };



    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.listChanel}>
                    {chanels.map((chanel, index) => (
                        <Chanel key={index} data={chanel}/>
                    ))}
                </div>
            </div>
            <IconButton onClick={handleClickOpen}>
                <AddCircleIcon className={styles.addChanel} />
            </IconButton>
            <CreateChanelDialog openDialog={open} handleClickOpen={handleClickOpen} />
        </div>
    );
}
