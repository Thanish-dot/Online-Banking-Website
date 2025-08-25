import { Link } from 'react-router-dom';
import './SendMoney.css'; // Reuse button styles

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <Link to="/fund-transfer" className="money-btn">
        Fund Transfer
      </Link>
      <Link to="/bill-payments" className="money-btn">
        Bill Payments
      </Link>
    </div>
  );
};

export default QuickLinks;