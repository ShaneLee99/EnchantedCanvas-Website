'use client'



export default function Home() {


  return (
    <main className="flex min-h-screen flex-col transition-all bg-gray-dark">

      <div className='flex w-full h-[8rem] bg-gray-light xl:px-80 lg:px-20 md:px-12 px-8 py-3'>
        <div className='flex flex-col items-start justify-center'>
          <h2 className='text-3xl font-Lapis tracking-wide'>SELL THE GAME</h2>
          <p className='pt-2'>What do you do better than others.... Why should people install it.... What's the plans for the future....</p>
        </div>
        <div className='flex-grow'></div>
        <div className='flex items-center justify-center'>
          <button className='px-4 py-2 bg-gray-dark rounded shadow-md font-Lapis tracking-wide'>CALL TO ACTION</button>
        </div>
      </div>
    </main>
  )
}
