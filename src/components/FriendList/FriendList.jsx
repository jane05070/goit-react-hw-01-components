import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (<FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />
                )
            })}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array,
}

export default FriendList;