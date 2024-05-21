import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "./logo";

import socials from "@/../public/socials.png";
import Input from "./input";

function CopyrightSection() {
  const t = useTranslations("footer");

  return (
    <div>
      <p className="mt-7 text-center text-sm text-slate-800">
        {t("copyright")}
      </p>
    </div>
  );
}

function NewsletterSection() {
  const t = useTranslations("footer");

  return (
    <div className="w-full flex-grow lg:w-auto ">
      <p className="mb-5 text-xl font-black">{t("newsletter.title")}</p>
      <p className="text-md mb-4 text-stone-600">
        {t("newsletter.description")}
        <br />
        {/** TODO: fix this */}
        und sei als erster dabei!
      </p>

      <div className="flex flex-col gap-4 sm:items-center md:flex-row">
        <Input
          name="email"
          type="email"
          placeholder={"Deine E-Mail Addresse"}
          autoComplete="true"
        />

        <button className="h-12 w-full rounded-md bg-os px-4 text-sm font-medium outline-none ring-amber-200 hover:opacity-90 focus:ring-2 md:ml-2 md:w-auto">
          {t("newsletter.button-label")}
        </button>
      </div>
    </div>
  );
}

export default async function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#FBFBFB] px-10 pb-7 pt-8">
      <div className="flex flex-col justify-between gap-8 leading-8 sm:flex-row">
        <div className="pr-6 sm:max-w-72">
          <Link href="/" className="">
            <Logo />
          </Link>
          <p className="my-5 text-justify text-sm leading-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <Image src={socials} height={30} alt="Social Links" />
        </div>
        <div className="mb-8 flex w-full flex-row flex-wrap justify-between gap-10 gap-y-8 ">
          <div className="flex-grow lg:flex-grow-[9999]">
            <p className="mb-4 font-medium text-stone-800">{t("main.title")}</p>
            <ul className="text-stone-700">
              <li>
                <Link href={"/posts"}>{t("main.posts")}</Link>
              </li>
              <li>
                <Link href={"/shop"}>{t("main.shop")}</Link>
              </li>
              <li>
                <Link href={"/media"}>{t("main.media")}</Link>
              </li>
              <li>
                <Link href={"/creators"}>{t("main.creators")}</Link>
              </li>
              <li>
                <Link href={"/streams"}>{t("main.streams")}</Link>
              </li>
              <li>
                <Link href={"/meetngreet"}>{t("main.meet")}</Link>
              </li>
            </ul>
          </div>

          <div className="flex-grow lg:flex-grow-[9999]">
            <p className="mb-4 font-medium text-stone-800">
              {t("infos.title")}
            </p>
            <ul className="text-stone-700">
              <li>
                <Link href={"/blog"}>{t("infos.blog")}</Link>
              </li>
              <li>
                <Link href={"/about"}>{t("infos.about")}</Link>
              </li>
              <li>
                <Link href={"/faq"}>{t("infos.faq")}</Link>
              </li>
              <li>
                <Link href={"/blog"}>{t("infos.xp")}</Link>
              </li>
              <li>
                <Link href={"/privacy"}>{t("infos.privacy")}</Link>
              </li>
            </ul>
          </div>

          <div className="flex-grow lg:flex-grow-[9999]">
            <p className="mb-4 font-medium text-stone-800">
              {t("legal.title")}
            </p>
            <ul className="text-stone-700">
              <li>
                <Link href={"/terms-of-service"}>{t("legal.tos")}</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>{t("legal.privacy")}</Link>
              </li>
              <li>
                <Link href={"/imprint"}>{t("legal.imprint")}</Link>
              </li>
              <li>
                <Link href={"/return-policy"}>{t("legal.reduce")}</Link>
              </li>
              <li>
                <Link href={"/return-policy"}>{t("legal.payments")}</Link>
              </li>
              <li>
                <Link href={"/account-deletion"}>{t("legal.delete")}</Link>
              </li>
            </ul>
          </div>

          <div className="flex-grow lg:flex-grow-[9999]">
            <p className="mb-4 font-medium text-stone-800">{t("help.title")}</p>
            <ul className="text-stone-700">
              <li>
                <Link href={"/contact"}>{t("help.contact")}</Link>
              </li>
              <li>
                <Link href={"/problem"}>{t("help.problem")}</Link>
              </li>
              <li>
                <Link href={"/forum"}>{t("help.forum")}</Link>
              </li>
            </ul>
          </div>

          <NewsletterSection />
        </div>
      </div>

      <div className="h-[1px] bg-slate-200"></div>

      <CopyrightSection />
    </footer>
  );
}
