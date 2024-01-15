


function Login() {
    return (
        <div className="bg-zinc-800 h-screen overflow-hidden">
            <h1 className="text-center text-5xl text-white translate-y-36">Lorem UI</h1>
            <div className="flex justify-center">
                <form className="bg-white flex flex-col space-y-5 my-44 px-10 py-20 rounded-md">
                    <input type="text" className="border p-2  rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2" name="username" placeholder="username" />
                    <input type="text" className="border p-2  rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2" name="username" placeholder="password" />
                    <a className="text-sm text-blue-600 underline decoration-blue-500 hover:text-blue-800 hover:decoration-blue-800" href="#">have you forget your password?</a>                    
                    <button className="bg-rose-400 text-white p-1 rounded-md hover:bg-zinc-800">Login</button>                    
                </form>
            </div>
        </div>
    )
}

export default Login;