
import logoImg from '../assets/icon1.png'; 

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { name: 'Email', icon: EmailIcon, url: 'mailto:reverenceac@gmail.com' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/spectraairconditioning' },
  ];

  return (
<footer className="w-full bg-[#050505] text-white pt-16 pb-8 px-6 lg:px-16 border-t border-[#2A2A2A]">
  <div className="w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col">
            <div className="flex items-start mb-6">
              <img 
                src={logoImg} 
                alt="Spectra Logo" 
                className="w-[180px] md:w-[280px] h-auto object-contain" 
              />
            </div>

            <p className="text-[#999999] text-[13px] leading-[22px] max-w-[280px] mb-8">
              For environments that can't afford failure, Spectra delivers HVAC systems that perform without pause.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={i} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-[#999999] hover:text-white transition-colors cursor-pointer"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col pt-1">
            <h4 className="text-[16px] font-semibold text-white mb-6">Contact Us</h4>
            
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex items-start gap-4 group">
                <div className="mt-0.5 text-[#999999] group-hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <a
                  href="tel:+919444500050"
                  className="text-[#999999] text-[14px] group-hover:text-white transition-colors cursor-pointer"
                >
                  +91 94445 00050
                </a>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-0.5 text-[#999999] group-hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <a
                  href="tel:+919363640050"
                  className="text-[#999999] text-[14px] group-hover:text-white transition-colors cursor-pointer"
                >
                  +91 93636 40050
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="mt-0.5 text-[#999999] group-hover:text-white transition-colors">
                <EmailIcon className="w-5 h-5" />
              </div>
              <a 
                href="mailto:airconspectra@gmail.com" 
                className="text-[#999999] text-[14px] group-hover:text-white transition-colors cursor-pointer"
              >
                airconspectra@gmail.com
              </a>
            </div>
          </div>

          {/* Column 3: Location Map */}
          <div className="flex flex-col pt-1">
            <h4 className="text-[16px] font-semibold text-white mb-6">Our Location</h4>
            <div className="w-full max-w-[344px] h-[100px] rounded-2xl overflow-hidden relative border border-[#2A2A2A] bg-[#1A1A1A]">
              <iframe 
                title="Spectra AC Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.840742137532!2d80.2104169750777!3d13.045814587276707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ec48074d09%3A0xc3910c273873495d!2sSpectra%20Air%20Conditioning!5e0!3m2!1sen!2sin!4v1709635000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-6 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#999999] text-[12px]">
            © 2026 Spectra. All rights reserved.
          </p>
          <p className="text-[#999999] text-[12px]">
            Designed by Zhians Private Limited
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;