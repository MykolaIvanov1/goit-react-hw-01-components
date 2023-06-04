import styled from '@emotion/styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Item = styled.li`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span``;
export const Percentage = styled.span``;
