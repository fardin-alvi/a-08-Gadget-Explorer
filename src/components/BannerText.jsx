
const BannerText = ({title,subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-xl lg:text-4xl text-center font-bold lg:w-7/12 lg:mx-auto mt-6 lg:mt-24">
                {title}
            </h1>
            <p className="text-sm lg:text-lg text-center lg:w-8/12 lg:mx-auto mt-3">
                {subtitle}
            </p>
            <button className="border text-purple-500 bg-white py-1 px-4 rounded-full mt-5 font-semibold">Shop Now</button>
            
        </div>
    );
};

export default BannerText;