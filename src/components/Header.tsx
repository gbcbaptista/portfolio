import PersonalInfo from "./PersonalInfo";

const Header = () => {
  const focusItems = [
    "Building end-to-end AI solutions at the intersection of software and machine learning",
    "Mastering MLOps and scalable AI architectures",
    "Creating optimized, production-grade solutions",
  ];

  return (
    <header className="bg-card border-b border-gray-700 sticky top-0 z-50 shadow-lg py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:py-6 lg:py-8">
          <div className="flex flex-row sm:items-center justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="flex-shrink-0 hidden sm:block">
              <img
                src="https://github.com/gbcbaptista.png"
                alt="Photo of Gabriel Baptista"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-accent"
              />
            </div>
            <PersonalInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
