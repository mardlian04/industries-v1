import React from "react";

const ShopPages = () => {
  // Fungsi untuk mengirim pesan via WhatsApp
  const sendWhatsAppMessage = () => {
    // Nomor WhatsApp penerima
    const phoneNumber = "6285791635708";

    // Pesan yang akan dikirimkan
    const message = "Halo, saya ingin melakukan pemesanan.";

    // URL untuk mengirim pesan via WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${6285791635708}&text=${encodeURIComponent(
      message
    )}`;

    // Buka WhatsApp dengan URL yang telah dibuat
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div>
      <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between pt-20 sm:px-6 lg:px-8">
        <p className="text-center font-medium sm:text-left">
          Merchandise KELFAST FC telah rilis!
          <br className="sm:hidden" />
          Ayo Di beli!!!
        </p>

        <a
          className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="#"
        >
          Shop Now
        </a>
      </div>
      <header className="bg-gray-50 pt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome Back, Cah!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Let's write a new blog post! 🎉
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View post </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-indigo-600 px-5 py-3 text-white transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Merchandise </span>

                <svg
                  class="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Merchandise Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
              <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden sm:flex sm:gap-4">
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Availability </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              In Stock (5+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Pre Order (3+){" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="size-5 rounded border-gray-300"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Out of Stock (10+){" "}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                    <span className="text-sm font-medium"> Price </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0">
                    <div className="w-96 rounded border border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          The highest price is $600{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div className="hidden sm:block">
              <label htmlFor="SortBy" className="sr-only">
                SortBy
              </label>

              <select
                id="SortBy"
                className="h-10 rounded border-gray-300 text-sm"
              >
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
              <button
                onClick={sendWhatsAppMessage}
                className="bg-indigo-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Pesan Sekarang
              </button>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
              <button
                onClick={sendWhatsAppMessage}
                className="bg-indigo-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Pesan Sekarang
              </button>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
              <button
                onClick={sendWhatsAppMessage}
                className="bg-indigo-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Pesan Sekarang
              </button>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
              <button
                onClick={sendWhatsAppMessage}
                className="bg-indigo-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Pesan Sekarang
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ShopPages;
