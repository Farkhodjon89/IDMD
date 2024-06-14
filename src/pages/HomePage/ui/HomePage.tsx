import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/shared/assets/img/myGov.svg";
import meningFikrimIcon from "@/shared/assets/img/meningfikrim.svg";
import emlemoIcon from "@/shared/assets/img/emlemofUzbekistan.svg";
import pledgeRegistryIcon from "@/shared/assets/img/pledge-registry.svg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function HomePage() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <div className="w-[784px] sm:max-w-full">
      <span className="text-4xl font-bold">{t("title")}</span>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between py-5 w-full border-b-4">
          <Link href="https://my.gov.uz/ru">
            <p className="inline-flex">
              {t("subtitle1")} <ArrowUpRight />
            </p>
          </Link>
          <Image src={logo} alt="logo" width={50} height={50} priority />
        </div>
        <div className="flex flex-row items-center justify-between py-5 w-full border-b-4">
          <Link href="https://meningfikrim.uz/uz">
            <p className="inline-flex">
              {t("subtitle2")} <ArrowUpRight />
            </p>
          </Link>
          <Image
            src={meningFikrimIcon}
            alt="logo"
            width="50"
            height="50"
            priority
          />
        </div>
        <div className="flex flex-row items-center justify-between py-5  w-full border-b-4">
          <Link href="https://pm.gov.uz/ru#/">
            <p className="inline-flex">
              {t("subtitle3")}
              <ArrowUpRight />
            </p>
          </Link>
          <Image src={emlemoIcon} alt="logo" width="50" height="50" priority />
        </div>
        <div className="flex flex-row items-center justify-between py-5  w-full border-b-4">
          <Link href="https://regulation.gov.uz/oz">
            <p>
              {t("subtitle4")} <ArrowUpRight />
            </p>
          </Link>
          <Image src={emlemoIcon} alt="logo" width="50" height="50" priority />
        </div>
        <div className="flex flex-row items-center justify-between py-5  w-full border-b-4">
          <Link href="https://meningfikrim.uz/uz">
            <p className="inline-flex">
              {t("subtitle5")} <ArrowUpRight />
            </p>
          </Link>
          <Image
            src={pledgeRegistryIcon}
            alt="logo"
            width="50"
            height="50"
            priority
          />
        </div>
      </div>
      <div className="mt-28 flex flex-col gap-2">
        <span className="text-4xl font-bold mb-4">{t("title2")}</span>
        <p className="font-semibold tracking-normal">{t("description")}</p>
        <br />
        <span className="text-gray-600">{t("description2")}</span>
        <br />
        <span className="text-gray-600">{t("description3")}</span>
        <br />
        <span className="text-gray-600">{t("description4")}</span>
        <Link href={`${locale}/about`}>
          <button
            className="my-8 border border-[#3B565D] font-semibold rounded-sm p-1 w-36 text-gray-800 hover:bg-[#3B565D] hover:text-white hover:transition ease-in-out duration-200"
            /*onclick="shrinkButton(this), loadPage('pages/about-page.html')"*/
          >
            {t("button")}
          </button>
        </Link>
      </div>
    </div>
  );
}
