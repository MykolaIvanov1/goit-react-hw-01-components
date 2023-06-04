import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: ${({ eventType }) => {
    if (eventType) {
      return '#ff0000';
    } else {
      return '#008000';
    }
  }};
`;
export const Avatar = styled.img`
  margin-right: 15px;
`;
