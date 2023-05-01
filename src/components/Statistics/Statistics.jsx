import PropTypes from 'prop-types';
import styles from "./statistics.module.css";
import List from './List/List';


const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <List key={id} label={label} percentage={percentage} />
                    )
                })}

            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}

export default Statistics;