import mapImage from "../../../assets/mapImage.jpg"
const Direction = () => {
  return (
    <div className="sm:px-[12%] sm:py-32 flex flex-col gap-24 mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="uppercase text-primary tracking-[1.6px] font-albertSans">
          Direction
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <span className="block text-primary sm:text-[44px] mobile:text-[32px] font-ivy">
            Getting Here Made Easy
          </span>
          <p className="text-secondary sm:text-xl font-albertSans text-center">
            Easily accessible, our homestay in Kaniyambetta, Wayanad, is close
            to Kalpetta and Sultan Bathery, ensuring a hassle-free journey.
          </p>
        </div>
        <div>
          <button className="bg-primary px-6 py-3 rounded-full text-[#fff] font-albertSans">
            Get Direction
          </button>
        </div>
      </div>
      <div className="h-[418px] sm:block mobile:hidden flex justify-center">
        <img src={mapImage} alt="" />
      </div>
    </div>
  );
}

export default Direction
