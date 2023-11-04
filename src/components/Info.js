import styles from './Info.module.css';

console.log(styles);

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello components</h1>
      <button className="my-btn">Click me</button>
    </div>
  );
};

export default Info;
