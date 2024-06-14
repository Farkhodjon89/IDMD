import securityImg from "@/shared/assets/img/icon-about-security.svg";
import aboutImg from "@/shared/assets/img/about_ru.svg";
import aboutIntegrationIcon from "@/shared/assets/img/icon-about-integration.svg";
import aboutSystemIcon from "@/shared/assets/img/icon-about-system.svg";
import aboutAppsIcon from "@/shared/assets/img/icon-about-apps.svg";
import Image from "next/image";

export const AboutPage = () => {
  return (
    <div className="w-[784px]">
      <div className="flex flex-col gap-2">
        <span className="text-4xl font-bold mb-4">Что такое OneID?</span>
        <article>
          <p className="font-semibold tracking-normal text-gray-600">
            Единая система идентификации One ID предназначена для легкого
            доступа всех пользователей к различным веб-сайтам и порталам органов
            государственного и хозяйственного управления, органов
            государственной власти на местах и коммерческих организаций.
          </p>
          <br />
          <p className="text-gray-600">
            ЕСИ One ID предоставляет возможность веб-сайтам идентифицировать
            пользователей для оказания спектра услуг. Для этого пользователи
            должны заранее зарегистрировать в ЕСИ One ID свои персональные
            данные включая логин, пароль, Ф.И.О., ПИНФЛ и так далее.
          </p>
          <br />
          <p className="text-gray-600">
            Для того чтобы войти на веб-сайт пользователь должен ввести логин и
            пароль от своей учетной записи в ЕСИ One ID. После этого система
            осуществит проверку соответствия введенных данных и вернет результат
            аутентификации вместе с идентификатором пользователя.
          </p>
          <br />
          <p className="text-gray-600">
            ЕСИ One ID также предоставляет возможность веб-сайтам реализовать
            дополнительную аутентификацию своих пользователей при помощи
            одноразового пароля и электронной цифровой подписи. Для этого
            необходимо указать в параметрах запроса предпочитаемый вид
            аутентификации.
          </p>
        </article>
        <div className="mt-20">
          <Image
            width={630}
            height={420}
            priority
            src={aboutImg}
            alt="AboutImage"
          />
        </div>
        <div className="w-full mt-20 flex flex-row gap-8">
          <div className="flex flex-col gap-16">
            <div className="w-full">
              <Image
                width={70}
                height={70}
                priority
                src={securityImg}
                alt="SecurityImage"
              />
              <article>
                <p className="font-semibold text-lg text-wrap w-1/2 mb-4">
                  Безопасность и подлинность
                </p>
                <span className="text-sm text-gray-600">
                  Для подтверждения личной подлинности в Единой системе
                  идентификации пользователю необходимо предъявить электронную
                  цифровую подпись. Таким образом обеспечивается соответствие
                  реального человека - пользователю в интернете. Это позволяет
                  оказывать наиболее продвинутые государственные услуги онлайн.
                  Кроме того, за счет интеграции с центральными базами данных
                  физических и юридических лиц, нет необходимости заполнять все
                  свои персональные данные - актуальная информация загружается
                  автоматически и своевременно обновляется (например, при
                  изменении фамилии или адреса прописки).
                </span>
              </article>
            </div>
            <div className="w-full">
              <Image
                width={70}
                height={70}
                priority
                src={aboutIntegrationIcon}
                alt="AboutIntergration"
              />
              <article>
                <p className="font-semibold text-lg text-wrap w-1/2 mb-4">
                  Идентификация юридических лиц
                </p>
                <span className="text-sm text-gray-600">
                  Если вы руководитель организации (компании),
                  зарегистрировавшись как физическое лицо, в своем кабинете вы
                  можете добавить вашу организацию. Для этого необходимо
                  предъявить ЭЦП, полученное на имя руководителя организации, в
                  своем кабинете в системе One ID. Добавив юридическое лицо вы
                  сможете делегировать свои полномочия другим пользователям
                  (вашим сотрудникам) для использования государственных услуг от
                  имени вашей организации.
                </span>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <div className="w-full">
              <Image
                src={aboutSystemIcon}
                priority
                width={70}
                height={70}
                alt="AboutSystem"
              />
              <article>
                <p className="font-semibold text-lg text-wrap mb-4 ">
                  Одна учетная запись - все системы электронного правительства
                </p>
                <span className="text-sm text-gray-600">
                  Интеграция One ID с системами э-правительства позволяет
                  использовать одну учетную запись для получения доступа ко всем
                  соответствующим ресурсам. Вы можете использовать все службы и
                  сервисы, используя ваш аккаунт One ID.
                </span>
              </article>
            </div>
            <div className="w-full">
              <Image
                src={aboutAppsIcon}
                priority
                width={70}
                height={70}
                alt="AboutApps"
              />
              <article>
                <p className="font-semibold text-lg text-wrap mb-4 w-1/2">
                  Интеграция с другими сайтами
                </p>
                <span className="text-sm text-gray-600">
                  Если вы владелец веб-сайта и хотите подлинно идентифицировать
                  пользователя для оказания каких-либо услуг (банковские услуги,
                  электронная коммерция и т.п.), то OneID - это легитимный и
                  удобный способ. Единая система идентификации закреплена
                  законодательно. В соответствии с Положением о единой системе
                  идентификации пользователей электронного правительства,
                  утвержденного постановлением Кабинета Министров от 17 декабря
                  2015 года № 365, полученные от Единой системы идентификации
                  сведения о пользователях являются достоверными.
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
