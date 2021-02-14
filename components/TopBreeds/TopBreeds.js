import Link from 'next/link';
import styles from './TopBreeds.module.css';

const TopBreeds = () => {
  return (
    <div className={styles.top_breeds}>
      <div className={styles.breed_title}>
        <h2>Most Searched Breeds</h2>
      </div>
      <div className={styles.breed_header}>
        <div className={styles.subtitle}>66+ breeds for you to discover</div>
        <div className={styles.read_more}><Link href="/top">See more &rarr;</Link></div>
      </div>
      <div className={styles.breed_gallery}>
        <Link href="/details/1">
          <div className={styles.breed_item}>
            <div className={styles.breed_img} style={{backgroundImage: "url('https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg')"}}>
            </div>
            <span className={styles.breed_name}>Bengal</span>
          </div>
        </Link>
        <Link href="/details/1">
          <div className={styles.breed_item}>
            <div className={styles.breed_img} style={{backgroundImage: "url('https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg')"}}>
            </div>
            <span className={styles.breed_name}>Bengal</span>
          </div>
        </Link>
        <Link href="/details/1">
          <div className={styles.breed_item}>
            <div className={styles.breed_img} style={{backgroundImage: "url('https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg')"}}>
            </div>
            <span className={styles.breed_name}>Bengal</span>
          </div>
        </Link>        
        <Link href="/details/1">
          <div className={styles.breed_item}>
            <div className={styles.breed_img} style={{backgroundImage: "url('https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg')"}}>
            </div>
            <span className={styles.breed_name}>Bengal</span>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default TopBreeds;
