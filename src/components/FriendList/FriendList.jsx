import PropTypes from 'prop-types';
import { FriendItemEl } from './FriendItem/FriendItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItemEl
            key={id}
            name={name}
            isOnline={isOnline}
            avatar={avatar}
          />
        );
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
