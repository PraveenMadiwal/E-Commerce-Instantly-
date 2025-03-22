import Hero from '../components/Layout/Hero'
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeaturedSection from '../components/Products/FeaturedSection';
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid';

const placeholderProducts=[
    {
        _id: 1,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-2"}]
    },
    {
        _id: 2,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-3"}]
    },
    {
        _id: 3,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-4"}]
    },
    {
        _id: 4,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-5"}]
    },
    {
        _id: 5,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-6"}]
    },
    {
        _id: 6,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-7"}]
    },
    {
        _id: 7,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-12"}]
    },
    {
        _id: 8,
        name: "Product 1",
        price: 100,
        images:[{url: "https://picsum.photos/500/500?random-11"}]
    },
]

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals    />
        {/* Best seller */}
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetails />

        <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
            <ProductGrid products={placeholderProducts} />
        </div>
        <FeaturedCollection />
        <FeaturedSection />
    </div>
  )
}

export default Home