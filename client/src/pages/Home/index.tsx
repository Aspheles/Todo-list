import { Link } from "react-router-dom"
import "./index.css";

const Home = () => {
    return (
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>{' '}
            <span className="block text-indigo-600 xl:inline">online tasks</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            You have come to the right place to keep track of your tasks which will be saved into the system which you can always come back to.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                <Link to={"/login"}>Get started</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    )
}


export {Home}