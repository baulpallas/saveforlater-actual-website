/** @format */

import React from 'react'
import {
	faInstagram,
	faTiktok,
	faSpotify,
	faApple,
	IconDefinition,

} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './social-list.module.scss'
import { motion } from 'framer-motion'
import classnames from 'classnames'

const socials = [
	{
		link: 'https://open.spotify.com/artist/2RhW8cptKrLvT1Y15gb1Wl?si=2NImO4wcThaNCZ5tJBQMqQ',
		icon: faSpotify,
		message: 'Listen to us on Spotify',
	},
	{
		link: 'https://music.apple.com/us/artist/save-for-later/1591554219',
		icon: faApple,
		message: 'Check us out on Apple Music',
	},
	{
		link: 'https://www.instagram.com/saveforlaterband',
		icon: faInstagram,
		message: 'Follow us out on IG',
	},
	{
		link: 'https://www.tiktok.com/@saveforlaterband',
		icon: faTiktok,
		message: 'Follow us on TikTok',
	},
	{
		link: 'mailto:gandpband@gmail.com',
		icon: faEnvelope,
		message: 'Shoot us an Email!',
	},

]
const variants = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
			type: 'spring',
			staggerChildren: 2,
			when: 'beforeChildren',
		},
	},
}

const SocialList: React.FC<{}> = () => (
	<motion.div
		className={classnames(
			styles.socialList,
			'field',
			'is-grouped',
			'is-grouped-multiline',
		)}
		variants={variants}
	>
		{socials.map(social => (
			<SocialListItem key={social.link} {...social} animate />
		))}
	</motion.div>
)

export default SocialList

export const SocialListFooter: React.FC<{}> = () => (
	<div className={classnames('field', 'is-grouped', 'is-grouped-multiline')}>
		{socials.map(social => (
			<SocialListItem key={social.link} {...social} animate={false} />
		))}
	</div>
)

const mainItemVariants = {
	hidden: { opacity: 0.5 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
}

const hoverVariants = {
	hidden: {
		maxWidth: 0,
		paddingLeft: 0,
		paddingRight: 0,
		opacity: 0,
		overflow: 'hidden',
	},
	show: {
		paddingLeft: [0, '0.75em', '0.75em', 0],
		paddingRight: [0, '0.75em', '0.75em', 0],
		maxWidth: [0, 200, 200, 0],
		opacity: [0, 1, 1, 0],
		overflow: 'hidden',
		transition: {
			duration: 2,
			width: {
				type: 'spring',
			},
		},
	},
}

const hoverDarkVaraints = {
	hidden: { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
	show: {
		borderTopRightRadius: [4, 0, 0, 4],
		borderBottomRightRadius: [4, 0, 0, 4],
		transition: {
			duration: 2,
		},
	},
}

const SocialListItem: React.FC<{
	link: string
	icon: IconDefinition
	message: string
	animate: boolean
}> = ({ link, icon, message, animate }) => (
	<motion.div
		className='control'
		variants={animate ? mainItemVariants : undefined}
	>
		<div className='tags has-addons'>
			<motion.a
				href={link}
				className='icon tag'
				variants={animate ? hoverDarkVaraints : undefined}
			>
				<FontAwesomeIcon icon={icon} />
			</motion.a>
			{animate && (
				<motion.span
					className={classnames('tag', 'is-dark')}
					variants={hoverVariants}
				>
					<span className={styles.tag}>{message}</span>
				</motion.span>
			)}
		</div>
	</motion.div>
)
