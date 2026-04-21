
import Footer from './footer';

// Image Imports
import ImageYellowBox from '../assets/equiment3.png'; 
import ImageWhiteGraphic from '../assets/equiment4.png'; 
import IconScissors from '../assets/icon1.png'; 
import IconShieldFace from '../assets/icon2.png'; 
import IconNailPolish from '../assets/icon5.png'; 
import IconStar from '../assets/icon4.png'; 
import IconDiamond from '../assets/icon7.png'; 
import IconSparkles from '../assets/icon9.png'; 
import IconCare from '../assets/icon10.png'; 
import IconCleanPractices from '../assets/icon11.png'; 
import DrawnArrow from '../assets/icon6.png'; 

// "Why Choose Us" Imports
import WhyChooseIcon from '../assets/whychoose.png'; 
import WhyChooseImage from '../assets/equiment4.png'; 

// "Our Works" Imports
import WorkOne from '../assets/equiment4.png'; 
import WorkTwo from '../assets/equiment3.png'; 
import WorkThree from '../assets/equiment5.png'; 

const HomeTwo = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden ">

      
      {/* ================ INLINE STYLES FOR MARQUEE ================ */}
      <style>
        {`
          /* Translates perfectly from 0 to -50% for a seamless Right-to-Left loop */
          @keyframes slideLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-rl {
            display: flex;
            width: max-content;
            animation: slideLeft 25s linear infinite;
          }
          .animate-marquee-rl:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* ================= SECTION 1: Complete Beauty Care ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-20 pb-20 relative z-10">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-[4/3] xl:aspect-square bg-[#eaff5b] rounded-[2rem] overflow-hidden shadow-sm">
            <img 
              src={ImageYellowBox} 
              alt="Complete Beauty Care" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-12 right-0 hidden md:block pointer-events-none">
              <img src={DrawnArrow} alt="" className="w-36 h-36 object-contain" />
            </div>

            <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 tracking-[0.15em] uppercase mb-4">
              Across every skin and hair needs of yours
            </p>

            {/* Changed from font-bold to font-medium */}
            <h2 className="text-4xl md:text-[2.75rem] leading-[1.1] font-medium text-[#111111] tracking-tight mb-12">
              Complete Beauty Care
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconScissors} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#111111] mb-1 tracking-tight">Haircuts and styling</h3>
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed pr-2">
                  Shaped to suit your face and easy to maintain daily
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconShieldFace} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#111111] mb-1 tracking-tight">Threading and grooming</h3>
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed pr-2">
                  Clean, precise grooming for a neat and polished look
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconNailPolish} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#111111] mb-1 tracking-tight">Manicure and pedicure</h3>
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed pr-2">
                  Care that keeps your hands and feet clean and refreshed
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconStar} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#111111] mb-1 tracking-tight">Facial and bleach</h3>
                <p className="text-[14px] text-gray-500 font-medium leading-relaxed pr-2">
                  Skin care that improves tone, texture, and overall glow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: Piercing and Warts Removal ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-8 pb-20 relative z-10">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-[4/3] xl:aspect-square bg-[#f5f5f5] rounded-[2rem] overflow-hidden shadow-sm">
            <img 
              src={ImageWhiteGraphic} 
              alt="Piercing and Warts Removal" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 tracking-[0.15em] uppercase mb-4">
              To the new and confident you
            </p>

            {/* Changed from font-bold to font-medium */}
            <h2 className="text-4xl md:text-[2.75rem] leading-[1.1] font-medium text-[#111111] tracking-tight mb-12">
              Piercing and Warts Removal
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconDiamond} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <p className="text-[14px] font-medium text-[#111111] leading-relaxed pr-4">
                  Safe and hygienic ear and nose piercing
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconSparkles} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <p className="text-[14px] font-medium text-[#111111] leading-relaxed pr-4">
                  Quick, painless and careful warts removal procedures
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconCare} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <p className="text-[14px] font-medium text-[#111111] leading-relaxed pr-4">
                  Handled with proper care to avoid discomfort
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="mb-3 text-gray-800">
                  <img src={IconCleanPractices} alt="" className="w-[88px] h-[88px] object-contain" />
                </div>
                <p className="text-[14px] font-medium text-[#111111] leading-relaxed pr-4">
                  Suitable for all age groups with clean practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: Client Experience ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-24 pb-24 relative z-10">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          
          {/* Changed from font-bold to font-medium */}
          <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-medium text-[#111111] tracking-tight mb-8 relative">
            Client{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Experience</span>
              <span className="absolute bottom-[10%] left-[-4%] w-[108%] h-[40%] bg-[#dcfb82] -z-10 rounded-full -rotate-1"></span>
            </span>
          </h2>
          
          <p className="text-[15px] md:text-[17px] text-gray-500 font-medium leading-relaxed mb-4">
            Clients often mention the friendly approach, attention to detail, and the comfort they feel during services.
          </p>
          
          <p className="text-[15px] md:text-[17px] text-gray-500 font-medium leading-relaxed mb-10">
            Many return regularly because they trust the results and the consistency.
          </p>
          
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-[14px] text-[14px] font-semibold text-gray-800 hover:bg-gray-50 transition-colors shadow-sm">
            See all integrations <span className="ml-1">→</span>
          </button>

        </div>
      </section>

      {/* ================= SECTION 4: Why Choose Us ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-12 pb-32 relative z-10">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-8">
              <img
                src={WhyChooseIcon}
                alt="Squiggly line icon"
                className="w-26 h-auto object-contain"
              />
            </div>

            {/* Already font-medium */}
            <h2 className="text-4xl md:text-[3rem] font-medium text-[#415762] tracking-tight mb-10 uppercase">
              WHY CHOOSE US
            </h2>

            <div className="flex flex-col gap-8 text-[#415762]">
              <div>
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-1 text-[#415762]">
                  25 plus years of experience
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#415762] font-medium">
                  A long standing presence built on trust
                </p>
              </div>
              
              <div>
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-1 text-[#415762]">
                  Personalised approach
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#415762] font-medium">
                  Every service is adapted to your needs
                </p>
              </div>
              
              <div>
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-1 text-[#415762]">
                  Clean and comfortable space
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#415762] font-medium">
                  Maintained with proper hygiene
                </p>
              </div>
              
              <div>
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-1 text-[#415762]">
                  Trusted by clients
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#415762] font-medium">
                  Known for consistent and reliable results
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image Content + Contact Now Button */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="w-full aspect-[4/5] lg:aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden shadow-sm mt-10 lg:mt-0 mb-8">
              <img
                src={WhyChooseImage}
                alt="Portrait of a woman"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Contact Now Button with Monitor Icon */}
        <div className="w-full flex justify-center">
  <button className="bg-[#1c1c1e] hover:bg-black text-white text-[16px] font-medium px-8 py-4 rounded-2xl shadow-sm transition-transform hover:scale-105 flex items-center gap-3">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>

    Contact Now
  </button>
</div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: OUR WORKS ================= */}
      <section className="w-full bg-white flex flex-col pt-12 pb-20 relative z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full mb-8">
          {/* Changed from font-bold to font-medium */}
          <h2 className="text-3xl md:text-[2.5rem] font-medium text-[#111111] tracking-tight">
            Our Works
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="w-full relative overflow-hidden">
          <div className="animate-marquee-rl flex">
            
            {/* --- SET 1 --- */}
            <div className="flex shrink-0">
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                <img src={WorkOne} alt="Work 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                <img src={WorkTwo} alt="Work 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                <img src={WorkThree} alt="Work 3" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* --- SET 2 --- */}
            <div className="flex shrink-0">
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                <img src={WorkOne} alt="Work 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                <img src={WorkTwo} alt="Work 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                <img src={WorkThree} alt="Work 3" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: Booking CTA ================= */}
      <section className="w-full flex flex-col items-center pt-24 pb-32 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto bg-[#fafafa] rounded-[2rem] flex flex-col items-center text-center py-24 px-6 shadow-sm border border-gray-100">
          
          <div className="flex items-center gap-2 mb-8">
            <span className="w-3 h-3 bg-[#dcfb82] rounded-sm"></span>
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-500 tracking-[0.15em] uppercase">
              Experienced Expertise in Beauty Needs
            </span>
          </div>

          {/* Changed from font-bold to font-medium */}
          <h2 className="text-4xl md:text-[3.5rem] font-medium text-[#111111] tracking-tight mb-4 leading-tight">
            Your beauty deserves attention.
          </h2>
          {/* Changed from font-bold to font-medium */}
          <h3 className="text-3xl md:text-[2.75rem] font-medium text-gray-500 tracking-tight mb-8">
            Book your appointment today.
          </h3>

          <div className="flex items-center gap-2 mb-10 text-gray-600 font-medium text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            100% Customer Satisfaction Guaranteed
          </div>

  <button className="bg-[#1c1c1e] hover:bg-black text-white text-[16px] font-medium px-8 py-4 rounded-2xl shadow-sm transition-transform hover:scale-105 flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              Contact Now
            </button>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default HomeTwo;