import './productList.css'
import { Product } from "../product/Product"
import { products } from '../../data'

export const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Lorem, ipsum dolor</h1>
                <p className="pl-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iure expedita voluptates. Facilis voluptas deserunt eligendi ullam et inventore velit.</p>
            </div>
            <div className="pl-iist">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}
