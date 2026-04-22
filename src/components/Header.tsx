
import ImageOne from '../assets/hero.png';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-transparent">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center cursor-pointer">
          <img
            src={ImageOne}
            alt="Logo"
            className="h-8 object-contain"
          />
        </div>

        {/* Right: Contact Button */}
        <div className="flex items-center ml-auto">
        <button
  onClick={() => {
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="bg-[#111111] hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
>
  Contact
</button>
        </div>

      </div>
    </header>
  );
};

export default Header;