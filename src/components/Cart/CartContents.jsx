import React from 'react'

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size:'M',
            color:'Black',
            price: 200,
            quantity: 1,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "T-shirt",
            size:'L',
            color:'Red',
            price: 200,
            quantity: 1,
            image: "https://picsum.photos/200?random=2"
        },
        // {
        //     productId: 1,
        //     name: "T-shirt",
        //     size:'M',
        //     color:'Black',
        //     price: 200,
        //     quantity: 1,
        //     image: "https://picsum.photos/200?random=3"
        // }

    ]
  return (
    <div>CartContents</div>
  )
}

export default CartContents