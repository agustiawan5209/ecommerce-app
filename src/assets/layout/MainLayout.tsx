
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
          
      <main className="max-w-full mx-auto py-20 px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
