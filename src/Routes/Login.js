


function Login() {
    return (
        <div className="bg-zinc-800 h-screen overflow-hidden">
            <div className="flex justify-center">
                <form className="bg-white flex flex-col my-28 p-20 rounded-md">
                    <h3 className="text-3xl font-bold text-center -translate-y-8">Login</h3>
                    <input type="text" className="border p-2 mb-4 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2" name="username" placeholder="username" />
                    <input type="text" className="border p-2 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2" name="username" placeholder="password" />
                    <a className="text-sm text-blue-600 underline decoration-blue-500 hover:text-blue-800 hover:decoration-blue-800 mt-2" href="#">Forget your password?</a>                    
                    <button className="bg-rose-400 text-white p-1 rounded-md hover:bg-zinc-800 mt-6">Login</button>
                    <h3 className="text-center text-sm font-light mt-5">Or sign in using:</h3>
                    <ul className="flex justify-center space-x-4 mt-3">
                        <li className="bg-rose-400 rounded-full p-2 hover:bg-indigo-400 cursor-pointer hover:scale-105 duration-150">
                            <a href="#"><svg class="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>                            
                        </li>
                        <li className="bg-rose-400 rounded-full p-2 hover:bg-indigo-400 cursor-pointer hover:scale-105 duration-150">
                            <a href="#"><svg class="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
                        </li>
                        <li className="bg-rose-400 rounded-full p-2 hover:bg-indigo-400 cursor-pointer hover:scale-105 duration-150">
                            <a href="#"><svg class="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg></a>
                        </li>
                    </ul>   
                    <a className="text-base text-center text-blue-600 underline decoration-blue-500 hover:text-blue-800 hover:decoration-blue-800 translate-y-16" href="#">Sign up</a>             
                </form>
            </div>
        </div>
    )
}

export default Login;