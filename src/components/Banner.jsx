import BannerText from '../components/bannerText';
import bannerimg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="min-h-[300px] lg:min-h-[470px] bg-purple-700 relative rounded-bl-xl rounded-br-xl ">
                <BannerText title={' Upgrade Your Tech Accessorize with Gadget Heaven Accessories '} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
                <button className="border text-purple-500 bg-white py-1 px-4 rounded-full mt-5 font-semibold">Shop Now</button>
            </div>
            <div className='w-6/12 mx-auto relative -top-12 lg:-top-32 rounded-xl'>
                <img className=' rounded-xl' src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;