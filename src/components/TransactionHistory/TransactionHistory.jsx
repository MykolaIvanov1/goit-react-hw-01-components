import PropTypes from 'prop-types';
import { THead } from './Head/Thead';
import { HistoryEl } from './HistoryEl/HistoryEl';
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <THead />
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <HistoryEl
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
