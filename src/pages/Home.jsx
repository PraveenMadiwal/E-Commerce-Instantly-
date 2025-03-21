import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals    />
    </div>
  )
}

export default Home