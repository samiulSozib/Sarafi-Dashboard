import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Customers } from "./pages/Customers/Customers";
import { CurrencyConversion } from "./pages/FinancialServices/CurrencyConversion/CurrencyConversion";
import { CurrencyConversionForm } from "./pages/FinancialServices/CurrencyConversion/CurrencyConversionForm";
import { SendCurrency } from "./pages/FinancialServices/SendCurrency/SendCurrency";
import { ReceivedCurrency } from "./pages/FinancialServices/ReceivedCurrency/ReceivedCurrency";
import { AccountToAccountTransfer } from "./pages/FinancialServices/AccountToAccountTransfer/AccountToAccountTransfer";
import { DepositToBank } from "./pages/FinancialServices/DepositToBank/DepositToBank";
import { TransactionHistory } from "./pages/FinancialServices/TransactionHistory/TransactionHistory";
import {TransactionHistoryForm} from "./pages/FinancialServices/TransactionHistory/TransactionHistoryForm";
import { ExchangeFinancialStatus } from "./pages/Reports/ExchangeFinancialStatus/ExchangeFinancialStatus";
import { BranchIndicatorReport } from "./pages/Reports/BranchIndicatorReport/BranchIndicatorReport";
import { CurrencyExchangeReport } from "./pages/Reports/CurrencyExchangeReport/CurrencyExchangeReport";
import { CurrencySendingReport } from "./pages/Reports/CurrencySendingReport/CurrencySendingReport";
import { DeletedTransactions } from "./pages/Reports/DeletedTransactions/DeletedTransactions";
import { TotalTransferReport } from "./pages/Reports/TotalTransferReport/TotalTransferReport";
import { ProfitAndLoss } from "./pages/Reports/ProfitAndLoss/ProfitAndLoss";
import { Employees } from "./pages/HumanResources/Employees/Employees";
import { ShareHolder } from "./pages/HumanResources/Shareholders/ShareHolder";
import { OrganizationStructure } from "./pages/HumanResources/OrganizationalStructure/OrganizationStructure";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            {/* <Route index path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> */}
            <Route index path="/" element={<Home />} />
            <Route index path="/customer/:customerType" element={<Customers/>}/>


            <Route index path="/financial-services/currency-conversion" element={<CurrencyConversion/>}/>
            <Route index path="/financial-services/currency-conversion-form" element={<CurrencyConversionForm/>}/>
            <Route index path="/financial-services/send-currency" element={<SendCurrency/>}/>
            <Route index path="/financial-services/received-currency" element={<ReceivedCurrency/>}/>
            <Route index path="/financial-services/account-to-account-transfer" element={<AccountToAccountTransfer/>}/>
            <Route index path="/financial-services/deposit-to-bank" element={<DepositToBank/>}/>
            <Route index path="/financial-services/transaction-history" element={<TransactionHistory/>}/>
            <Route index path="/financial-services/transaction-history-form" element={<TransactionHistoryForm/>}/>


            <Route index path="/reports/exchange-financial-status" element={<ExchangeFinancialStatus/>}/>
            <Route index path="/reports/branch-indicator" element={<BranchIndicatorReport/>}/>
            <Route index path="/reports/profit-loss" element={<ProfitAndLoss/>}/>
            <Route index path="/reports/currency-exchange" element={<CurrencyExchangeReport/>}/>
            <Route index path="/reports/currency-sending" element={<CurrencySendingReport/>}/>
            <Route index path="/reports/deleted-transactions" element={<DeletedTransactions/>}/>
            <Route index path="/reports/total-transfers" element={<TotalTransferReport/>}/>


            <Route index path="/human-resources/employees" element={<Employees/>}/>
            <Route index path="/human-resources/shareholders" element={<ShareHolder/>}/>
            <Route index path="/human-resources/organizational-structure" element={<OrganizationStructure/>}/>













            

            

            {/* Others Page */}

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
        </Routes>
      </Router>
    </>
  );
}
