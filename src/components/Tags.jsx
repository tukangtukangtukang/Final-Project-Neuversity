export default function Tags() {
    return (
        <div className="relative my-7">
            <h1 className='text-3xl'>Tags:</h1>
            <div className='flex gap-3 pt-3'>
                <div className='bg-neutral-300 rounded w-auto flex justify-center p-2'>
                    <h5 className='text-xl'>Anime</h5>
                </div>
                <div className='bg-neutral-300 rounded w-auto flex justify-center p-2'>
                    <h5 className='text-xl'>Autism</h5>
                </div>
                <div className='bg-neutral-300 rounded w-auto flex justify-center p-2'>
                    <h5 className='text-xl'>Reincarnation</h5>
                </div>
            </div>
            <div className='flex gap-3 pt-3'>
                <div className='bg-neutral-300 rounded w-auto flex justify-center p-2'>
                    <h5 className='text-xl'>Recommendation</h5>
                </div>
                <div className='bg-neutral-300 rounded w-auto flex justify-center p-2'>
                    <h5 className='text-xl'>MC</h5>
                </div>
                <div className='bg-neutral-300 rounded w-auto flex justify-center p-2'>
                    <h5 className='text-xl'>Bleach</h5>
                </div>
            </div>
        </div>
    )
}
