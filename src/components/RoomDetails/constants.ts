import {
    anotherRooomImageDuluxe1,
  anotherRooomImageDuluxe2,
  duluxeRoomsImage1,
  duluxeRoomsImage2,
  duluxeRoomsImage3,
  duluxeRoomsImage4,
  duluxeRoomsImage5,
  deluxeHeritageRoomsImage1,
  deluxeHeritageRoomsImage2,
  deluxeHeritageRoomsImage3,
  deluxeHeritageRoomsImage4,
  deluxeHeritageRoomsImage5,
  classicRoomsImage1,
  classicRoomsImage2,
  classicRoomsImage3,
  classicRoomsImage4,
  classicRoomsImage5,

} from "./assets";

import sessionImage from "../../assets/imageFour.jpg";

interface SessionMorning {
  titile: string;
  subTitlestr: string;
  image: string;
}
interface AnotherRoom {
  titlestr: string;
  roomType: string;
  discription: string;
  image: string;
}
interface Room {
  imageOne: string;
  imageTwo: string;
  imageFive: string;
  imageThree: string;
  imageFour: string;
  sesstion: SessionMorning;
  anotherRoomOne: AnotherRoom;
  anotherRoomTwo: AnotherRoom;
}
interface RoomData {
  [key: string]: Room;
}

export const roomData: RoomData = {
  "deluxe-rooms": {
    imageOne: duluxeRoomsImage1,
    imageTwo: duluxeRoomsImage2,
    imageThree: duluxeRoomsImage3,
    imageFour: duluxeRoomsImage4,
    imageFive: duluxeRoomsImage5,
    sesstion: {
      titile: "Good Morning, Sunshine.",
      subTitlestr:
        "Wake up to the soothing melodies of chirping birds and the warm embrace of sunlight, surrounded by serene greenery and breathtaking views of Wayanad’s natural beauty.",
      image: sessionImage,
    },
    anotherRoomOne: {
      titlestr: "ESSENTIAL",
      roomType: "Deluxe Room",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: anotherRooomImageDuluxe1,
    },
    anotherRoomTwo: {
      titlestr: "ESSENTIAL",
      roomType: "Classic Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: anotherRooomImageDuluxe2,
    },
  },
  "deluxe-heritage-rooms": {
    imageOne: deluxeHeritageRoomsImage1,
    imageTwo: deluxeHeritageRoomsImage2,
    imageThree: deluxeHeritageRoomsImage3,
    imageFour: deluxeHeritageRoomsImage4,
    imageFive: deluxeHeritageRoomsImage5,
    sesstion: {
      titile: "Good Morning, Sunshine.",
      subTitlestr:
        "Wake up to the soothing melodies of chirping birds and the warm embrace of sunlight, surrounded by serene greenery and breathtaking views of Wayanad’s natural beauty.",
      image: sessionImage,
    },
    anotherRoomOne: {
      titlestr: "ESSENTIAL",
      roomType: "Deluxe Room",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: "",
    },
    anotherRoomTwo: {
      titlestr: "ESSENTIAL",
      roomType: "Classic Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: "",
    },
  },
  "classic-rooms": {
    imageOne: classicRoomsImage1,
    imageTwo: classicRoomsImage2,
    imageThree: classicRoomsImage3,
    imageFour: classicRoomsImage4,
    imageFive: classicRoomsImage5,
    sesstion: {
      titile: "Good Morning, Sunshine.",
      subTitlestr:
        "Wake up to the soothing melodies of chirping birds and the warm embrace of sunlight, surrounded by serene greenery and breathtaking views of Wayanad’s natural beauty.",
      image: sessionImage,
    },
    anotherRoomOne: {
      titlestr: "ESSENTIAL",
      roomType: "Deluxe Room",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: "",
    },
    anotherRoomTwo: {
      titlestr: "ESSENTIAL",
      roomType: "Classic Rooms",
      discription:
        "An economic escape in a lush atmosphere. This is affordable luxury with no compromises.",
      image: "",
    },
  },
};
