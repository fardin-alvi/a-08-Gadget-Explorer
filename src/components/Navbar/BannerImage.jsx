import bannerimg from '../../assets/banner.jpg'
const BannerImage = () => {
    return (
        <div>
            <div className='w-6/12 mx-auto relative -top-12 lg:-top-32 rounded-xl'>
                <img className=' rounded-xl' src={bannerimg} alt="" />
            </div>
        </div>
    ); 
};

export default BannerImage;