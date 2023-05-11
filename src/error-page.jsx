import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import DarkMode from "./components/DarkMode"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div
            id='error-page'
            class='grid h-screen overflow-hidden bg-slate-200 dark:bg-gray-900 place-content-center p-36'
        >
            <div class='text-center'>
                <h1 class='font-black text-gray-300 dark:text-gray-800 text-9xl'>
                    404
                </h1>
                <p class='text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-300 sm:text-4xl'>
                    Uh-oh!
                </p>
                <p class='my-4 text-gray-500'>
                    {error.statusText || error.message}.
                </p>
            </div>
            <div className='flex justify-center'>
                <Link
                    to='/'
                    class='absolute px-5 py-3 my-6 text-sm font-medium rounded-lg text-white bg-sky-500 dark:bg-gradient-to-br from-blue-500 via-sky-500 to-emerald-500 dark:group-hover:from-blue-500 dark:group-hover:via-sky-500 dark:group-hover:to-emerald-500 focus:outline-none focus:ring dark:blur-lg'
                >
                    Go Back Home
                </Link>
                <Link
                    to='/'
                    class='absolute px-5 py-3 my-6 text-sm font-medium rounded-lg text-white bg-sky-500 dark:bg-gradient-to-br from-blue-500 via-sky-500 to-emerald-500 dark:group-hover:from-blue-500 dark:group-hover:via-sky-500 dark:group-hover:to-emerald-500 focus:outline-none focus:ring'
                >
                    Go Back Home
                </Link>
            </div>
            <DarkMode />
        </div>
    )
}
