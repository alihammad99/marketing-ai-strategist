import { examples } from "../examples";
import { BusinessInput } from "../types";

const Examples = ({
  setFormData,
}: {
  setFormData: (data: BusinessInput) => void;
}) => {
  return (
    <div className="flex items-center gap-2 my-8">
      <h2 className="text-xl text-slate-600">Try an example: </h2>
      {examples?.map((item) => (
        <button
          key={item?.label}
          onClick={() => setFormData(item?.data)}
          className="px-3 py-2 rounded-full border border-slate-300 hover:shadow-lg transition-all hover:border-blue-500"
        >
          {item?.label}
        </button>
      ))}
    </div>
  );
};

export default Examples;
