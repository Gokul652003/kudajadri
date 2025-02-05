import { TextField } from "../Contact/ContactPage";
import bookingImage from "../../assets/aboutHero.jpg"
import { Header } from "../Home/components/Header";

const Booking = () => {
  return (
    <div>
      <Header type="black" />
      <div className="flex">
        <div className="w-1/2">
          <div className="pl-20 py-8 pr-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-primary text-[44px] font-ivy">
                  Book Your Stay
                </span>
                <span className="text-secondary text-xl font-albertSans">
                  Fill the form to book your stay, and we’ll respond within 15
                  minutes. For queries, feedback, or suggestions, include
                  details in your mail. We’re here to assist!
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <TextField label="Full Name" />
                <TextField label="Email" />
                <TextField label="Phone Number" />
                <TextField label="Message" />
                <div className="pt-6">
                  <button className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans font-medium">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={bookingImage} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
