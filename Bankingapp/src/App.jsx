// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AccountProvider } from "./context/AccountContext";
import { TransactionProvider, TransactionContext } from "./context/TransactionContext";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Wallet from "./pages/Wallet";
import Cards from "./pages/Cards";
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";
import PersonalLogin from "./pages/PersonalLogin";
import CorporateLogin from "./pages/CorporateLogin";
import Register from "./pages/Register";
import Loans from "./pages/Loans";
import Investments from "./pages/Investments";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import Notifications from "./pages/Notifications";
import BillPayments from "./pages/BillPayments";
import FundTransfer from "./pages/FundTransfer";
import Beneficiaries from "./pages/Beneficiaries";
import SearchResults from "./pages/SearchResults";
import UpiPayment from "./pages/UpiPayment";
import ErrorPage from "./pages/ErrorPage";
import PersonalDashboard from "./pages/PersonalDashboard";
import CorporateDashboard from "./pages/CorporateDashboard";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Styles
import './components/Navbar.css';
import './components/Footer.css';

// ================= Layout Wrapper =================
function Layout() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <TransactionContext.Consumer>
          {({ addTransaction }) => (
            <AccountProvider addTransaction={addTransaction}>
              <div className="app-container">
                <Navbar />
                <main className="main-content">
                  <Outlet />
                </main>
                <Footer />
              </div>
            </AccountProvider>
          )}
        </TransactionContext.Consumer>
      </TransactionProvider>
    </AuthProvider>
  );
}

// ================= Routes =================
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "wallet", element: <Wallet /> },
      { path: "cards", element: <Cards /> },
      { path: "transactions", element: <Transactions /> },
      { path: "login", element: <Login /> },
      { path: "personal-login", element: <PersonalLoginWrapper /> },
      { path: "corporate-login", element: <CorporateLoginWrapper /> },
      { path: "personal-dashboard", element: <PersonalDashboard /> },
      { path: "corporate-dashboard", element: <CorporateDashboard /> },
      { path: "register", element: <Register /> },
      { path: "loans", element: <Loans /> },
      { path: "investments", element: <Investments /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      { path: "support", element: <Support /> },
      { path: "faq", element: <FAQ /> },
      { path: "notifications", element: <Notifications /> },
      { path: "bill-payments", element: <BillPayments /> },
      { path: "fund-transfer", element: <FundTransfer /> },
      { path: "beneficiaries", element: <Beneficiaries /> },
      { path: "upi-payment", element: <UpiPayment /> },
      { path: "search", element: <SearchResults /> },
    ],
  },
]);

// ================= Wrappers for Login Pages =================
// PersonalLogin wrapper to navigate to PersonalDashboard
function PersonalLoginWrapper() {
  const navigate = useNavigate();
  return <PersonalLogin onLogin={() => navigate("/personal-dashboard")} />;
}

// CorporateLogin wrapper to navigate to CorporateDashboard
function CorporateLoginWrapper() {
  const navigate = useNavigate();
  return <CorporateLogin onLogin={() => navigate("/corporate-dashboard")} />;
}

// ================= App Component =================
function App() {
  return <RouterProvider router={router} />;
}

export default App;
