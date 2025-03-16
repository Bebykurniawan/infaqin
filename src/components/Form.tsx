import { useState } from "react";

interface FormProps {
  addInfaq: (nominal: number) => void;
}

const Form = ({ addInfaq }: FormProps) => {
  const [nominal, setNominal] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nominal && nominal > 0) {
      addInfaq(Number(nominal));
      setNominal(""); //* Reset input setelah submit
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="pt-8 flex items-center justify-center"
      >
        <div className="relative border border-white/80 text-white w-full max-w-xs sm:max-w-sm rounded-lg">
          <input
            type="number"
            id="number"
            className="pt-6 pb-2 px-5 w-full bg-transparent focus:outline-none text-white text-sm md:text-base peer appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder=" "
            value={nominal}
            onChange={(e) =>
              setNominal(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
          <label
            htmlFor="number"
            className="text-white/80 absolute left-5 -translate-y-1/2 cursor-text peer-focus:top-4 peer-placeholder-shown:top-1/2 top-4 peer-focus:text-xs text-xs peer-placeholder-shown:text-base transition-all"
          >
            Masukkan Nominal...
          </label>
        </div>
      </form>
    </>
  );
};

export default Form;
