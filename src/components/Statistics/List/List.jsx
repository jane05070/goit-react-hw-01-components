import PropTypes from 'prop-types';
import styles from './list.module.css';


const list = ({ label, percentage }) => {
    return (<li className={styles.item} style={{ backgroundColor: getRandomHexColor() }}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage} %</span>
    </li>
    )
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

list.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default list;