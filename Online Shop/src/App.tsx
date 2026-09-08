import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";
import type { BasketItem } from "./helpers/types";
import type { Product } from "./helpers/types";

export default function App() {
    const [products] = useState<Product[]>([
        {
            id: 101,
            name: "Monstera deliciosa 'Albo Variegata'",
            price: 120,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/6/64/Monstera_deliciosa_variegata.jpg",
        },
        {
            id: 102,
            name: "Philodendron 'Pink Princess'",
            price: 85,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/3/31/Pink_princess_philodendron.jpg",
        },
        {
            id: 103,
            name: "Alocasia micholitziana 'Frydek'",
            price: 48,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alocasia_micholitziana_%27Frydek%27.jpg",
        },
        {
            id: 104,
            name: "Anthurium crystallinum",
            price: 65,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/f/f8/Anthurium_crystallinum_%2830327577304%29.jpg",
        },
        {
            id: 105,
            name: "Dischidia ruscifolia 'Million Hearts'",
            price: 24,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/9/97/Dischidia_ruscifolia_kz01.jpg",
        },
        {
            id: 106,
            name: "Begonia maculata",
            price: 32,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/4/4b/Begonia_maculata_Raddi32.jpg",
        },
        {
            id: 107,
            name: "Philodendron gloriosum",
            price: 55,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/f/f1/Philodendron_gloriosum.jpg",
        },
        {
            id: 108,
            name: "Calathea orbifolia",
            price: 38,
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/0/0f/Calathea_orbifolia.jpg",
        },
    ]);

    const [basket, setBasket] = useState<BasketItem[]>([]);

    const moveToBasket = (product: Product): void => {
        const existingItem = basket.find((item) => item.id === product.id);

        if (!existingItem) {
            setBasket([
                ...basket,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
            return;
        }

        setBasket(
            basket.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const increaseQuantity = (id: number): void => {
        setBasket(
            basket.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decreaseQuantity = (id: number): void => {
        const item = basket.find((item) => item.id === id);
        if (!item) {
            return;
        }
        if (item.quantity === 1) {
            removeFromBasket(id);
            return;
        }
        setBasket(
            basket.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    };

    const removeFromBasket = (id: number): void => {
        setBasket(basket.filter((item) => item.id !== id));
    };

    const totalBasketPrice = basket.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

    return (
        <div>
            <h1>Online Shop</h1>

            <ProductList products={products} onMove={moveToBasket} />

            <Basket
                items={basket}
                totalPrice={totalBasketPrice}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeFromBasket}
            />
        </div>
    );
}
