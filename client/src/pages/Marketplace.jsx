import NavBar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
function Marketplace () {
    return (
        <>
            <NavBar/>
            <div className="flex justify-center items-center pt-[150px] flex-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="">
                    <h1 className='text-center text-[30px] font-medium mb-[40px] sm:text-[25px] lg:text-[30px]'>WHAT YOU NEED TO DO?</h1>
                </div>
                <div className="grid grid-cols-2 mb-[50px] w-full py-[30px] px-[50px] sm:grid-cols-1 sm:py-[10px] sm:px-[20px] lg:py-[30px] lg:px-[50px] lg:grid-cols-2">
                    <div className="flex justify-center items-center flex-col shadow-md w-[90%] sm:mb-[20px] sm:w-full lg:mb-0 lg:w-[90%]">
                        <img className='w-[25%]' src="/Images/soyo.png" alt="" />
                        <h2 className='text-[20px] font-medium mt-[10px] mb-[10px]'>Farmer or Researcher</h2>
                        <p className='text-[16px] w-[70%] mb-[20px] text-center sm:w-[90%] sm:text-[15px] lg:w-[70%] lg:text-[16px]'>Gather, store,track and collect biodiversity datas. leverage and egenerate food security and practices</p>
                        <button className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' type="submit"><a href="/signUp">Sign up</a></button>
                    </div>
                    <div className="flex justify-center items-center flex-col shadow-md w-[90%] sm:w-full lg:w-[90%]">
                        <img className='w-[25%]' src="/Images/sell.png" alt="" />
                        <h2 className='text-[20px] font-medium mt-[10px] mb-[10px]'>Trader</h2>
                        <p  className='text-[16px] w-[60%] mb-[20px] text-center sm:w-[90%] sm:text-[15px] lg:w-[70%] lg:text-[16px]'>Track, trade,manage and invest in agriculture products</p>
                        <button className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' type="submit"><a href="/login">Sign in</a></button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-[30px] ml-[50px] sm:grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <h1 className='text-[35px] font-semibold mb-[20px] sm:text-[30px] lg:text-[35px]'>Agrix finance</h1>
                    <p className='w-[70%] sm:w-full lg:w-[70%]'>trade and invest in  foods and agriculture product put you money to work</p>
                </div>
                <img className="w-[65%]" src="/Images/dd.png" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col mt-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-[35px] font-medium mb-[30px] sm:text-[30px] lg:text-[35px]'>YOU’RE IN CONTROL</h1>
                <p className='mb-[70px] text-center w-[40%] sm:w-[90%] lg:w-[40%]'>Funding agriculture, biodiversity and foods products and businesses with crypto coins and trade on them to earn</p>
            </div>
            <div className="flex justify-center items-center flex-col py-[40px] pl-[40px] pr-[20px] bg-[#F0BD07] sm:pl-[20px] lg:pl-[40px]" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <h2 className='text-center mb-[40px] text-[20px] font-medium w-[60%] sm:w-full lg:w-[60%]'>Take Advantage of market opportunities and get finance as a biodiversity business or a Investor</h2>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 lg:grid-cols-4">
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>1</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Indicative Quote</h3>
                        <p className='w-[100%]'>Funds your biodiversity business using blockchain and get indicative martket quote</p>
                    </div>
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>2</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Trade</h3>
                        <p>Let your business be in blockchain market and tokenize your business for investors to fund</p>
                    </div>
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>3</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Revenues</h3>
                        <p>Get revenues by allowing investors invest in your products using tokens</p>
                    </div>
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>4</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Market opportunities</h3>
                        <p>Let your biodiversity business be among ther top tier industry,gather data and new research to build and regenerate more.</p>
                    </div>
                </div>
                <button className='p-[10px] w-[15%] rounded-md text-white bg-[#4FCAFF] sm:w-[90%] lg:w-[15%]'>Get in touch</button>
            </div>
            <Footer/>
        </>
    )
}
export default Marketplace