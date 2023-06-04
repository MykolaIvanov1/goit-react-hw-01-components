import { Item, Status, Avatar } from './FriendItem.styled';

export const FriendItemEl = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      <Status eventType={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Item>
  );
};
