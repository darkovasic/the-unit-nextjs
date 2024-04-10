import ColorForm from "@/components/ColorForm";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[300px] md:mr-14">
        <h2 className="text-center text-lg font-semibold text-gray-900 mb-2">
          Stored Colors
        </h2>
        <div className="bg-slate-50 h-[414px] border rounded-lg p-4"></div>
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
