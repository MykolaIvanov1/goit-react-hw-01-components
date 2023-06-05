import PropTypes from 'prop-types';
import { Title } from './Title/Title';
import { StatList } from './Stat_list/Stat_list';
import { StatisticsContainer, List } from './Statistics.styled';

export const Statistics = ({ data, item }) => {
  return (
    <StatisticsContainer>
      {item && <Title text={item} />}
      <List>
        {data.map(({ id, label, percentage }) => {
          return <StatList key={id} label={label} percentage={percentage} />;
        })}
      </List>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
