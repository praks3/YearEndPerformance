const Quarter2 = () => {
  return (
    <section className="w-full" id="Q2">

      {/* ================= MAIN SECTION ================= */}
      <div className="w-full bg-gray-900 text-gray-50 py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16">
          Quarter 02 : July to September
        </h2>

        <div className="grid grid-cols-12 gap-8 items-stretch">

          {/* ================= CARD 1 ================= */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex">
            <div className="flex flex-col w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="bg-gray-700 text-gray-200 p-6 flex-1">

                
                <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base m-0">
                   <li>
                    <span>Total Issues – </span>
                    <span className="text-yellow-400 font-semibold">
                      2 Major{" "}
                    </span>
                   
                  </li>
                  <li>
                    Total PDT Done –
                    <span className="font-semibold text-blue-300">
                      {" "}1 Half Day & 1 Full Day
                    </span>
                  </li>
                  <li>
                    Total BCT / PDS –
                    <span className="font-semibold text-purple-300">
                      {" "}2 BCT & 1 PDS
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
                      <li>Birthday 2025 or SEVA PARV, Admin Portal and it’s Moderation</li>
                    </ul>
                  </li>
                  <li>
                    <span>Total Issues – </span>
                  
                    <span className="text-orange-400 font-semibold">
                      2 Critical{" "}
                    </span>
                    <span className="text-yellow-400 font-semibold">
                      10 Major{" "}
                    </span>
                    <span className="text-green-400 font-semibold">
                      1 Normal
                    </span>
                  </li>

                  <li>
                    Total PDT Done –
                    <span className="font-semibold text-blue-300">
                      {" "}2 Half Day & 6 Full Day
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
                  <li>PeopleFirst (Web & App)</li>
                  <li>
                    Total Issues –
                    <span className="text-yellow-400 font-semibold">
                      {" "}1 Major
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
       <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
  Other Task
</h2>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            
              <div className="cursor-pointer bg-white hover:shadow-xl shadow-md p-6 border-4 border-gray-900 rounded-lg transition-all duration-300 hover:-translate-y-2 text-center">
               
                <p className="mt-2 font-bold text-xl">
JioRooms Voice Talk, JioGenie feedbacks
                </p>
              </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            
              <div className="cursor-pointer bg-white hover:shadow-xl shadow-md p-6 border-4 border-gray-900 rounded-lg transition-all duration-300 hover:-translate-y-2 text-center">
                 <p className="mt-2 font-bold text-xl">
Generated test images using Postman
                </p>
                <p className="mt-2 font-bold text-xl">
Validated Gamma & CLAHE backend image models
                </p>
                 <p className="mt-2 font-bold text-xl">
Created comparison validation report
                </p>
              </div>
        </div>
        </div>
      </div>


    </section>
  );
};

export default Quarter2;