// Core
import React from "react";
import PropTypes from "prop-types";
// Styles
import styles from "./TransactionItem.module.css";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.transactionRow}>
      <td className={styles.transactionRowItem}>{type}</td>
      <td className={styles.transactionRowItem}>{amount}</td>
      <td className={styles.transactionRowItem}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
