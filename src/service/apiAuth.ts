import axiosInstance from "./axios";
import { IForm } from "@Shared/constant/interfaceAuth";

export const login = async (user: IForm) => {
  const { data } = await axiosInstance.post(`auth/login`, user);
  return data;
};

export const validateToken = async () => {
  const data = await axiosInstance.get(`auth/validate-token`);
  return data.status;
};
