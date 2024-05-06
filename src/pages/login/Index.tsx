import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";
import { Ripple } from "primereact/ripple";

const Login = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)",
        }}
      >
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3" />
              <h1 className="mb-3 font-bold text-5xl">
                Hi ? Selamat Datang di Laternak, Semoga Dapat Membantumu Menjadi
                Lebih Sukses{" "}
              </h1>
              <p className="pr-3">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  LaTernak
                </h3>
                <p className="text-gray-500">
                  Masukkan Username dan Juga Passwordmu!
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <FloatLabel>
                  <InputText
                    id="username"
                    className="w-96 focus:shadow-[0_0_0_0.1rem_#4CD07D]"
                  />
                  <label htmlFor="username">Username</label>
                </FloatLabel>
                <FloatLabel>
                  <Password
                    id="password"
                    toggleMask
                    feedback={false}
                    inputClassName="w-96 focus:shadow-[0_0_0_0.1rem_#4CD07D]"
                  />
                  <label htmlFor="password">Password</label>
                </FloatLabel>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 p-ripple"
                  >
                    Sign in
                    <Ripple />
                  </button>
                </div>
              </div>
              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>Copyright © 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
