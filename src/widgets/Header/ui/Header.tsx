export const Header = () => {
  return (
    <header className="h-8 flex m-2 justify-end">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-1 mr-2">
          <a href="#" /*onclick="loadPage('pages/page2.html')"*/>
            <article>
              <span className="text-sm flex justify-end">900474602</span>
              <h3 className="font-bold">KOMIL OLIMOV</h3>
            </article>
          </a>
          <div className="w-[40px] h-[40px] rounded-3xl border bg-gray-400"></div>
        </div>
        <div className="relative flex justify-end mr-2">
          <div className="w-[40px] h-[40px] rounded-3xl border bg-[#3B565D] z-10 flex items-center justify-center text-white font-semibold text-xl">
            ?
          </div>
          <div className="absolute -top-2 -right-2 flex justify-center items-center">
            <div className="w-[55px] h-[55px] rounded-full bg-[#3B565D] animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
