import getBlogPosts from "../../get";
import styles from "./BlogPosts.module.css";

export const getStaticProps = async (context) => {
  const data = await getBlogPosts();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

const BlogPosts = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      <div className={styles.postContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <p className={styles.postTitle}>{post.title}</p>{" "}
            <p className={styles.postInfo}>Author: {post.author}</p>{" "}
            <p className={styles.postInfo}>Industry: {post.industry}</p>{" "}
            <p className={styles.postContent}>{post.content}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
