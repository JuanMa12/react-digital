import MainBar from './MainBar'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <MainBar />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
