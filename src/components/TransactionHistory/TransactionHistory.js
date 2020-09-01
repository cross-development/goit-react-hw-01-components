//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import TransactionItem from '../TransactionItem/TransactionItem';
//Styles
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
	<table className={styles.transactionHistory}>
		<thead className={styles.transactionTableHead}>
			<tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			</tr>
		</thead>

		<tbody>
			{items.map(({ type, amount, currency, id }) => (
				<TransactionItem type={type} amount={amount} currency={currency} key={id} />
			))}
		</tbody>
	</table>
);

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

export default TransactionHistory;
