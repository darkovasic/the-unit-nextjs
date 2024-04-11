"use client";

import DeleteButton from "@/components/DeleteButton";
import type { Color } from "../util/types";
import { deleteColor } from "../util/actions";

function ColorList({ items }: { items: Color[] }) {
  const handleDelete = (id: number) => async (): Promise<void> => {
    await deleteColor(id);
    return;
  };

  return (
    <ul>
      {items.map((item) => {
        return (
          <li className="flex items-center justify-between mb-2" key={item.id}>
            <div className="flex items-center">
              <div
                className="h-7 w-8 rounded mr-2"
                style={{ backgroundColor: item.hex }}
              ></div>
              <div>{item.name}</div>
            </div>
            <DeleteButton onClick={handleDelete(item.id)} />
          </li>
        );
      })}
    </ul>
  );
}

export default ColorList;
