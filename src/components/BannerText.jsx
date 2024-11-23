
const BannerText = ({title,subtitle}) => {
    return (
        <div className="flex flex-col justify-center gap-y-2 items-center text-white">
            <h1 className="text-xl lg:text-4xl text-center font-bold lg:w-7/12 lg:mx-auto mt-4 lg:mt-16">
                {title}
            </h1>
            <p className="text-sm lg:text-lg text-center lg:w-8/12 lg:mx-auto mt-2">
                {subtitle}
            </p>
            
        </div>
    );
};

export default BannerText;