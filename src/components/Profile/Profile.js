//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
	const { followers, views, likes } = stats;

	return (
		<div className={styles.profile}>
			<div className={styles.description}>
				<img src={avatar} alt="user avatar" className={styles.avatar} />
				<p className={styles.name}>{name}</p>
				<p className={styles.tag}>@{tag}</p>
				<p className={styles.location}>{location}</p>
			</div>

			<ul className={styles.stats}>
				<li>
					<span className={styles.label}>Followers </span>
					<span className={styles.quantity}>{followers}</span>
				</li>
				<li>
					<span className={styles.label}>Views </span>
					<span className={styles.quantity}>{views}</span>
				</li>
				<li>
					<span className={styles.label}>Likes </span>
					<span className={styles.quantity}>{likes}</span>
				</li>
			</ul>
		</div>
	);
};

Profile.defaultProps = {
	avatar: 'https://pkb1.ru/assets/images/default-avatar.png',
};

Profile.propTypes = {
	avatar: PropTypes.string,
	tag: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.exact({
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
	}).isRequired,
};

export default Profile;
