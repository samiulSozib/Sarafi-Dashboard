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
