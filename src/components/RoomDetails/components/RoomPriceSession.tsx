export const RoomPriceSession = () => {
  return (
    <div className="sm:px-20 sm:pb-32 flex mobile:flex-col sm:flex-row px-4">
      <div className="flex flex-col sm:gap-10 flex-1 mobile:gap-6 mobile:pb-8 sm:pb-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-primary font-ivy mobile:text-[32px] sm:text-[44px]">Deluxe Rooms</h1>
          <p className="text-secondary sm:text-xl">
            Deluxe rooms, which have been carefully chosen for their
            breathtaking scenic views and a wide range of amenities, are an
            affordable way to escape to a lush environment.
          </p>
        </div>
        <div className="flex flex-col sm:gap-12 mobile:gap-5">
          <h2 className="text-primary font-ivy sm:text-[32px] mobile:text-2xl">
            What this place offers
          </h2>
          <div className="flex gap-24 text-primary font-albertSans">
            <div className=" flex flex-col gap-3.5">
              <span>Free parking on premises</span>
              <span>WIFI</span>
              <span>Washine machine</span>
              <span>Dedicated workspace</span>
            </div>
            <div className="flex flex-col gap-3.5">
              <span>Free parking on premises</span>
              <span>WIFI</span>
              <span>Washine machine</span>
              <span>Dedicated workspace</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-6 sm:py-11 flex flex-col gap-5 sm:w-[358px]">
        <div className="flex flex-col gap-1">
          <h2 className="text-primary font-albertSans text-2xl font-medium">
            ₹3500 night
          </h2>
          <span className="text-secondary font-albertSans text-base">
            Rates are twin share basis.
          </span>
        </div>
        <div className="flex flex-col px-2 border-l border-primary">
          <span className="text-primary font-albertSans font-semibold">
            <span className="font-normal">Check-in:</span> 12:00 PM
          </span>
          <span className="text-primary font-albertSans font-semibold">
            <span className="font-normal">Check-out:</span>
            10:00 AM
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-primary font-albertSans text-lg">
            Cancellation Policy
          </h2>
          <div>
            <ul className="list-disc pl-5 space-y-2 text-secondary font-albertSans">
              <li>
                Reservations canceled 30 days prior to the date of arrival: 50%
                refund
              </li>
              <li>
                Reservations canceled 15 days or less before arrival: No refund
              </li>
              <li>
                For cancellations due to natural or other reasons, the advance
                payment will be retained for your next visit.
              </li>
            </ul>
          </div>
          <h1 className="text-primary font-albertSans">
            For Extra Person: ₹800/-
          </h1>
          <div>
            <ul className="list-disc pl-5 space-y-2 text-secondary font-albertSans">
              <li>Children aged 10 years and above: Considered as adults.</li>
              <li>
                Children aged 5–10 years: Chargeable as per the applicable
                rates.{" "}
              </li>
              
            </ul>
          </div>
          <div>
            <button className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
