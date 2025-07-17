import { Link } from 'react-router-dom';
import simonSvg from '../assets/simon.svg';

const NotFoundPage = () => (
  <div className="w-full min-h-screen p-8 text-center flex flex-col justify-center items-center">
    <img
      src={simonSvg}
      alt="simon svg"
      className="w-[300px] md:w-[400px] lg:w-[500px]"
    />
    <h1 className="text-4xl font-bold mb-4 font-syncopate uppercase mt-4">404 - Page Not Found</h1>
    <p className="text-gray-600 mb-2 font-courier">Uh oh ... The page you're looking for doesn't exist.</p>
    <p className="text-gray-500 italic mb-6 font-courier">maybe try again?</p>
    <Link to="/" className="font-syncopate underline hover:font-bold">
      Go back home
    </Link>
  </div>
);

export default NotFoundPage;
