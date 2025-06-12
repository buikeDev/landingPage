import styles from "./footer.module.css";

export default function Footer({ doneCount, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {doneCount}</span>
      <span className={styles.item}>Total todos: {totalTodos} </span>
    </div>
  );
}
