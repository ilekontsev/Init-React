import { useState } from 'react';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import styles from './Chanel.module.scss';

export function Chanel({ data }) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    return (
        <div
            className={styles.wrapper}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
            <Popover
                id='mouse-over-popover'
                sx={{
                    pointerEvents: 'none',
                }}
                open={!!anchorEl}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }} className={styles.popover}>
                    {data.nameChanel}
                </Typography>
            </Popover>
        </div>
    );
}
