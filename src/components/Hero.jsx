import "animate.css";

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="text-center max-w-5xl px-6">

        {/* Navigation */}
        <span className="hidden md:block lg:block">

          {/* DS (with border effect) */}
          <a href="" className="kill-link-style">
            <span
              className="
                inline-block
                rounded-md
                border-4
                border-gray-900
                text-gray-900
                select-none
                p-2
                text-2xl xl:text-3xl
                font-extrabold
                transition-all
                hover:border-green-400
              "
            >
              DS
            </span>
          </a>

          {/* Overview */}
          <a
            href="#Overview"
            className="
              inline-block
              ml-6 mr-3
              text-2xl xl:text-3xl
              font-extrabold
              cursor-pointer
              transition-colors
              hover:text-green-400
            "
          >
            Overview
          </a>

          {/* Q1 */}
          <a
            href="#Q1"
            className="
              inline-block
              ml-6 mr-3
              text-2xl xl:text-3xl
              font-extrabold
              cursor-pointer
              transition-colors
              hover:text-green-400
            "
          >
            Q1
          </a>

          {/* Q2 */}
          <a
            href="#Q2"
            className="
              inline-block
              ml-6 mr-3
              text-2xl xl:text-3xl
              font-extrabold
              cursor-pointer
              transition-colors
              hover:text-green-400
            "
          >
            Q2
          </a>

          {/* Q3 */}
          <a
            href="#Q3"
            className="
              inline-block
              ml-6 mr-3
              text-2xl xl:text-3xl
              font-extrabold
              cursor-pointer
              transition-colors
              hover:text-green-400
            "
          >
            Q3
          </a>

          {/* Q4 */}
          <a
            href="#Q4"
            className="
              inline-block
              ml-6 mr-3
              text-2xl xl:text-3xl
              font-extrabold
              cursor-pointer
              transition-colors
              hover:text-green-400
            "
          >
            Q4
          </a>

        </span>

        {/* Image */}
        <img
          src="/photo.jpeg"
          alt="Photo of Divyanshi Srivastava"
          className="
            cursor-pointer
            xl:mt-10
            inline-block
            border-8
            border-gray-900
            hover:border-green-400
            transition-all
            ease
            shadow-md
            h-80 w-80 md:w-96 md:h-96
            rounded-full
          "
        />

        {/* Heading */}
        <h1 className="mt-10 text-3xl md:text-5xl font-extrabold animate__animated animate__fadeInUp delay3">
          Hey, I'm{" "}
          <span className="text-green-500">
            Divyanshi Srivastava
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg md:text-xl animate__animated animate__fadeInUp delay4">
         Here you can explore my Yearly Performance highlights, reflecting my contributions and growth throughout the year.
        </p>

      </div>
    </section>
  );
};

export default Hero;