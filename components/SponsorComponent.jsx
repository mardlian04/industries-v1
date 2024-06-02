import React from "react";
import sponsor1 from "../images/sponsor 1.png";
import sponsor2 from "../images/sponsor 2.png";

const SponsorComponent = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Sponsorship
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
              <div className="flex flex-col px-4 py-8 text-center">
                <img
                  src={sponsor1}
                  alt="Logo"
                  className="h-300 w-auto sm:h-200"
                />
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <img
                  src={sponsor2}
                  alt="Logo"
                  className="h-300 w-auto sm:h-200"
                />
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <img
                  src={sponsor1}
                  alt="Logo"
                  className="h-300 w-auto sm:h-200"
                />
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorComponent;
