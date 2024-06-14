import { Header } from "@/widgets/Header";
import { SideBar } from "@/widgets/SideBar";
import { classNames } from "@/shared/lib/classNames/classNames";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row h-full">
      <SideBar className="sidebar" />
      <div className="w-full flex flex-col overflow-hidden">
        <Header />
        <main
          className={classNames("h-screen md:px-32  sm:px-0", {}, ["sidebar"])}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
