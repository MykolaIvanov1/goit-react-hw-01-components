import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  padding-top: 20px;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  width: 150px;
  border-radius: 1000px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

export const TagLocation = styled.p`
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: #afa1b9;
`;

export const Stats = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  width: 100%
  justify-content: space-around;
`;

export const Items = styled.li`
  text-align: center;
  padding: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  background-color: #f5f4fa;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: #afa1b9;
`;

export const Quantity = styled.span``;
