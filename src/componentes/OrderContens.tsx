import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../type";

type OrderContensProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContens({ order, removeItem }: OrderContensProps) {
  return (
    <div>
      <h2 className=" font-black text-4xl">Consumo</h2>

      <div className=" space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className=" flex justify-between items-center border-t border-cyan-700 p-4 last-of-type:border-b "
          >
            <div>
              <p className=" font-serif">
                {item.name} -{formatCurrency(item.price)}
              </p>
              <p className=" font-bold">
                cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className=" bg-red-700 w-8 h-8 rounded-full text-white hover:bg-red-900 shadow-black shadow-md"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
