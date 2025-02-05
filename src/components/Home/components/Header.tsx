import { NavLink, useNavigate } from "react-router-dom";
import kudajadrilogo from "../../../assets/kudajadriLogo.svg";
import kudajadriDarkLogo from "../../../assets/kudajadriDarkLogo.svg";
import menuIcon from "/src/assets/menuIconHeader.svg";
import logoIcon from "/src/assets/homeMobileHeader.svg";
import whatAppIcon from "/src/assets/whatappHeader.svg";
import whatAppBlackIcon from "/src/assets/KudajadriMobileWhatapp.svg";
import HomeBlackIcon from "/home/admn/kudajadri/src/assets/kudajadriHomeMobile.svg";
import MenuBlackIcon from "/home/admn/kudajadri/src/assets/KudajadriMobileMenu.svg";
interface HeaderProps {
  type?: "white" | "black";
}
export const Header = ({ type = "white" }: HeaderProps) => {
  return (
    <>
      <div className="sm:py-6 flex gap-24 justify-center items-end mobile:hidden sm:flex">
        <NavLink
          to="/about"
          className={`px-4 py-2 ${
            type === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          About Us
        </NavLink>
        <NavLink
          to="/booking"
          className={`px-4 py-2 ${
            type === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Facilities
        </NavLink>
        <NavLink to="/">
          <div>
            {type === "white" ? (
              <img src={kudajadrilogo} alt="" />
            ) : (
              <img src={kudajadriDarkLogo} alt="" />
            )}
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={`px-4 py-2 ${
            type === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={`px-4 py-2 ${
            type === "white" ? "text-[#FFF]" : "text-primary"
          } font-albertSans`}
        >
          Contact Us
        </NavLink>
      </div>
      <PhoneHeader type={type}/>
    </>
  );
};

const PhoneHeader = ({ type }: { type?: "white" | "black" }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-4 sm:hidden">
      <div>
        {type === "black" ? (
          <img src={MenuBlackIcon} alt="" />
        ) : (
          <img src={menuIcon} alt="" />
        )}
      </div>
      <div>
        {type === "black" ? (
          <img src={HomeBlackIcon} alt="" onClick={() => navigate("/")} />
        ) : (
          <img src={logoIcon} alt="" onClick={() => navigate("/")} />
        )}
      </div>
      <div>
        {type === "black" ? (
          <img src={whatAppBlackIcon} alt="" />
        ) : (
          <img src={whatAppIcon} alt="" />
        )}
      </div>
    </div>
  );
};
