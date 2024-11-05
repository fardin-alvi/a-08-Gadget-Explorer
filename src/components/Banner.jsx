import BannerText from '../components/bannerText';

const Banner = () => {
    return (
        <div className="min-h-[300px] lg:min-h-[470px] bg-purple-700 relative rounded-bl-xl rounded-br-xl ">
            <BannerText title={' Upgrade Your Tech Accessorize with Gadget Heaven Accessories '} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} />
            <div>
                <img src="../assets/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;