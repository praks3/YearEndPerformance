const Quarter3 = () => {
  return (
    <section className="w-full" id="Q3">

      {/* ================= MAIN SECTION ================= */}
      <div className="w-full bg-gray-900 text-gray-50 py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16">
          Quarter 03 : October to December
        </h2>

        <div className="grid grid-cols-12 gap-8 items-stretch">

          {/* ================= CARD 1 ================= */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex">
            <div className="flex flex-col w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="bg-gray-700 text-gray-200 p-6 flex-1">
                <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base m-0">
                  <li>
                    <span>Total Issues – </span>
                  
                    <span className="text-orange-400 font-semibold">
                      1 Critical{" "}
                    </span>
                    <span className="text-yellow-400 font-semibold">
                      2 Major{" "}
                    </span>
                    <span className="text-green-400 font-semibold">
                      7 Normal
                    </span>
                     <span className="text-blue-400 font-semibold">
                      1 Minor
                    </span>
                  </li>
                  <li>
                    Total PDT Done –
                    <span className="font-semibold text-blue-300">
                      {" "}2 Full Day
                    </span>
                  </li>
                  <li>
                    Total BCT / PDS –
                    <span className="font-semibold text-purple-300">
                      {" "}3 BCT & 1 PDS
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 text-center bg-gradient-to-r from-green-300 to-green-400 text-gray-900">
                <h3 className="text-3xl font-extrabold">
                  JioMeet / JioEvents
                </h3>
              </div>

            </div>
          </div>


          {/* ================= CARD 2 ================= */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex">
            <div className="flex flex-col w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="bg-gray-700 text-gray-200 p-6 flex-1">
                <ul className="list-disc list-inside text-left text-sm md:text-base m-0 space-y-3">

                  <li className="list-none">
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 list-disc list-inside">
                      <li> NAMO Website and App revamp</li>
                    </ul>
                  </li>

                  <li>
                    <span>Total Issues – </span>
                  
                    <span className="text-orange-400 font-semibold">
                      1 Critical{" "}
                    </span>
                    <span className="text-yellow-400 font-semibold">
                      2 Major{" "}
                    </span>
                    <span className="text-green-400 font-semibold">
                      1 Normal
                    </span>
                  </li>

                  <li>
                    Total PDT Done –
                    <span className="font-semibold text-blue-300">
                      {" "}1 Full Day
                    </span>
                  </li>

                </ul>
              </div>

              <div className="p-6 text-center bg-gradient-to-r from-purple-300 to-purple-400 text-gray-900">
                <h3 className="text-3xl font-extrabold">
                  Namo
                </h3>
              </div>

            </div>
          </div>


          {/* ================= CARD 3 ================= */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex">
            <div className="flex flex-col w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="bg-gray-700 text-gray-200 p-6 flex-1">
                <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base m-0">
                  <li>Diwali Selfie</li>
                  <li>Christmas decoration</li>
                  <li>
                    Total Issues –
                    <span className="text-green-400 font-semibold">
                      {" "}2 Normal
                    </span>
                  </li>
                  <li>
                    Total PDT Done –
                    <span className="font-semibold text-blue-300">
                      {" "}1 Full Day
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 text-center bg-gradient-to-r from-blue-300 to-blue-400 text-gray-900">
                <h3 className="text-3xl font-extrabold">
                  Extra Activities
                </h3>
              </div>

            </div>
          </div>

        </div>
      </div>
 <div
        id="other_task"
        className="w-full bg-gray-50 text-gray-900 py-20 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
          Other Initiatives
        </h2>

        {/* 2 Equal Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">

  {/* LEFT COLUMN — Other Tasks */}
  <div className="flex flex-col">
    <h2 className="text-4xl font-bold mb-6 text-center">
      Other Tasks
    </h2>

    <div className="bg-white hover:shadow-xl shadow-md p-8 border-4 border-gray-900 rounded-lg transition-all duration-300 hover:-translate-y-2 flex-grow">
      <ul className="list-disc list-inside space-y-4 font-bold text-lg text-left">
        <li>JioRooms Voice Talk</li>
        <li>JioGenie Feedbacks</li>
        <li>Generated Test Images using Postman</li>
        <li>Validated Gamma & CLAHE Backend Models</li>
        <li>Created Comparison Validation Report</li>
      </ul>
    </div>
  </div>

  {/* RIGHT COLUMN — Courses */}
  <div className="flex flex-col">
    <h2 className="text-4xl font-bold mb-6 text-center">
      Courses
    </h2>

    <div className="bg-white hover:shadow-xl shadow-md p-8 border-4 border-gray-900 rounded-lg transition-all duration-300 hover:-translate-y-2 flex-grow">
      <ul className="list-disc list-inside space-y-4 font-bold text-lg text-left">
        <li>Generative AI vs Traditional AI</li>
        <li>Chatgpt prompt engineering for developers project</li>
        <li>Getting started with Power BI</li>
        <li>Azure Devops for Beginners</li>
        <li>Networking Foundation Networking Basics</li>
      </ul>
    </div>
  </div>

</div>
      </div>

    </section>
  );
};

export default Quarter3;