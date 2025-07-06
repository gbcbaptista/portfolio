import ProfilePicture from "./ProfilePicture";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Link from "next/link";

const FocusSection = () => {
  return (
    <div className="bg-card p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-center max-w-[550px] w-full border border-gray-700 space-y-8">
      <ProfilePicture />

      <CardHeader />

      <hr className="border-gray-700" />

      <CardBody />
    </div>
  );
};

export default FocusSection;
