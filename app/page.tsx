import ColorForm from "./_components/ColorForm";
import ColorList from "./_components/ColorList";
import FilterColors from "./_components/FilterColors";

type ParamsProps = {
  searchParams: { query?: string };
};

export default async function Home({ searchParams }: ParamsProps) {
  const query = searchParams?.query || "";

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[300px] md:mr-14">
        <h2 className="text-center text-lg font-semibold text-gray-900 mb-2">
          Stored Colors
        </h2>
        <div className="bg-slate-50 h-[414px] border rounded-lg">
          <FilterColors />
          <hr />
          <div className="overflow-y-scroll max-h-[320px] p-4">
            <ColorList query={query} />
          </div>
        </div>
      </div>
      <div className="w-[300px]">
        <h2 className="text-center text-lg font-semibold text-gray-900 mb-2">
          Add Color
        </h2>
        <ColorForm />
      </div>
    </div>
  );
}
