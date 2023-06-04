import { Item, Label, Percentage } from './stat_list.styled';

export const StatList = ({ id, label, percentage }) => {
  console.log();
  return (
    <Item key={id}>
      <Label>{label}</Label>
      <Percentage>{`${percentage}%`}</Percentage>
    </Item>
  );
};
