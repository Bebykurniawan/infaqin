import { useState } from "react";

export interface InfaqItem {
  id: number;
  nominal: number;
  tanggal: string;
}

export interface InfaqHistoryProps {
  infaqData: InfaqItem[];
  totalInfaq: number;
}

export const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
};

const useInfaq = () => {
  const [infaqData, setInfaqData] = useState<InfaqItem[]>([]);

  const totalInfaq = infaqData.reduce((acc, item) => acc + item.nominal, 0);

  const addInfaq = (nominal: number) => {
    
    const newInfaq: InfaqItem = {
      id: infaqData.length + 1,
      nominal: Number(nominal),
      tanggal: new Date().toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };

    setInfaqData((infaqData) => [...infaqData, newInfaq]);
  };

  return { infaqData, totalInfaq, addInfaq };
};

export default useInfaq;
