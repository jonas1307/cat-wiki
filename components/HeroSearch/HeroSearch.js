import styles from './HeroSearch.module.css';

const HeroSearch = () => {
  return (
    <div className={styles.hero}>
      <h1>CatWiki</h1>
      <span>Get to know more about your cat breed</span>
      <div>Search</div>
    </div>
  )
}

export default HeroSearch;