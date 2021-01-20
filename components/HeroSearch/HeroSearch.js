import styles from './HeroSearch.module.css';

const HeroSearch = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h1 className={styles.text_logo}>CatWiki</h1>
        <div className={styles.headline}>Get to know more about your cat's breed</div>
        <div className={styles.search}>
          <input className={styles.search_input} placeholder='Search...' />
        </div>
      </div>
    </div>
  )
}

export default HeroSearch;
