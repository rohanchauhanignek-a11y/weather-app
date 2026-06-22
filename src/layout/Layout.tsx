import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="flex h-screen">
      {flag && (
        <div className="bg-[hsl(222.58deg_58.49%_10.39%)] w-1/4">
          <Sidebar />
        </div>
      )}

      <div className="bg-[hsl(222,45%,13%)] flex-1 p-4 overflow-y-scroll scrollbar-none">
        <Outlet context={{ flag, setFlag }} />
      </div>
    </div>
  );
};

export default Layout;