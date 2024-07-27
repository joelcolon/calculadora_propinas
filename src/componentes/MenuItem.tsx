import type { MenuItem } from "../type";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className=" w-full  border-2 my-1 rounded-md shadow-black shadow-sm  border-cyan-700 hover:bg-cyan-700 hover:text-white p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p className=" font-serif text-lg">{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
}
