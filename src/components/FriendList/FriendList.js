//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import FriendListItem from '../FriendListItem/FriendListItem';
//Styles
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
	return (
		<ul className={styles.friendList}>
			{friends.map(({ avatar, name, isOnline, id }) => (
				<FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
			))}
		</ul>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string,
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
		}).isRequired,
	).isRequired,
};

export default FriendList;
