import { useMemo } from "react";
import { OrderItem } from "../type";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotal({
  order,
  tip,
  placeOrder,
}: OrderTotalProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmaunt = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmaunt = useMemo(() => subTotalAmount + tipAmaunt, [tip, order]);

  return (
    <>
      <div className=" space-y-3 ">
        <h2 className=" font-black text-2xl"> Totales y Propina:</h2>
        <p>
          Subtotal a pagar:
          <span className=" font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>

        <p>
          Propinas:
          <span className=" font-bold"> {formatCurrency(tipAmaunt)}</span>
        </p>

        <p>
          Total a pagar:
          <span className=" font-bold"> {formatCurrency(totalAmaunt)}</span>
        </p>
      </div>

      <button
        className=" font-bold  bg-black w-full p-3 text-white uppercase mt-10 
   disabled:opacity-10"
        disabled={totalAmaunt === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
