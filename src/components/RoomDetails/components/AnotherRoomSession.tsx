import { roomData } from "../constants";

const AnotherRoomSession = () => {
  return (
    <div className="sm:px-[6%] sm:py-32 flex sm:justify-between mobile:px-4 mobile:py-14 mobile:flex-col sm:flex-row ">
      <div className="sm:pb-0 mobile:pb-8">
        <span className="text-[#000] sm:text-[44px] mobile:text-[32px] font-ivy ">
          There's Room For Everyone
        </span>
      </div>
      <div className="flex gap-8 sm:flex-row mobile:flex-col">
        <div className="flex flex-col gap-8 sm:w-[412px] mobile:w-full">
          <div>
            <img src={roomData["deluxe-rooms"].anotherRoomOne.image} alt="" className="mobile:w-full"/>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#000] text-lg font-albertSans">
              {roomData["deluxe-rooms"].anotherRoomOne.titlestr}
            </span>
            <div className="flex flex-col gap-3">
              <span className="sm:text-4xl mobile:text-[28px] font-light text-primary font-ivy">
                {roomData["deluxe-rooms"].anotherRoomOne.roomType}
              </span>
              <span className="text-secondary font-albertSans text-lg">
                {roomData["deluxe-rooms"].anotherRoomOne.discription}
              </span>
            </div>
            <div>
              <button className="px-10 py-4 text-primary font-albertSans capitalize border border-primary rounded-full">
                See room
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:w-[412px]">
          <div>
            <img src={roomData["deluxe-rooms"].anotherRoomTwo.image} alt="" className="mobile:w-full"/>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#000] text-lg font-albertSans">
              {roomData["deluxe-rooms"].anotherRoomTwo.titlestr}
            </span>
            <span className="sm:text-4xl mobile:text-[28px] font-light text-primary font-ivy">
              {roomData["deluxe-rooms"].anotherRoomTwo.roomType}
            </span>
            <span className="text-secondary font-albertSans text-lg">
              {roomData["deluxe-rooms"].anotherRoomTwo.discription}
            </span>
            <div>
              <button className="px-10 py-4 text-primary font-albertSans capitalize border border-primary rounded-full">
                See room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherRoomSession;
