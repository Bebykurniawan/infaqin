import { InfaqHistoryProps,formatRupiah } from "../hooks/useInfaq";

const InfaqHistory = ({infaqData,totalInfaq} : InfaqHistoryProps) => {
  return (
    <>
      <div className="max-w-lg mx-auto overflow-x-auto bg-transparent p-4 my-12">
        <table className="w-full text-left text-sm whitespace-nowrap border-spacing-y-2">
          <thead className="uppercase tracking-wider text-white/80 border-b border-neutral-600">
            <tr>
              <th scope="col" className="px-6 py-3 border-r border-neutral-600">Tanggal</th>
              <th scope="col" className="px-6 py-3">Nominal</th>
            </tr>
          </thead>

          <tbody className="text-white">
            {infaqData.map(({ id, nominal, tanggal }) => (
              <tr key={id} className="bg-white/10 hover:bg-white/20 transition">
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
