import Form from "./components/Form";

const Login = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)",
      }}
    >
      <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>

      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <h1 className="mb-3 font-bold text-5xl">
              Selamat Datang di Laternak!
            </h1>
            <p className="pr-3">
              Mari bersama-sama membangun masa depan yang lebih baik. Mari kita
              mulai perjalanan kita menuju sukses bersama.
            </p>
          </div>
        </div>

        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">LaTernak</h3>
              <p className="text-gray-500">
                Masukkan Username dan Juga Passwordmu!
              </p>
            </div>

            <Form />

            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>Copyright © 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
