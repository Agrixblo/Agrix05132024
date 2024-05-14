function Footer() {
    return (
        <>
            <hr className='mt-[20px]'/>
            <div className="py-[20px] pl-[20px] pr-[50px] grid grid-cols-3 gap-4 sm:grid-cols-1 lg:grid-cols-3">
                <div className="">
                    <img  className='w-36' src="/Images/Component 2.png" alt="" />
                </div>
                <div className="links">
                    <ul className="ml-[40px]">
                        <li>Contact us</li>
                        <li>Marketplace</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="links2">
                    <ul className="ml-[40px]">
                        <li>Trade</li>
                        <li>Data gathering</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Footer