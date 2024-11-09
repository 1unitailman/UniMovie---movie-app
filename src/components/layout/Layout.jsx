import { Sidebar } from '../sidebar/Sidebar'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Sidebar />
			{/* <div className="w-full overflow-y-scroll">{children}</div> */}
			<div className="">{children}</div>
		</div>
	)
}

export default Layout
