import { useNavigate } from "react-router-dom";
import { IndividualRoomSession } from "./IndividualRoomSession"
import roomOne from "/src/assets/roomOne.jpg";
export const IndividualRooms = () => {
    const navigate=useNavigate()
  return (
    <div className="flex flex-col justify-center px-4 py-16 sm:px-[6%] sm:py-32 gap-6">
      <IndividualRoomSession
        subTitle="ESSENTIAL"
        title="Deluxe Rooms"
        discription="An economic escape in a lush atmosphere. This is affordable luxury with no compromises."
        image={roomOne}
        onClick={() => navigate("/rooms/1")}
      />
      <IndividualRoomSession
        subTitle="ESSENTIAL"
        title="Deluxe Rooms"
        discription="An economic escape in a lush atmosphere. This is affordable luxury with no compromises."
        image={roomOne}
        type="reverse"
        onClick={() => navigate("/rooms/2")}
      />
      <IndividualRoomSession
        subTitle="ESSENTIAL"
        title="Deluxe Rooms"
        discription="An economic escape in a lush atmosphere. This is affordable luxury with no compromises."
        image={roomOne}
        onClick={() => navigate("/rooms/3")}
      />
    </div>
  );
}

