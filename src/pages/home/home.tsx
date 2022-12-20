import { Search } from '../../components/search/search';
import { Main } from '../../mainComponents/main/main';
import { NavigationPanel } from '../../mainComponents/navigationPanel/NavigationPanel';
import { ProfileMenu } from '../../mainComponents/profileMenu/profileMenu';
import { SideBar } from '../../mainComponents/sideBar/sideBar';

import styles from './home.module.scss';

export function Home() {
    return (
        <div className={styles.search}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <NavigationPanel />
                </div>
                <ProfileMenu />
            </div>

            <div className={styles.main}>
                <Search />
                <Main />
            </div>

            <SideBar />
        </div>
    );
}
