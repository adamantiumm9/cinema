import { FC } from 'react'

import Meta from '../../../utils/meta/Meta'
import Description from '../../ui/heading/Description'
import Heading from '../../ui/heading/Heading'

import CollectionItem from './CollectionItem'
import styles from './Collections.module.scss'
import { ICollection } from './collections.interface'

const title = 'Discovery'
const description = 'In this section you will find all genres an our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{collections.map((c) => (
					<CollectionItem key={c._id} collection={c} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
