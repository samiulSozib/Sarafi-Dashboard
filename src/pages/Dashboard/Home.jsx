import PageMeta from "../../components/common/PageMeta";
import { ChartSection } from "./ChartSection";
import { CurrencyExchangeRateSection } from "./CurrencyExchangeRateSection";
import { FinancialSummarySection } from "./FinancialSummarySection";
import { RecentCustomerTransactionSection } from "./RecentCustomerTransactionSection";
import { TopButtonSection } from "./TopButtonSection";

export default function Home() {
  return (
    <>
      <PageMeta title="Sarafi" description="" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <TopButtonSection />
        <CurrencyExchangeRateSection/>
        <FinancialSummarySection/>
        <ChartSection/>
        <RecentCustomerTransactionSection/>
      </div>
    </>
  );
}
