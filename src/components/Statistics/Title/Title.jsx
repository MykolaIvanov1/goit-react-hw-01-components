import PropTypes from 'prop-types';
import { TextTitle } from './Title.styled';

export const Title = ({ text }) => {
  return <TextTitle>{text}</TextTitle>;
};

Title.propTypes = {
  text: PropTypes.string,
};
