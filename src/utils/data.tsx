export interface InfaqHistoryItem {
    tanggal: string;
    nominal: number;
  }
  
  export const infaqHistoryData: InfaqHistoryItem[] = [
    { tanggal: "12 Maret 2025", nominal: 50000 },
    { tanggal: "10 Maret 2025", nominal: 100000 },
    { tanggal: "08 Maret 2025", nominal: 25000 },
    { tanggal: "05 Maret 2025", nominal: 75000 },
    { tanggal: "02 Maret 2025", nominal: 30000 },
  ];
  
  export const totalInfaq = infaqHistoryData.reduce((acc, curr) => acc + curr.nominal, 0);
  