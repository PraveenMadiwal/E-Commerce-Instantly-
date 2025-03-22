import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa';

const CollectionPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            const fetchedProducts = [
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
            ];
            setProducts(fetchedProducts);
        }, 1000);
    }, []);

  return (
    <div className="flex flex-col lg:flex-row">
        {/* mobile filter button */}
        <button className="lg:hidden border p-2 flex justify-center items-center">
            <FaFilter className='mr-2' />
        </button>
        {/* Filter sidebar */}
    </div>
  )
}

export default CollectionPage