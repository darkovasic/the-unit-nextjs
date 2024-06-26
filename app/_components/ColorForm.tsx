"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import Input from "@/components/Input";
import { createColor } from "../util/actions";

export default function ColorForm() {
  const [color, setColor] = useState("#aabbcc");
  const [colorName, setColorName] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createColor(colorName, color);
    console.log(response.message);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-slate-50 w-[300px] h-[414px] border rounded-lg p-4"
    >
      <Input
        label="Name:"
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
        type="text"
        required
      />
      <Input
        label="Hex:"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="text"
        required
      />
      <div className="flex">
        <div className="w-1/4 text-right">
          <label className="pr-2 text-sm font-medium text-gray-900 dark:text-white">
            Color:
          </label>
        </div>
        <div className="w-3/4 mb-4">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </div>
      <div className="text-right">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Color
        </button>
      </div>
    </form>
  );
}
