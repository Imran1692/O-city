import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-zinc-200 py-10'>
            <div className='flex flex-wrap mx-10 my-3.5'>
                <div className='flex-1 basis-lg'>
                    <a href="#" className="text-3xl font-bold">
                        <span className="text-amber-400">O</span>
                        <span className="">-</span>
                        city
                    </a>

                    <p className='mt-3 font-semibold text-md text-zinc-500'>
                        Bred for a high contant of beneficial substances. Our Products are all fresh and healthy.
                    </p>

                    <p className='mt-3 text-shadow-zinc-500'>
                        2025 &copy; All Rights Reserved
                    </p>
                </div>
                <div className='flex-1'>
                    <ul>
                        <li>
                            <h5 className='text-zinc-700 text-2xl font-bold'>company</h5>
                        </li>
                        <li>
                            <a href="#" className='text-zinc-700 hover:text-amber-600' >About</a>
                        </li>
                        <li>
                            <a href="#" className='text-zinc-700 hover:text-amber-500'>FAQ's</a>
                        </li>
                    </ul>

                </div>
                 <div className='flex-1'>
                    <ul>
                        <li>
                            <h5 className='text-zinc-700 text-2xl font-bold'>Support</h5>
                        </li>
                        <li>
                            <a href="#" className='text-zinc-700 hover:text-amber-600' >Support Center</a>
                        </li>
                        <li>
                            <a href="#" className='text-zinc-700 hover:text-amber-500'>Feedback</a>
                        </li>
                         <li>
                            <a href="#" className='text-zinc-700 hover:text-amber-500'>Contrac Us</a>
                        </li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <h5 className='text-zinc-700 text-2xl font-bold'>
                        Stay Connected
                    </h5>
                    <p className='mt-3 font-semibold text-md text-zinc-500'>
                        Questions or feedback?<br />
                        We'd love to hear from you
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer