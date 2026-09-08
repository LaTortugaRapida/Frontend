import type React from "react";
import type { BasketItem } from "../helpers/types";

type Props = {
    items: BasketItem[];
    totalPrice: number;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
};

export const Basket: React.FC<Props> = ({
    items,
    totalPrice,
    onIncrease,
    onDecrease,
    onRemove,
}) => {
    return (
        <div>
            <h1>Basket</h1>
            <h2>Overall: {totalPrice}</h2>
            {items.map((item) => (
                <div key={item.id}>
                    <img
                        src={item.picture}
                        alt={item.name}
                        width={200}
                    />
                    <h2>{item.name}</h2>
                    <p>${item.price * item.quantity}</p>
                    <p>quantity:{item.quantity}</p>
                    <button onClick={() => onRemove(item.id)}>X</button>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                    <button onClick={() => onDecrease(item.id)}>-</button>
                </div>
            ))}
        </div>
    );
};
