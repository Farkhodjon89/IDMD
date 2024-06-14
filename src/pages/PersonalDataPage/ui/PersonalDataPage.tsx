export const PersonalDataPage = () => {
  return (
    <div className="w-full sm:max-w-full">
      <div className="md:px-32 sm:px-0">
        <span className="text-4xl font-bold">Персональные данные</span>
        <div className="relative">
          <div className="flex flex-row gap-10 my-4">
            <button
              /*onclick="openTab(event, 'tab1')"*/ className="tab-btn active"
            >
              Профиль пользователя
            </button>
            <button /*onclick="openTab(event, 'tab2')"*/ className="tab-btn">
              Контактные данные
            </button>
            <button /*onclick="openTab(event, 'tab3')"*/ className="tab-btn">
              Настройки
            </button>
          </div>
          <div
            id="bottomBorder"
            className="absolute -bottom-2 left-0 bg-[#3B565D] transition-transform duration-300 ease-in-out origin-bottom"
          >
            <div className="h-1 w-full"></div>
          </div>
        </div>
      </div>
      <div className="my-2 bg-gray-100 md:px-32 sm:px-0 h-screen">
        <div id="tab1" className="tab-content p-4  flex items-start gap-8">
          <img
            src="assets/img/emlemOfUzbekistan.svg"
            alt="photo"
            width="175"
            height="225"
            className="rounded-md"
          />
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col gap-5">
              <article>
                <p>PINFL</p>
                <p className="font-semibold">32310996570018</p>
              </article>
              <article>
                <p>Name</p>
                <p className="font-semibold">Komil</p>
              </article>
              <article>
                <p>Family</p>
                <p className="font-semibold">Olimov</p>
              </article>
              <article>
                <p>First name</p>
                <p className="font-semibold">Shakar ogli</p>
              </article>
              <article>
                <p>Citizenship</p>
                <p className="font-semibold">Uzbekistan</p>
              </article>
              <article>
                <p>From were</p>
                <p className="font-semibold">Yakkassaray RUVD Tashkent</p>
              </article>
              <article>
                <p>Citizenship</p>
                <p className="font-semibold">Uzbekistan</p>
              </article>
              <article>
                <p>End date</p>
                <p className="font-semibold">2025-10-25</p>
              </article>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col gap-5">
              <article>
                <p>Серия и Номер паспорта</p>
                <p className="font-semibold">AB1436728</p>
              </article>
              <article>
                <p>Дата рождения</p>
                <p className="font-semibold">1999-10-23</p>
              </article>
              <article>
                <p>Пол</p>
                <p className="font-semibold">МУЖСКОЙ</p>
              </article>
              <article>
                <p>Национальность</p>
                <p className="font-semibold">УЗБЕК/УЗБЕЧКА</p>
              </article>
              <article>
                <p>Место рождения</p>
                <p className="font-semibold">TOSHKENT</p>
              </article>
              <article>
                <p>Дата выдачи</p>
                <p className="font-semibold">2015-10-26</p>
              </article>
              <article>
                <p>Citizenship</p>
                <p className="font-semibold">Uzbekistan</p>
              </article>
            </div>
          </div>
        </div>
        <div id="tab2" className="tab-content p-4  hidden">
          <p>Адрес по прописке</p>
          <p className="font-semibold">
            ЎЗБЕКИСТОН, ТОШКЕНТ ШАҲРИ, ТЎҚИМАЧИ МФЙ, САФДОШ КЎЧАСИ, УЙ 15
            ХОНАДОН 8
          </p>
          <button
            className="my-4 border border-[#3B565D] font-semibold rounded-sm p-1 w-36 text-gray-800 hover:bg-[#3B565D] hover:text-white hover:transition ease-in-out duration-200"
            /*onclick="shrinkButton(this)"*/
          >
            Обновить
          </button>
          <hr className="my-4"></hr>
          <div className="flex items-end gap-3">
            <div className="flex flex-col">
              <label htmlFor="email">электронная почта</label>
              <input
                id="email"
                type="text"
                className="border border-gray-300 rounded-sm p-1"
              />
            </div>
            <button
              className="border border-[#3B565D] font-semibold rounded-sm p-1 w-36 text-gray-800 hover:bg-[#3B565D] hover:text-white hover:transition ease-in-out duration-200"
              /*onclick="shrinkButton(this)"*/
            >
              Изменить
            </button>
          </div>
          <div className="flex items-end gap-3 my-4">
            <div className="flex flex-col">
              <label htmlFor="email">Мобильный телефон</label>
              <input
                id="email"
                type="text"
                className="border border-gray-300 rounded-sm p-1"
              />
            </div>
            <button
              className="border border-[#3B565D] font-semibold rounded-sm p-1 w-36 text-gray-800 hover:bg-[#3B565D] hover:text-white hover:transition ease-in-out duration-200"
              /*onclick="shrinkButton(this)"*/
            >
              Изменить
            </button>
          </div>
        </div>
      </div>
      <div id="tab3" className="tab-content p-4  hidden">
        <div className="flex items-end gap-3">
          <div className="flex flex-col">
            <label htmlFor="email">Логин</label>
            <input
              id="email"
              type="text"
              className="border border-gray-300 rounded-sm p-1"
            />
          </div>
          <button
            className="border border-[#3B565D] font-semibold rounded-sm p-1 w-36 text-gray-800 hover:bg-[#3B565D] hover:text-white hover:transition ease-in-out duration-200"
            /*onclick="shrinkButton(this)"*/
          >
            Изменить
          </button>
        </div>
        <hr className="my-4" />
        <p className="font-semibold py-4">Изменить пароль</p>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col">
            <label htmlFor="email">Логин</label>
            <input
              id="email"
              type="text"
              className="border border-gray-300 rounded-sm p-1"
            />
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col">
              <label htmlFor="email">New password</label>
              <input
                id="email"
                type="text"
                className="border border-gray-300 rounded-sm p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">New password repeater</label>
              <input
                id="email"
                type="text"
                className="border border-gray-300 rounded-sm p-1"
              />
            </div>
          </div>
        </div>
        <button
          className="border border-[#3B565D] font-semibold rounded-sm my-4 p-1 w-36 text-gray-800 hover:bg-[#3B565D] hover:text-white hover:transition ease-in-out duration-200"
          /*onclick="shrinkButton(this)"*/
        >
          Save button
        </button>
      </div>
    </div>
  );
};
