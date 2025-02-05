import { roomData } from '../constants';
import mabileRoomImage from "../../../assets/RoomMbileImage.jpeg";

const Hero = () => {
  return (
    <>
    <div className="mobile:hidden sm:flex p-20  gap-2 justify-center">
      <div>
        <img src={roomData["deluxe-heritage-rooms"].imageOne} alt="roomImage" />
      </div>
      <div className="flex flex-col gap-2">
        <img src={roomData["deluxe-heritage-rooms"].imageTwo} alt="roomImage" />
        <img src={roomData["deluxe-heritage-rooms"].imageThree} alt="roomImage" />
      </div>
      <div className="flex flex-col gap-2">
        <img src={roomData["deluxe-heritage-rooms"].imageFour} alt="roomImage" />
        <img src={roomData["deluxe-heritage-rooms"].imageFive} alt="roomImage" />
      </div>
    </div>
    <div className='sm:hidden px-4 pb-8'>
      <img src={mabileRoomImage} alt="" className='rounded-[14px]'/>

    </div>
    </>
  );
}

export default Hero
