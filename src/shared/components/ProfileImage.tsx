import profile from "../../assets/profile.svg";

const ProfileImage = () => {
  return (
    <div className="h-full">
      <img className="h-full w-auto mx-auto" src={profile} alt="logo" />
    </div>
  );
};

export default ProfileImage;
