import styles from './CatAbout.module.css';

const CatAbout = () => {
  return (
    <div className={styles.cat_about}>
      <div className={styles.cat_information}>
        <h2>Why Should you have a cat?</h2>
        <div className={styles.cat_information_text}>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels...</div>
        <a href="#">Read more &rarr;</a>
      </div>
      <div className={styles.cat_gallery}>
        <img className={styles.gallery_img_1} src="/img/cat-2.png" />
        <img className={styles.gallery_img_2} src="/img/cat-3.png" />
        <img className={styles.gallery_img_3} src="/img/cat-1.png" />
      </div>
    </div>
  );
}

export default CatAbout;