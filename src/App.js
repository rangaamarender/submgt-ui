import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss';

//theme
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

import { I18nProvider } from './i18n/i18n';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import TenantListPage from './pages/tenants/TenantListPage';
import UserListPage from './pages/users/UserListPage';
import PaymentsListPage from './pages/payments/PaymentsListPage';
import AddressBookPage from './pages/addressBook/addressBookPage';
import TaskListPage from './pages/tasks/TaskListPage';
import PromotionsListPage from './pages/promotions/PromotionsListPage';
import InvoiceListPage from './pages/invoices/InvoicesListPage';
import MultiStepForm from './components/viewers/MultiStepForm';
import ErrorBoundary from './errorHandling/ErrorBoundary';
import PlainLayout from './components/layouts/PlainLayout';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
    return (
        <ThemeProvider>
            <ErrorBoundary>
                <I18nProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/submgt" element={<LoginPage />} />
                            <Route element={<PlainLayout />}>
                                <Route path="/submgt/dashboard" element={<DashboardPage />} />
                                <Route path="/submgt/tenants" element={<TenantListPage />} />
                                <Route path="/submgt/users" element={<UserListPage />} />
                                <Route path="/submgt/addressBook" element={<AddressBookPage />} />
                                <Route path="/submgt/payments" element={<PaymentsListPage />} />
                                <Route path="/submgt/tasks" element={<TaskListPage />} />
                                <Route path="/submgt/invoices" element={<InvoiceListPage />} />
                                <Route path="/submgt/promotions" element={<PromotionsListPage />} />
                                <Route path="/submgt/multistepform" element={<MultiStepForm />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </I18nProvider>
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;
