import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className='p-10' id='error-page'>
            <h1 className='flex justify-center text-center text-red-800 p-20 text-3xl font-extrabold'>
                Idiot!
            </h1>
            <p className='flex justify-center text-center'>
                Stupid, are you not think about unexpected error will occurred
                you coding? <br />
                TRASH!
            </p>
            <p>
                <i className='flex justify-center text-center text-red-800 my-20 text-6xl font-extrabold'>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    )
}
