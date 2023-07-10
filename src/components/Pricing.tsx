import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { title } = pricing;
  // const [firstPlan, secondPlan, thirdPlan] = items;

  // Function to navigate to Google Maps with the given address
  const navigateToGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/Your+Address+Here');
  };

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        {/* Address */}
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
            onClick={navigateToGoogleMaps} // Navigate to Google Maps on click
            style={{ cursor: 'pointer' }} // Change cursor to pointer
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                Plus Health Care
              </div>
              <ul className={`w-full text-center text-sm`}>
                <li className={`border-b py-4`}>
                  Site No: 19, Thanthai Periyar Nagar
                </li>
                <li className={`border-b py-4`}>
                  Sowripalayam, Near G.V. Residency
                </li>

                <li className={`border-b py-4`}>Coimbatore - 641028</li>
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                Click to open in Google Maps
              </div>
            </div>
          </div>
        </div>
        {/* Other plans */}
      </div>
    </section>
  );
};

export default Pricing;
