import passport from '../public/swas160 gapson-NZ Passport-35x45 mm.jpg'

function Intro() {
  return (
    <section className="home relative z-10 ml-[280px] flex min-h-screen items-center text-black">
      {' '}
      {/* Added margin-left for space */}
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="home-info w-full p-4 md:w-3/5">
          <h3 className="hello mb-4 text-xl md:text-2xl">
            Hello, my name is{' '}
            <span className="name font-cursive text-2xl">Credu Gapson</span>
          </h3>
          <h3 className="my-profession mb-4 text-2xl md:text-3xl">
            I am a{' '}
            <span className="typing text-skin-color">
              Full Stack Web Developer
            </span>
          </h3>
          <p className="mb-12 font-serif text-lg text-gray-700">
            I am a Web Developer with extensive experience of one year. My
            expertise is to design and create websites and many more...
          </p>
          <a
            href="#contact"
            className="btn hire-me bg-skin-color rounded px-6 py-2 text-white"
          >
            Hire me
          </a>
        </div>
        <div className="home-image relative w-full p-4 md:w-2/5">
          <img
            src={passport}
            alt="Gapson"
            className="relative z-10 h-72 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro
