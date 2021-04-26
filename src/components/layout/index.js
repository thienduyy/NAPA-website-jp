import Header from "./Header/indexNew";
import Footer from "./Footer";
import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
