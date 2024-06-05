import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";

async function Header() {
  // const { data } = useSession();

  // useEffect(() => {
  //   console.log(data);
  // }, [data])

  return (
    <div>
      <Sheet>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="/logo.png" alt="logo" width={180} height={100} />
            </a>

            <SheetTrigger asChild>
              <Button
                variant="outline"
                dataCollapseToggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                ariaControls="navbar-default"
                ariaExpanded="false">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  ariaHidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default">
              <ul className="font-medium h-auto items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href={"/"}
                    className="hover:scale-105 hover:text-primary mr-8
                cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/search/Panting"}
                    className="hover:scale-105 hover:text-primary mr-8
                cursor-pointer">
                    Search
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/mybooking"}
                    className="hover:scale-105 hover:text-primary mr-8
                cursor-pointer">
                    Bookings
                  </Link>
                </li>

                <SignedIn>
                  <UserButton afterSignOutUrl="/" showName />
                </SignedIn>

                <SignedOut>
                  <Button asChild>
                    <Link href="/sign-in">Login/Sign Up</Link>
                  </Button>
                </SignedOut>
              </ul>
            </div>
          </div>
        </nav>

        <SheetContent>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Link
                href={"/"}
                className="hover:scale-105 hover:text-primary mr-8
                cursor-pointer">
                Home
              </Link>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Link
                href={"/search/Panting"}
                className="hover:scale-105 hover:text-primary mr-8
                cursor-pointer">
                Search
              </Link>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Link
                href={"/mybooking"}
                className="hover:scale-105 hover:text-primary mr-8
                cursor-pointer">
                Bookings
              </Link>
            </div>
          </div>
          <SheetFooter>
            <SignedIn>
              <UserButton afterSignOutUrl="/" showName />
            </SignedIn>

            <SignedOut>
              <Button asChild>
                <Link href="/sign-in">Login/Sign Up</Link>
              </Button>
            </SignedOut>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Header;
