import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="bg-gray-100 text-center pb-10">
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center mb-10">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-8">
          It seems you've stumbled upon a wrong route.
        </p>
        <img
          src="https://via.placeholder.com/500"
          alt="Error Illustration"
          className="m-auto mb-10"
        />
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go to Home
        </a>
      </div>
    </div>
        <i className="font-semibold">{error.statusText || error.message}</i>
    
    </div>
  );
}