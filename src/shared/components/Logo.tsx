const Logo = () => {
  const src: string = "/logo.jpeg";

  return (
    <div>
      <img className="h-24 w-auto mx-auto" src={src} alt="logo" />
    </div>
  );
};

export default Logo;
