import Icon from "@/app/icon.svg";
import SocialLinks from "./SocialLinks";

const PersonalInfo = () => {
  return (
    <div className="text-center sm:text-left">
      <div className="flex items-center justify-start gap-3 mb-2">
        <img
          src={Icon.src}
          alt="Ícone GB"
          className="h-8 w-8 lg:h-10 lg:w-10 relative z-10"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
          Gabriel Baptista
        </h1>
      </div>

      <p className="text-base sm:text-lg text-accent sm:mb-4">
        Full Stack Engineer | AI Engineer Enthusiast
      </p>
      <div className="hidden sm:block">
        <SocialLinks />
      </div>
    </div>
  );
};

export default PersonalInfo;
