import ClipboardList from "@/assets/icons/clipboard-list.svg";
import DesktopComputerSVG from "@/assets/icons/desktop-computer.svg";
import FilmSVG from "@/assets/icons/film.svg";
import BellSVG from "@/assets/icons/iconify/bell.svg";
import CartSVG from "@/assets/icons/iconify/cart.svg";
import LikeSVG from "@/assets/icons/iconify/heart.svg";
import ProfileSVG from "@/assets/icons/iconify/profile.svg";
import SearchSVG from "@/assets/icons/iconify/search.svg";
import ShoppingBagSVG from "@/assets/icons/shopping-bag.svg";
import SparklesSVG from "@/assets/icons/sparkles.svg";
import UserGroupSVG from "@/assets/icons/user-group.svg";
import UsersSVG from "@/assets/icons/users.svg";

import { auth } from "@/app/api/[...nextauth]/auth";

import { Link } from "@/navigation";
import React from "react";
import LogoutButton from "./LogoutButton";
import styles from "./navbar.module.css";
import { CartOverlay } from "../cart/cart";
import { getAllCategories, updateCategoryName } from "@/services/categories";
import { getTranslations } from "next-intl/server";
import Input from "../input";

const IconButton = ({ children, href }: any) => {
  return (
    <Link href={href ?? "asd"}>
      <button className="rounded-md p-2 hover:bg-gold-50">{children}</button>
    </Link>
  );
};

const LoginButton = ({}: any) => {
  return (
    <Link href={`/login`}>
      <button className="ml-2 h-10 rounded-md bg-os px-4 text-sm hover:bg-opacity-90">
        <span className="text-stone-900">Anmelden</span>
      </button>
    </Link>
  );
};

const NavBarElement = ({
  icon,
  label,
  linksTo,
  isActive,
}: {
  icon?: any;
  label: string;
  linksTo: string;
  isActive: boolean;
}) => {
  const Icon = icon as any as React.FC;

  return (
    <Link
      aria-current={isActive}
      className="flex items-center gap-2 text-sm"
      href={`/${linksTo}`}
    >
      {Icon ? <Icon /> : null}
      <p>{label}</p>
    </Link>
  );
};

const Icons = {
  posts: SparklesSVG,
  shop: ShoppingBagSVG,
  media: FilmSVG,
  creators: UserGroupSVG,
  streams: DesktopComputerSVG,
  meetngreet: UsersSVG,
  faq: ClipboardList,
} as any;

const Navbar = async () => {
  const isActive = (asd: any) => false;
  const session = await auth();
  const t = await getTranslations("nav");
  const mainCategories = (await getAllCategories()).filter(
    (category) => category.parentId === null,
  );

  // TODO: Move this to layout
  const menuLinks = mainCategories.map((category) => ({
    label: t(category.name as any),
    linksTo: `/categories/${category.name}`,
  }));

  return (
    <nav className={styles.navbar}>
      <div className="mr-8">
        {/* 
        
        <Link href="/" className="block mt-[6px]">
          <Logo />
        </Link>
        
        */}
        <LogoutButton />
      </div>
      <div className="flex w-full gap-4">
        <ul className="flex items-center justify-center gap-4">
          {menuLinks.map((item, index) => (
            <li key={index}>
              <NavBarElement
                icon={Icons[item.linksTo]}
                label={item.label}
                linksTo={item.linksTo}
                isActive={isActive(item.linksTo)}
              />
            </li>
          ))}
        </ul>

        <div className="flex h-10 w-full overflow-hidden rounded-md border border-zinc-200 ring-gold-500 focus-within:ring-2">
          <input
            name="search"
            type="text"
            placeholder={"Search"}
            autoComplete="false"
            className={`h-full w-full px-4 text-sm outline-none`}
          />
          <IconButton>
            <SearchSVG />
          </IconButton>
        </div>

        <div className="flex items-center justify-center">
          <CartOverlay>
            <CartSVG />
          </CartOverlay>
          <IconButton>
            <LikeSVG />
          </IconButton>
          {session ? (
            <>
              <IconButton href="/u/10238182937">
                <ProfileSVG />
              </IconButton>
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
