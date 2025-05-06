import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* <div className="text-2xl font-bold text-blue-600">MySite</div> */}
          <ul className="flex space-x-6 font-medium text-gray-700">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-blue-500">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image on Left */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/logo.png"
              alt="Home"
              className="rounded-xl shadow-lg max-w-full h-auto p-3"
              height={350}
              width={350}
            />
          </div>

          {/* Content on Right */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Anubhav Shikshan Evam Jan Kalyan Sewa Sansthan
            </h1>
            <p className="text-lg mb-6">
              Empowering communities through education, awareness, and welfare.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4"
      >
        <h2 className="text-4xl font-bold m-4">About Us</h2>
        <p className="text-lg mb-6 max-w-xl text-center">
          We provide the best solutions to help you grow your business online.
        </p>

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/about.jpeg"
              alt="Home"
              className="rounded-xl shadow-lg max-w-full h-auto p-3"
              height={300}
              width={300}
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-6">
              Founded with the belief that change begins with knowledge and
              service, Anubhav Shikshan Evam Jan Kalyan Sewa Sansthan is a
              non-profit organization dedicated to social development. Our
              programs are designed to address the needs of marginalized
              communities by offering access to basic education, skill
              development, women and child welfare, health camps, and community
              support initiatives. We work hand-in-hand with local volunteers,
              educators, and social workers to ensure that every effort brings
              meaningful impact.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 m-2">
          {/* Mission */}
          <div className="p-6 border-l-4 border-blue-500 bg-gray-50 shadow rounded-lg">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed">
              To empower individuals and uplift communities through accessible
              education, health awareness, and sustainable welfare programs that
              bring real change to people’s lives.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 border-l-4 border-purple-500 bg-gray-50 shadow rounded-lg">
            <h3 className="text-2xl font-semibold mb-3 text-purple-600">
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed">
              To build a self-reliant and educated society where every person
              has the opportunity to grow, contribute, and lead a life of
              dignity and purpose.
            </p>
          </div>
        </div>
      </section>

      <section
        id="support"
        className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4"
      >
        <h2 className="text-4xl font-bold mb-4">Support Our Work</h2>
        <p className="text-lg mb-6 max-w-xl text-center">
          You Can Help Us Make a Difference
        </p>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/img1.jpeg"
              alt="Home"
              className="rounded-xl shadow-lg max-w-full h-auto p-3"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-6">
              Your support can provide a child with education, a family with
              healthcare, and a woman with the skills to lead a self-reliant
              life. At Anubhav Shikshan Evam Jan Kalyan Sewa Sansthan, we
              believe that real change comes from community support.{" "}
              <strong>
                Make a donation today and be a part of our mission to educate,
                empower, and uplift.
              </strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
