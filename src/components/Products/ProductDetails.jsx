import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 100,
  originalPrice: 120,
  diescription: "This is a stylish jacket perfect for any occasion",
  brand: "Nike",
  material: "Cotton",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random-1",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random-2",
      altText: "Stylish Jacket",
    },
  ],
};

const similarProducts = [
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
    // {
    //     _id: 5,
    //     name: "Product 1",
    //     price: 100,
    //     images:[{url: "https://picsum.photos/500/500?random-9"}]
    // },
    // {
    //     _id: 6,
    //     name: "Product 1",
    //     price: 100,
    //     images:[{url: "https://picsum.photos/500/500?random-8"}]
    // }
  ]

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize,  setSelectedSize] = useState(null);
  const [selectedColor, setSeletedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, steIsButtonDisabled] = useState(false);


  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);
  

  const handleQuantityChange = (action) =>{
    if(action === "plus") setQuantity((prev)=> prev+1);
    if(action === "minus" && quantity > 1) setQuantity((prev)=>prev-1);
  }

  const handleAddToCart = () =>{
    if(!selectedColor || !selectedSize){
        toast.error("Please select a size or color before add to cart.", {
            duration:1000,
        })
        return
    }
    steIsButtonDisabled(true);

    setTimeout(()=>{
        toast.success("Product added to cart!.", {
            duration:1000,
        })
        steIsButtonDisabled(false);
    }, 500);
  }


  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbails */}
          <div className="hidden md:flex flex-col space-y-4 mr-5">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`cursor-pointer w-20 h-20 object-cover rounded-lg border ${
                  mainImage === image.url ? "border-black" : "border-y-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt={selectedProduct.images[0]?.altText || selectedProduct.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile thumbnails */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`cursor-pointer w-20 h-20 object-cover rounded-lg border ${
                    mainImage === image.url ? "border-black" : "border-y-gray-300"
                  }`}
                onClick={()=> setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.diescription}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSeletedColor(color)}
                    className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button key={size} onClick={()=> setSelectedSize(size)} className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : ""}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button onClick={()=> handleQuantityChange("minus")} className="px-2 py-1 bg-gray-200 rounded text-lg">
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button onClick={()=> handleQuantityChange("plus")} className="px-2 py-1 bg-gray-200 rounded text-lg">
                  +
                </button>
              </div>
            </div>
            <button onClick={handleAddToCart} disabled={isButtonDisabled} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}>
              {isButtonDisabled? "Adding...": "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
            <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
