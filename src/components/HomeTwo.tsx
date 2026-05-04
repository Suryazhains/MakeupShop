import Footer from './footer';

// Section 1 Image Imports
import ImageYellowBox from '../assets/beautycare.png'; 
import IconScissors from '../assets/Scissor.svg'; 
import IconShieldFace from '../assets/Nail-1.svg'; 
import IconNailPolish from '../assets/Nail.svg'; 
import IconStar from '../assets/Face.svg'; 

// Section 2 Image Imports (Piercing Section - Update filenames to match your assets)
import ImageWhiteGraphic from '../assets/piercing.png'; 
import IconSafe from '../assets/preserveicon2.png'; 
import IconQuick from '../assets/preserveicon1.png'; 
import IconCare from '../assets/preserveicon3.png'; 
import IconAge from '../assets/preserveicon4.png'; 

// "Why Choose Us" Imports
// import WhyChooseIcon from '../assets/whychoose.png'; 
import WhyChooseImage from '../assets/whychoosesection.png'; 

// "Our Works" Imports (13 Images)
import Work1 from '../assets/work1.png'; 
import Work2 from '../assets/work2.png'; 
import Work3 from '../assets/work3.png'; 
import Work4 from '../assets/work4.png'; 
import Work5 from '../assets/work5.png'; 
import Work6 from '../assets/work6.png'; 
import Work7 from '../assets/work7.png'; 
import Work8 from '../assets/work8.png'; 
import Work9 from '../assets/work9.png'; 
import Work10 from '../assets/work10.png'; 
import Work11 from '../assets/work11.png'; 
import Work12 from '../assets/work12.png'; 
import Work13 from '../assets/work13.png'; 
import Work14 from '../assets/work11.png'; 
import Work15 from '../assets/work12.png'; 
import Work16 from '../assets/work13.png'; 
const workImages = [
  Work1, Work2, Work3, Work4, Work5, Work6, 
  Work7, Work8, Work9, Work10, Work11, Work12, Work13,Work14,Work15,Work16
];

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
            animation: slideLeft 35s linear infinite; /* Slowed down slightly for more images */
          }
          .animate-marquee-rl:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* ================= SECTION 1: Complete Beauty Care ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-24 pb-12 relative z-10">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-4 xl:px-8">
          
          <div className="w-full lg:w-[48%] h-[450px] md:h-[550px] lg:h-[650px] bg-[#eaff5b] rounded-[2rem] overflow-hidden shadow-sm shrink-0">
            <img 
              src={ImageYellowBox} 
              alt="Complete Beauty Care" 
              className="w-full h-full object-cover" 
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </div>

          <div className="w-full lg:w-[52%] relative flex flex-col items-start text-left lg:pl-8 xl:pl-16 justify-center">
      

            {/* INCREASED CENTER GAP: mb-24 on mobile, mb-36 on desktop */}
            <div className="flex flex-col mb-24 lg:mb-36 w-full">
              <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 tracking-[0.15em] uppercase mb-3">
                Across every skin and hair needs of yours
              </p>
              <h2 className="text-4xl md:text-[2.5rem] leading-[1.1] font-medium text-[#111111] tracking-tight">
                Complete Beauty Care
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-12 w-full">
              <div className="flex flex-col items-start">
                <img src={IconScissors} alt="" className="-ml-1.5 w-7 h-7 md:w-12 md:h-12 object-contain object-left mb-4 opacity-90" loading="eager" decoding="sync" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">Haircuts and styling</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Shaped to suit your face and easy to maintain daily
                </p>
              </div>

              <div className="flex flex-col items-start">
                <img src={IconShieldFace} alt="" className="-ml-1.5 w-7 h-7 md:w-12 md:h-12 object-contain object-left mb-4 opacity-90" loading="eager" decoding="sync" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">Threading and grooming</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Clean, precise grooming for a neat and polished look
                </p>
              </div>

              <div className="flex flex-col items-start">
                <img src={IconNailPolish} alt="" className="-ml-1.5 w-7 h-7 md:w-12 md:h-12 object-contain object-left mb-4 opacity-90" loading="eager" decoding="sync" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">Manicure and pedicure</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Care that keeps your hands and feet clean and refreshed
                </p>
              </div>

              <div className="flex flex-col items-start">
                <img src={IconStar} alt="" className="-ml-1.5 w-7 h-7 md:w-12 md:h-12 object-contain object-left mb-4 opacity-90" loading="eager" decoding="sync" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">Facial and bleach</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Skin care that improves tone, texture, and overall glow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: Piercing and Warts Removal ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-10 pb-24 relative z-10">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 px-4 xl:px-8">
          
          <div className="w-full lg:w-[48%] h-[450px] md:h-[550px] lg:h-[650px] bg-[#f5f5f5] rounded-[2rem] overflow-hidden shadow-sm shrink-0">
            <img 
              src={ImageWhiteGraphic} 
              alt="Piercing and Warts Removal" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90" 
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-[52%] flex flex-col items-start text-left lg:pr-8 xl:pr-16 justify-center">
            
            {/* INCREASED CENTER GAP: mb-24 on mobile, mb-36 on desktop */}
            <div className="flex flex-col mb-24 lg:mb-36 w-full">
              <p className="text-[10px] md:text-[11px] font-semibold text-gray-400 tracking-[0.15em] uppercase mb-3">
                To the new and confident you
              </p>
              <h2 className="text-4xl md:text-[2.5rem] leading-[1.1] font-medium text-[#111111] tracking-tight">
                Piercing and Warts Removal
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-12 w-full">
              
              {/* Uses new separate icons imported specifically for this section */}
              <div className="flex flex-col items-start">
                <img src={IconSafe} alt="" className="-ml-1.5 w-7 h-7 md:w-8 md:h-8 object-contain object-left mb-4 opacity-90" loading="lazy" decoding="async" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">Safe & Hygienic</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Safe and hygienic ear and nose piercing
                </p>
              </div>

              <div className="flex flex-col items-start">
                <img src={IconQuick} alt="" className="-ml-1.5 w-7 h-7 md:w-8 md:h-8 object-contain object-left mb-4 opacity-90" loading="lazy" decoding="async" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">Quick & Painless</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Quick, painless and careful warts removal procedures
                </p>
              </div>

              <div className="flex flex-col items-start">
                <img src={IconCare} alt="" className="-ml-1.5 w-7 h-7 md:w-8 md:h-8 object-contain object-left mb-4 opacity-90" loading="lazy" decoding="async" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">Proper Care</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Handled with proper care to avoid discomfort
                </p>
              </div>

              <div className="flex flex-col items-start">
                <img src={IconAge} alt="" className="-ml-1.5 w-7 h-7 md:w-8 md:h-8 object-contain object-left mb-4 opacity-90" loading="lazy" decoding="async" />
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">All Age Groups</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed max-w-[200px]">
                  Suitable for all age groups with clean practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: Client Experience ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-24 pb-24 relative z-10 px-4">
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
          
          <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-medium text-[#111111] tracking-tight mb-8 relative">
            Client{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Experience</span>
              <span className="absolute bottom-[10%] left-[-4%] w-[108%] h-[40%] bg-[#dcfb82] -z-10 rounded-full -rotate-1"></span>
            </span>
          </h2>
          
          <p className="text-[15px] md:text-[17px] text-gray-500 font-medium leading-relaxed mb-4 max-w-[620px] mx-auto">
            Clients often mention the friendly approach, attention to detail, <br className="hidden md:block" />
            and the comfort they feel during services.
          </p>
          
          <p className="text-[15px] md:text-[17px] text-gray-500 font-medium leading-relaxed mb-10">
            Many return regularly because they trust the results and the consistency.
          </p>
          
          <button 
            onClick={() => {
              document.getElementById("footer")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="bg-[#1c1c1e] hover:bg-black text-white text-[16px] font-medium px-8 py-4 rounded-2xl shadow-sm transition-transform hover:scale-105 flex items-center justify-center gap-3"
          >
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
      </section>

      {/* ================= SECTION 4: Why Choose Us ================= */}
      <section className="w-full bg-white flex flex-col items-center pt-12 pb-32 relative z-10 px-4">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20 xl:px-8">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left lg:pr-8 xl:pr-16 justify-center">
            
            <div className="flex flex-col mb-12 lg:mb-16 w-full">
              {/* <div className="mb-6 flex justify-start w-full">
                <img
                  src={WhyChooseIcon}
                  alt="Squiggly line icon"
                  className="w-[80px] md:w-[104px] h-auto object-contain"
                />
              </div> */}
              <h2 className="text-4xl md:text-[3rem] font-medium text-[#415762] tracking-tight uppercase">
                WHY CHOOSE US
              </h2>
            </div>

            <div className="flex flex-col gap-y-8 text-[#415762] w-full">
              <div className="flex flex-col items-start">
                <h3 className="text-[16px] md:text-[18px] font-medium mb-1 text-[#415762]">
                  25 plus years of experience
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#415762] opacity-80 font-medium">
                  A long standing presence built on trust
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <h3 className="text-[16px] md:text-[18px] font-medium mb-1 text-[#415762]">
                  Personalised approach
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#415762] opacity-80 font-medium">
                  Every service is adapted to your needs
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <h3 className="text-[16px] md:text-[18px] font-medium mb-1 text-[#415762]">
                  Clean and comfortable space
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#415762] opacity-80 font-medium">
                  Maintained with proper hygiene
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <h3 className="text-[16px] md:text-[18px] font-medium mb-1 text-[#415762]">
                  Trusted by clients
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#415762] opacity-80 font-medium">
                  Known for consistent and reliable results
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image Content + Contact Now Button */}
          <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start shrink-0">
            <div className="w-full h-[450px] md:h-[550px] lg:h-[650px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-sm mb-12">
              <img
                src={WhyChooseImage}
                alt="Portrait of a woman"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="w-full flex justify-center lg:justify-start">
              <div className="w-full flex justify-center">
                <button
                  onClick={() => {
                    document.getElementById("footer")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="bg-[#1c1c1e] hover:bg-black text-white text-[16px] font-medium px-8 py-4 rounded-2xl shadow-sm transition-transform hover:scale-105 flex items-center justify-center gap-3"
                >
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

        </div>
      </section>

      {/* ================= SECTION 5: OUR WORKS ================= */}
      <section className="w-full bg-white flex flex-col pt-12 pb-20 relative z-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full mb-8 px-4 text-center lg:text-left">
          <h2 className="text-3xl md:text-[2.5rem] font-medium text-[#111111] tracking-tight">
            Our Works
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="w-full relative overflow-hidden">
          <div className="animate-marquee-rl flex">
            
            {/* --- SET 1 --- */}
            <div className="flex shrink-0">
              {workImages.map((img, idx) => (
                <div key={`set1-${idx}`} className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                  <img src={img} alt={`Work ${idx + 1}`} className="w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" />
                </div>
              ))}
            </div>

            {/* --- SET 2 --- */}
            <div className="flex shrink-0">
              {workImages.map((img, idx) => (
                <div key={`set2-${idx}`} className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] mr-6 rounded-[1.5rem] overflow-hidden">
                  <img src={img} alt={`Work ${idx + 1}`} className="w-full h-full object-cover" fetchPriority="high" loading="eager" decoding="async" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: Booking CTA ================= */}
      <section className="w-full flex flex-col items-center pt-24 pb-32 relative px-4">
        <div className="w-full max-w-[1440px] mx-auto relative py-24 text-center">

          {/* BACKGROUND LAYER WITH LINEAR MASK */}
          <div 
            className="absolute inset-0 z-0 rounded-[28px] border border-[#eeeeee] bg-[#fafafa]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)'
            }}
          >
            <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(#d9d9d9_0.8px,transparent_0.8px)] [background-size:18px_18px]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center px-6">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-3 h-3 bg-[#dcfb82] rounded-sm"></span>
              <span className="text-[10px] md:text-[11px] font-semibold text-gray-500 tracking-[0.15em] uppercase">
                Experienced Expertise ON Beauty Needs
              </span>
            </div>

            <h2 className="text-4xl md:text-[3.5rem] font-medium text-[#22242A] tracking-tight mb-4 leading-tight">
              Your beauty deserves attention.
            </h2>

            <h3 className="text-4xl md:text-[3rem] font-medium text-[#22242A] tracking-tight mb-8">
              Book your appointment today.
            </h3>

            <div className="flex items-center gap-2 mb-10 text-black font-normal text-sm">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              100% Customer Satisfaction Guaranteed
            </div>

            <button
              onClick={() => {
                document.getElementById("footer")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="bg-[#111111] hover:bg-black text-white text-[16px] font-medium px-8 py-4 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
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
      </section>

      <Footer />

    </div>
  );
};
 
export default HomeTwo;