import styles from "./blogs.module.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    date: "29 Jul 2020",
    title:
      "How cloud computing can help your staff succeed at working remotely",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    date: "29 Jul 2020",
    title:
      "How cloud computing can help your staff succeed at working remotely",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    date: "29 Jul 2020",
    title:
      "How cloud computing can help your staff succeed at working remotely",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Blogs = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Blogs</h3>
        <h1 className={styles.title}>Lorem Ipsum is simply dummy text</h1>
        <div className={styles.blogsBox}>
          {blogs.map((blog, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.background}></div>
              <div className={styles.contentContainer}>
                <span className={styles.blogDate}>{blog.date}</span>
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.blogContent}>{blog.content}</p>
                <Link className={styles.readmore} to="/">
                  <div className={styles.arrow}></div>
                  <div className={styles.arrow}></div>
                  <span className={styles.readmoreTxt}>Read more</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
