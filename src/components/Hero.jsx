import "animate.css";
const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="text-center max-w-4xl px-6">
        <span className="hidden md:block lg:block">
          <a href="#" className="kill-link-style">
            <span className="inline-block rounded-md animate__animated xl:mr-6 animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl xl:text-3xl font-extrabold">
              DS
            </span>
          </a>
          <a
            href="#Overview"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay1 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
          >
            Overview
          </a>
          <a
            href="#Q1"
            className="inline-block animate__animated animate__fadeInDown kill-link-style delay2 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
          >
            Q1
          </a>
          <a
                        href="#Q2"

            className="inline-block animate__animated animate__fadeInDown kill-link-style delay3 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
          >
            Q2
          </a>
          <a
                        href="#Q3"

            className="inline-block animate__animated animate__fadeInDown kill-link-style delay4 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
          >
            Q3
          </a>
          <a
                        href="#Q4"

            className="inline-block animate__animated animate__fadeInDown kill-link-style delay5 ml-6 mr-3 duration-300 text-2xl xl:text-3xl cursor-pointer underline--magical font-extrabold"
          >
            Q4
          </a>
        </span>
        <img
          id="zach-image"
          src="/photo.jpeg"
          alt="Photo of Divaynshi Srivastava"
          className="cursor-pointer xl:mt-10 inline-block animate__animated animate__fadeIn delay2 border-gray-900 duration-300 ease hover:border-green-400 shadow-md border-8 h-80 w-80 md:w-96 md:h-96 rounded-full"
        />

        <h1 className="mt-10 text-3xl md:text-5xl font-extrabold animate__animated animate__fadeInUp delay3">
  Hey, I'm <span className="text-green-500">Divyanshi Srivastava</span>
</h1>

<p className="mt-6 text-lg md:text-xl animate__animated animate__fadeInUp delay4">
  Here, you can check out yearly performance. I try my best to create things with ❤
</p>
      </div>
    </section>
  );
};

export default Hero;
