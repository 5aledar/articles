
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-[40px] px-[20px] bg-slate-500'>
            <div className='flex items-center gap-3'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDPkumkB1r805D3ETJ04mMiOC2hcrIXcZ8g&s' width={24} className='rounded-full ' />
                <p>Articles</p>
            </div>
        </div>
    )
}

export default Navbar