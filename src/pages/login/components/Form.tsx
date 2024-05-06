import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Ripple } from "primereact/ripple";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "@Shared/constant/interfaceAuth";
import { useMutation } from "@tanstack/react-query";
import { login } from "@Service/apiAuth";

const Form = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      localStorage.setItem("token", response.data.token);
    },
  });

  const onSubmit: SubmitHandler<IForm> = async (user) => {
    mutate(user);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-5"
    >
      <FloatLabel>
        <InputText
          id="username"
          className="w-96 focus:shadow-[0_0_0_0.1rem_#4CD07D]"
          {...register("username")}
        />
        <label htmlFor="username">Username</label>
      </FloatLabel>
      <FloatLabel>
        <Password
          id="password"
          toggleMask
          feedback={false}
          inputClassName="w-96 focus:shadow-[0_0_0_0.1rem_#4CD07D]"
          {...register("password")}
          onChange={(e) => setValue("password", e.target.value)}
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
    </form>
  );
};

export default Form;
