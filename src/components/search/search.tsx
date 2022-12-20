import styles from './search.module.scss';

export function Search() {
    return (
        <div className={styles.wrapper}>
            <input type='text' placeholder='search...' />
        </div>
    );
}
