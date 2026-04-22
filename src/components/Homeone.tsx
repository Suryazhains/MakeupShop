
import Header from './Header';
import HomeTwo from './HomeTwo'; // Imported HomeTwo here

// Image Imports
import Boy from '../assets/ill.svg';
import HeroOne from '../assets/equiment4.png';
import HeroTwo from '../assets/equiment4.png';
import HeroThree from '../assets/equiment5.png';
import HomeImage from '../assets/equiment4.png';
import StarIcon from '../assets/star.png';

const HomeOne = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <Header />


      <section className="relative w-full bg-white flex flex-col items-center pt-28 pb-20 px-6 md:px-16 lg:px-24">

        {/* Floating Boy Illustration */}
        <div className="absolute left-4 md:left-10 lg:left-[3%] xl:left-[6%] top-[22rem] hidden lg:block z-20">
          <img
            src={Boy}
            alt="Illustrative boy character walking with flags"
            className="w-[15rem] h-auto object-contain"
          />
        </div>

        {/* Main Hero Content */}
        <div className="w-full max-w-[1400px] flex flex-col items-center text-center z-10">

          {/* Top Badge */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm mb-8">
            <span className="bg-[#E3FF8F] text-black text-[10px] font-medium px-1.5 py-0.5 rounded-md tracking-wide">
              NEW
            </span>
            <span className="text-xs font-medium text-gray-700">
              4.3★ Rated Beauty Parlor
            </span>
            <span className="text-gray-400 text-xs ml-1">→</span>
          </div>

          {/* ── Main Headline ── */}
          <h1 className="text-5xl md:text-[64px] lg:text-[72px] font-semibold text-[#16171d] tracking-[-0.04em] leading-[1.02] mb-6">
            Bridal{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 drop-shadow-[0_2px_0_rgba(0,0,0,0.02)]">
                Perfection.
              </span>

              {/* Exact green brush highlight */}
              <span className="absolute left-[-52%] bottom-[14%] w-[136%] h-[38%] bg-[#d9f97b] rounded-full -rotate-[1deg] blur-[0.2px] -z-10 shadow-[0_2px_8px_rgba(217,249,123,0.35)]"></span>
            </span>

            <br />

            <span className="drop-shadow-[0_2px_0_rgba(0,0,0,0.02)]">
              Clear Skin.
            </span>

            <br />
            {/* Line 3 — pink drawn loop around "Confident You." */}
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Confident You.</span>
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[160%] -z-10 pointer-events-none"
                viewBox="0 0 220 65"
                preserveAspectRatio="none"
                style={{ color: '#f472b6' }}
              >
                <path
                  d="M 28,50 C 8,28 195,8 210,32 C 222,52 25,68 15,44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>

          {/* Sub-description */}
          <p className="text-[#415762] text-[15px] md:text-[17px] max-w-xl mt-6 mb-10 leading-relaxed font-medium">
            Expert bridal makeup, laser hair removal, and hydra facials
            <br className="hidden md:block" />
            delivered with precision, care, and consistency in Villupuram.
          </p>

          {/* CTA Button */}
         <button
  onClick={() => {
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="bg-[#111111] hover:bg-black text-white text-[15px] font-medium px-8 py-3.5 rounded-[14px] shadow-sm transition-transform hover:scale-105 active:scale-95"
>
  Contact now
</button>
        </div>

        {/* Full-width Hero Image */}
        <div className="w-full max-w-[1440px] mt-20 bg-white rounded-3xl border border-gray-200 aspect-[16/9] shadow-sm overflow-hidden z-10 mx-auto">
          <img
            src={HomeImage}
            alt="Parlor showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ================= TRUST BANNER ================= */}
      <div className="w-full flex justify-center py-12 bg-white border-t border-gray-100">
        <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide text-center px-4">
          28+ years of expertise · Trusted by 10,000+ brides and 100,000+ customers
        </p>
      </div>


  <section className="w-full bg-white text-gray-900 flex flex-col items-center pt-10 pb-28 px-6 md:px-16 lg:px-24">

  {/* Star / Geometric Icon */}
  <div className="mb-6 flex justify-center">
    <img src={StarIcon} alt="Star Icon" className="w-20 h-20 object-contain" />
  </div>

  {/* Heading */}
  <h2 className="text-4xl md:text-[3rem] font-medium text-center mb-8 leading-[1.1] max-w-2xl tracking-tight">
    Everything you <br />
    need, all in{" "}
    <span className="relative inline-block whitespace-nowrap isolate">
      <span className="relative z-10">one place</span>

      <span
        className="absolute bottom-[8%] left-[2%] w-[94%] h-[55%] z-0 rounded-[10px] -rotate-1"
        style={{ backgroundColor: "#dcfb82" }}
      />
    </span>
  </h2>

  {/* Get Demo Button with Modern Computer Icon */}
  <button className="bg-[#111111] text-white px-5 py-2.5 rounded-xl text-sm font-medium mb-16 hover:bg-black transition-colors flex items-center gap-2 shadow-sm">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="12" rx="2.5"></rect>
      <path d="M8 20h8"></path>
      <path d="M12 16v4"></path>
    </svg>

    Get a demo
  </button>

  {/* Service Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 w-full max-w-[1400px] items-start">

    {/* Card 1 */}
    <div className="flex flex-col group h-full">
      <div className="bg-gray-100 rounded-[2rem] h-64 md:h-72 w-full mb-6 overflow-hidden">
        <img
          src={HeroOne}
          alt="Bridal Makeup"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <h3 className="text-xl font-bold tracking-tight text-[#415762]">
          Bridal Makeup
        </h3>

        <span
          className="text-black text-[10px] font-bold px-2 py-0.5 rounded-[10px] uppercase tracking-wide"
          style={{ backgroundColor: "#dcfb82" }}
        >
          Most trusted!
        </span>
      </div>

      <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-1">
        Your wedding day needs precision.
      </p>

      <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-5">
        We create bridal looks that suit your face, outfit, and occasion.
        The makeup stays for long hours and looks natural in person while
        also appearing perfect on camera.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col group h-full">
      <div className="bg-gray-100 rounded-[2rem] h-64 md:h-72 w-full mb-6 overflow-hidden">
        <img
          src={HeroTwo}
          alt="Laser Hair Removal"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold mb-2 tracking-tight text-[#415762]">
        Laser Hair Removal
      </h3>

      <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-1">
        Tired of waxing again and again?
      </p>

      <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-5">
        Our laser hair removal treatments help reduce hair growth over time.
        It also helps avoid ingrown hair and skin irritation. Safe,
        hygienic, and handled based on your skin type.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col group h-full">
      <div className="bg-gray-100 rounded-[2rem] h-64 md:h-72 w-full mb-6 overflow-hidden">
        <img
          src={HeroThree}
          alt="Hydra Facial"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold mb-2 tracking-tight text-[#415762]">
        Hydra Facial
      </h3>

      <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-1">
        Your skin needs more than basic care.
      </p>

      <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-5">
        Hydra facial helps clean pores deeply, hydrate the skin, and improve
        overall glow and texture. Ideal before events or as a regular
        skincare routine.
      </p>
    </div>

  </div>
</section>


      <HomeTwo />

    </div>
  );
};

export default HomeOne;