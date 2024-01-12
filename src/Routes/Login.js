


function Login() {
    return (
        <div className="bg-zinc-800 h-screen">
            <div className="grid grid-cols-3">
                <form className="bg-gray-500">
                    <input type="text" className="border p-2  rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2" name="username" placeholder="username" />
                    <input type="text" className="border p-2  rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-2" name="username" placeholder="password" />
                </form>
            </div>
        </div>
    )
}

export default Login;