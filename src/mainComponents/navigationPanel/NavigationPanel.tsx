import { WrapperChanel } from '../WrapperChanel /WrapperChanel';

import styles from './NavigationPanel.module.scss';

export function NavigationPanel() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Explore</h2>
            </div>

            <div className='relative'>
                <div className={styles.chanel}>
                    <WrapperChanel />
                </div>

                <div className={styles.navigationWrapper}>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                    <div>Home</div>
                </div>
            </div>
        </div>
    );
}
