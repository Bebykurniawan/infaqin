import { infaqHistoryData, totalInfaq, InfaqHistoryItem } from "../utils/data";

const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(angka);
};

const InfaqHistory = () => {
  return (
    <>
      <div className="max-w-lg mx-auto overflow-x-auto bg-transparent p-4 my-12">
        <table className="w-full text-left text-sm whitespace-nowrap border-separate border-spacing-y-2">
          <thead className="uppercase tracking-wider text-white/80 border-b border-neutral-600">
            <tr>
              <th scope="col" className="px-6 py-3 border-r border-neutral-600">Tanggal</th>
              <th scope="col" className="px-6 py-3">Nominal</th>
            </tr>
          </thead>

          <tbody className="text-white">
            {infaqHistoryData.map(({ tanggal, nominal }: InfaqHistoryItem, idx: number) => (
              <tr key={idx} className="bg-white/10 hover:bg-white/20 transition">
                <th className="px-6 py-3 border-r border-neutral-600">{tanggal}</th>
                <td className="px-6 py-3">{formatRupiah(nominal)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="border-t border-neutral-600 text-white/80">
            <tr>
              <th className="px-6 py-3 border-r border-neutral-600">Total:</th>
              <td className="px-6 py-3">{formatRupiah(totalInfaq)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default InfaqHistory;
