import Membership from './../Assets/images/membership-min.png'


function Free() {

    const style = {
        backgroundImage: `url(${Membership})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <div className='h-screen' style={style}>
            <div className='bg-rose-400 md:bg-transparent p-8 md:p-0 md:mx-36 md:translate-y-20'>
                <div className='grid md:grid-cols-3 gap-y-10 md:gap-6'>
                    <div className='bg-zinc-800 text-white rounded-3xl p-10 space-y-5'>
                        <h3 className='text-xl font-bold'>Freelancer</h3>
                        <p className='text-gray-300 font-light'>The essentials to provide your best work for clients.</p>
                        <h3 className='text-4xl font-bold'>Free</h3>
                        <button className='bg-rose-400 font-semibold w-full rounded-md p-2 hover:bg-zinc-600 duration-100'><a href='#'>Buy plan</a></button>
                        <ul className='space-y-3 font-light text-gray-300'>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>5 products</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Up to 1,000 subscribers</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Basic analytics</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>48-hour support response time</p>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-zinc-800 text-white rounded-3xl p-10 space-y-5 outline outline-4 outline-indigo-500'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-bold'>Startup</h3>
                            <span class="bg-indigo-500 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">Most popular</span>
                        </div>
                        <p className='text-gray-300 font-light'>A plan that scales with your rapidly growing business.</p>
                        <h3 className='space-x-1'><span className='text-4xl font-bold'>$30</span><span>/month</span></h3>
                        <button className='bg-indigo-500 font-semibold w-full rounded-md p-2 hover:bg-zinc-600 duration-100'><a href='#'>Buy plan</a></button>
                        <ul className='space-y-3 font-light text-gray-300'>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>25 products</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Up to 10,000 subscribers</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Advanced analytics</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>24-hour support response time</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Marketing automations</p>
                            </li>
                        </ul>
                    </div>
                    <div className='bg-zinc-800 text-white rounded-3xl p-10 space-y-5'>
                        <h3 className='text-xl font-bold'>Enterprise</h3>
                        <p className='text-gray-300 font-light'>Dedicated support and infrastructure for your company.</p>
                        <h3 className='space-x-1'><span className='text-4xl font-bold'>$48</span><span>/month</span></h3>
                        <button className='bg-rose-400 font-semibold w-full rounded-md p-2 hover:bg-zinc-600 duration-100'><a href='#'>Buy plan</a></button>
                        <ul className='space-y-3 font-light text-gray-300'>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Unlimited products</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Unlimited subscribers</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Advanced analytics</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>1-hour, dedicated support response time</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Marketing automations</p>
                            </li>
                            <li className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                <p>Custom reporting tools</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Free;