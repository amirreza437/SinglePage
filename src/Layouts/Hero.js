import heroimage from './../Assets/images/heroimage.png'
import Header from './Header';


function Hero() {
    const style = {
        backgroundImage: `url(${heroimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }


    return (
        <div className='h-screen' style={style}>
            <div className='mt-60 ml-80 text-white'>
                <p className='text-8xl'>Ui Design</p>
                <p className='text-lg font-extralight ml-10'>Design your webApp with us</p>
                <button className='text-rose-400 outline outline-rose-400 outline-offset-4 hover:bg-rose-400 hover:text-white duration-300 ease-in-out rounded-lg ml-28 mt-4 px-1'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero;