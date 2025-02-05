import { useState } from "react";
import imageOne from "../../../assets/imageOne.jpg";
import imageTwo from "../../../assets/imageTwo.jpg";
import imageThree from "../../../assets/imageThree.jpg";

const navItems = [
  { id: 1, label: "All" },
  { id: 2, label: "Heritage & Architecture" },
  { id: 3, label: "Nature & Serenity" },
  { id: 4, label: "Rooms & Interiors" },
];

const OurGallery = () => {
  const [navItem, setNavItem] = useState<number>(1);

  return (
    <div className="sm:py-32 sm:px-[12%] flex flex-col gap-[66px] mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="flex flex-col sm:flex-row">
        <h1 className="flex-1 text-primary font-ivy sm:text-[44px] mobile:text-[32px]">
          Our Gallery
        </h1>
        <p className="flex-1 text-secondary sm:text-xl font-albertSans">
          Explore images of our charming heritage accommodations, blending
          traditional Jain architecture with modern comforts for a unique stay.
          Enjoy serene views of lush paddy fields and unwind in our peaceful
          surroundings, perfect for relaxation after a day of exploring
          Wayanad’s natural beauty.
        </p>
      </div>
      <div className="flex justify-center sm:flex mobile:hidden">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            className={`px-3.5 py-2 cursor-pointer ${
              navItem === id
                ? "border-b border-primary text-primary"
                : "text-secondary"
            }`}
            onClick={() => setNavItem(id)}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[536px] mobile:hidden sm:block">
          <img
            src={imageOne}
            alt=""
            className="object-cover size-full rounded-3xl"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:h-[342px]">
          <img
            src={imageTwo}
            alt=""
            className=" h-full rounded-3xl flex-1 object-cover"
          />
          <img
            src={imageThree}
            alt=""
            className="h-full rounded-3xl flex-1 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
