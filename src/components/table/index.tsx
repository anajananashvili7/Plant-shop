import styles from "./index.module.css";

type Props = { posts: any; onDelete: (id: number) => void };

const Table = ({ posts, onDelete }: Props) => {
  if (!posts?.length) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <table className={styles.container} border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>userID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post: any) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td onClick={() => onDelete(post.id)}>X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
