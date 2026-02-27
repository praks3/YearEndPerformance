const Quarter4 = () => {
  return (
    <section className="w-full" id="Q4">

      {/* ================= MAIN SECTION ================= */}
      <div className="w-full bg-gray-900 text-gray-50 py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16">
          Quarter 04 : January to March
        </h2>

        <div className="grid grid-cols-12 gap-8 items-stretch">

          {/* ================= CARD 1 ================= */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 flex">
            <div className="flex flex-col w-full h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="bg-gray-700 text-gray-200 p-6 flex-1">
                <ul className="list-disc list-inside space-y-2 text-left text-sm md:text-base m-0">

                    <li>
                    <span>Total Issues – </span>
                    <span className="text-green-400 font-semibold">
                      4 Normal {" , "}
                    </span>
<span className="text-blue-400 font-semibold">
                      1 Minor
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
                      {" "}3 PDS
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
                    <ul className="flex flex-wrap gap-x-6 gap-y-1 list-disc list-inside">
                      <li>Namo App Revamp</li>
                      <li>Parakram Diwas</li>
                      <li>Mann Ki Baat Quiz</li>                      <li>National Science Day</li>

                      <li>Mother Language Day & Moderation Portal</li>
                    </ul>
                  </li>
                  <li>
                    <span>Total Issues – </span>
                    <span className="text-orange-400 font-semibold">
                      3 Critical{" "} {" , "}
                    </span>
                    <span className="text-yellow-400 font-semibold">
                      4 Major{" "} {" , "}
                    </span>
                    <span className="text-green-400 font-semibold">
                      2 Normal
                    </span>
                  </li>

                  <li>
                    Total PDT Done –
                    <span className="font-semibold text-blue-300">
                      {" "}1 Half Day & 1 Full Day
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

                 

                  <li>JFS(JioFinance)</li>
<li><span className="font-semibold">
                       Orion – AI Hiring Platform
                    </span> - Assisted in content verification by comparing data between Excel sheets and Figma designs, and evaluated the top three AI platforms to identify key features.</li>
                  <li>
                    Total Issues –
                    <span className="text-orange-400 font-semibold">
                      {" "}2 Critical {" , "}
                    </span>
                    <span className="text-yellow-400 font-semibold">
                      {" "}10 Major {" , "}
                    </span>
                    <span className="text-green-400 font-semibold">
                      {" "}1 Normal
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
        <li>Monthly Review Website- Designed and implemented the login flow while establishing the backend project structure for the Monthly Review website. Managed sprint planning, defined system logic, delegated responsibilities, and supported the team by resolving queries.
</li>
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
        <li>SQL for non-programmers</li>
        <li>How to boost your productivity with AI tools</li>
        <li>Leveraging AI for Security Testing</li>
        <li>Devops Foundations</li>
      </ul>
    </div>
  </div>

</div>
      </div>

    </section>
  );
};

export default Quarter4;