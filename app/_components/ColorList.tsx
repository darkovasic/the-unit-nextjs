import DeleteButton from "@/components/DeleteButton";
import { fetchFilteredColors } from "../util/actions";

async function ColorList({ query }: { query?: string }) {
  const items = await fetchFilteredColors(query);
  return (
    <ul>
      {items?.map((item) => {
        return (
          <li className="flex items-center justify-between mb-2" key={item.id}>
            <div className="flex items-center">
              <div
                className="h-7 w-8 rounded mr-2"
                style={{ backgroundColor: item.hex }}
              ></div>
              <div>{item.name}</div>
            </div>
            <DeleteButton id={item.id} />
          </li>
        );
      })}
    </ul>
  );
}

export default ColorList;
