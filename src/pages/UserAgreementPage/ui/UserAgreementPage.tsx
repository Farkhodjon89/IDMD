import { useTranslations } from "next-intl";

export const UserAgreementPage = () => {
  const t = useTranslations("UserAgreement");

  return (
    <div className="w-[920px] flex flex-col gap-5 pb-16 sm:max-w-full">
      <span className="text-4xl font-bold">{t("title")}</span>
      <article className="text-gray-500">
        <p>{t("description")}</p>
        <p className="my-4">{t("termsText")}</p>
      </article>
      <article>
        <h4 className="font-bold">{t("Terms and Definitions.title")}</h4>
        <p className="text-gray-500">{t("Terms and Definitions.text")}</p>
      </article>
      <article className="flex flex-col gap-8">
        <p>
          <strong>{t("Terms and Definitions.strongText")}</strong>
          <span className="text-gray-500">
            {t("Terms and Definitions.subtitle1")}
          </span>
        </p>
        <p>
          <strong>{t("Terms and Definitions.strongText2")}</strong>
          <span className="text-gray-500">
            {t("Terms and Definitions.subtitle2")}
          </span>
        </p>
        <p>
          <strong>{t("Terms and Definitions.strongText3")}</strong>
          <span className="text-gray-500">
            {t("Terms and Definitions.subtitle3")}
          </span>
        </p>
        <p>
          <strong>{t("Terms and Definitions.strongText4")}</strong>
          <span className="text-gray-500">
            {t("Terms and Definitions.subtitle4")}
          </span>
        </p>
        <p>
          <strong>{t("Terms and Definitions.strongText5")}</strong>
          <span className="text-gray-500">
            {t("Terms and Definitions.subtitle5")}
          </span>
        </p>
        <p>
          <strong>{t("Terms and Definitions.strongText6")}</strong>
          <span className="text-gray-500">
            {t("Terms and Definitions.subtitle6")}
          </span>
        </p>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">{t("Subject of the Agreement.title")}</h4>
        {/* <p className="text-gray-500">
          В настоящем Соглашении применяются следующие термины и их определения:
        </p> */}
        <p>
          <span className="text-gray-500">
            {t("Subject of the Agreement.subtitle1")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Subject of the Agreement.subtitle2")}
          </span>
        </p>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">
          {t("Procedure for Conclusion of the Agreement.title")}
        </h4>
        {/* <p className="text-gray-500">
          В настоящем Соглашении применяются следующие термины и их определения:
        </p> */}
        <p>
          <span className="text-gray-500">
            {t("Procedure for Conclusion of the Agreement.subtitle1")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Procedure for Conclusion of the Agreement.subtitle2")}
          </span>
        </p>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">
          {t("Terms of Registration in the UIS.title")}
        </h4>
        <p className="text-gray-500">
          {t("Terms of Registration in the UIS.subtitle1")}
        </p>
        <ul className="list-disc text-gray-500">
          <li>
            {t("Terms of Registration in the UIS.Biometric passport data")}
          </li>
          <li>{t("Terms of Registration in the UIS.Phone number")}</li>
          <li>{t("Terms of Registration in the UIS.Email address")}</li>
        </ul>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.text")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.text2")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.subtitle2")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.subtitle3")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.text5")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.subtitle4")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.subtitle5")}
          </span>
        </p>
        <p>
          <span className="text-gray-500">
            {t("Terms of Registration in the UIS.subtitle6")}
          </span>
        </p>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">
          {t("Rights and Obligations of the User.title")}
        </h4>
        <p className="text-gray-500">
          {t("Rights and Obligations of the User.subtitle1")}
        </p>
        <ul className="list-disc text-gray-500">
          <li>{t("Rights and Obligations of the User.step1")}</li>
          <li>{t("Rights and Obligations of the User.step2")}</li>
          <li>{t("Rights and Obligations of the User.step3")}</li>
        </ul>
        <p className="text-gray-500">
          {t("Rights and Obligations of the User.subtitle2")}
        </p>
        <ul className="list-disc text-gray-500">
          <li>{t("Rights and Obligations of the User.step4")}</li>
          <li>{t("Rights and Obligations of the User.step5")}</li>
          <li>{t("Rights and Obligations of the User.step6")}</li>
          <li>{t("Rights and Obligations of the User.step7")}</li>
          <li>{t("Rights and Obligations of the User.step8")}</li>
        </ul>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">
          {t("Rights and Obligations of the Center.title")}
        </h4>
        <p className="text-gray-500">
          {t("Rights and Obligations of the Center.subtitle1")}
        </p>
        <ul className="list-disc text-gray-500">
          <li>{t("Rights and Obligations of the Center.step1")}</li>
          <li>{t("Rights and Obligations of the Center.step2")}</li>
          <li>{t("Rights and Obligations of the Center.step3")}</li>
          <li>{t("Rights and Obligations of the Center.step4")}</li>
          <li>{t("Rights and Obligations of the Center.step5")}</li>
          <li>{t("Rights and Obligations of the Center.step6")}</li>
        </ul>
        <p className="text-gray-500">
          {t("Rights and Obligations of the Center.subtitle2")}
        </p>
        <ul className="list-disc text-gray-500">
          <li>{t("Rights and Obligations of the Center.step7")}</li>
          <li>{t("Rights and Obligations of the Center.step8")}</li>
          <li>{t("Rights and Obligations of the Center.step9")}</li>
          <li>{t("Rights and Obligations of the Center.step10")}</li>
        </ul>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">{t("Duration of the Agreement.title")}</h4>
        <p className="text-gray-500">
          {t("Duration of the Agreement.subtitle1")}
        </p>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">{t("Responsibility.title")}</h4>
        <p className="text-gray-500">{t("Responsibility.subtitle1")}</p>
        <p className="text-gray-500">{t("Responsibility.subtitle2")}</p>
        <ul className="list-disc text-gray-500">
          <li>{t("Responsibility.step1")}</li>
          <li>{t("Responsibility.step2")}</li>
        </ul>
        <p className="text-gray-500">{t("Responsibility.subtitle3")}</p>
        <p className="text-gray-500">{t("Responsibility.subtitle4")}</p>
        <ul className="list-disc text-gray-500">
          <li>{t("Responsibility.step3")}</li>
          <li>{t("Responsibility.step4")}</li>
          <li>{t("Responsibility.step5")}</li>
        </ul>
        <p className="text-gray-500">{t("Responsibility.subtitle5")}</p>
        <p className="text-gray-500">{t("Responsibility.subtitle6")}</p>
        <p className="text-gray-500">{t("Responsibility.subtitle7")}</p>
        <p className="text-gray-500">{t("Responsibility.subtitle8")}</p>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">
          {t("Procedure for consideration of claims.title")}
        </h4>
        <p className="text-gray-500">
          {t("Procedure for consideration of claims.subtitle1")}
        </p>
        <p className="text-gray-500">
          {t("Procedure for consideration of claims.subtitle2")}
        </p>
        <p className="text-gray-500">
          {t("Procedure for consideration of claims.subtitle3")}
        </p>
      </article>
      <article className="flex flex-col gap-8">
        <h4 className="font-bold">{t("Settlement of disputes.title")}</h4>
        <p className="text-gray-500">{t("Settlement of disputes.subtitle1")}</p>
      </article>
    </div>
  );
};
