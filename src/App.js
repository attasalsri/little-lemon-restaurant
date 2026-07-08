import Header from "./components/Header";
import Footer from "./components/Footer"; // إعادة استدعاء الفوتر
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage"; // تأكد أن المسار صحيح
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingPage />} />{" "}
        <Route path="/payment" element={<PaymentPage />} />  {/* أضف هذا السطر */}
        </Routes>
      <Footer /> {/* إضافة الفوتر ليظهر في كل الصفحات */}
    </Router>
  );
}

export default App; // تأكد من وجود هذا السطر في نهاية الملف!
