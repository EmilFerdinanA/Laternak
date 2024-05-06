import Header from "@Shared/components/Header";
import Sidebar from "@Shared/components/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
