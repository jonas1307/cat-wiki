import CatAbout from '../components/CatAbout/CatAbout';
import HeroSearch from '../components/HeroSearch/HeroSearch';
import Layout from '../components/Layout/Layout'
import TopBreeds from '../components/TopBreeds/TopBreeds';

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSearch />
      <TopBreeds />
      <CatAbout />
    </Layout>
  )
}
