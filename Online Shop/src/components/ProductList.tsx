import type { Product } from "../helpers/types";

type Props = {
    products: Product[];
    onMove: (product: Product) => void;
};

export const ProductList: React.FC<Props> = ({ products, onMove }) => {
    return (
        <div>
            {
                products.map(product =>
                    <div key={product.id}>
                        <img
                            src={product.picture}
                            alt={product.name}
                            width={200}
                        />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                        <button onClick={() => onMove(product)}>
                            Add to Basket
                        </button>
                    </div>
                )
            }
        </div>
    )
}
