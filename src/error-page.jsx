import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className='p-10' id='error-page'>
            <h1 className='flex justify-center text-center text-red-800 p-20 text-6xl font-extrabold'>
                Warning!
            </h1>
            <p className='flex justify-center text-center'>
                Your GF really love you and that's more than you know! <br />
                How dare you say that you love your GF more??
            </p>
            <p>
                <i className='flex justify-center text-center text-red-800 my-20 text-3xl font-extrabold'>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    )
}
