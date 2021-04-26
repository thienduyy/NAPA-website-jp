import styles from "./itemTeam.module.css";

const ItemTeam = ({ img, name, position, socials }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={img} className={styles.avatar} alt="" />
      </div>
    </div>
  );
};

export default ItemTeam;
