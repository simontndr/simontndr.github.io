import {Link} from 'react-router-dom';

// 404 Not Found component
const NotFoundPage = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
    <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
    <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
      Go back home
    </Link>
  </div>
);

export default NotFoundPage;