import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Img,
  Name,
  TagLocation,
  Stats,
  Items,
  Label,
  Quantity,
} from './profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <TagLocation>{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>

      <Stats>
        <Items>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Items>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
