"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlignJustify,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useActivePath } from "../helper/active-link-helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterestP, faTiktok } from "@fortawesome/free-brands-svg-icons";

export function HeaderSheet() {
  const pathname = usePathname();
  const checkActivePath = useActivePath();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify size={40} />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="bg-[rgba(82,53,82,0.22)] backdrop-brightness-50 backdrop-blur-lg h-full border p-0 ease-in-out duration-1000"
      >
        <SheetHeader className=""></SheetHeader>
        <div className="bg-[rgba(82,53,82,0.22)] backdrop-brightness-50 backdrop-blur-lg grid h-full text-lg uppercase text-center justify-items-center">
          <div className="grid gap-2 content-center">
            <SheetClose asChild>
              <Link
                href={"/"}
                as={"/"}
                className={`hover:text-[purple-400] duration-700 ease-in-out tracking-wide ${
                  pathname == "/" ? "active" : "text-white"
                } ${checkActivePath("/") ? "active " : "text-white"}`}
              >
                home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href={"/beach-holiday-packages"}
                as={"/beach-holiday-packages"}
                className={`hover:text-purple-400 duration-700 ease-in-out tracking-wide ${
                  pathname == "/beach-holiday-packages"
                    ? "active"
                    : "text-white"
                } ${
                  checkActivePath("/beach-holiday-packages")
                    ? "active "
                    : "text-white"
                }`}
              >
                Beach
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href={"/family-holiday-packages"}
                as={"/family-holiday-packages"}
                className={`hover:text-purple-400 duration-700 ease-in-out tracking-wide ${
                  pathname == "/family-holiday-packages"
                    ? "active"
                    : "text-white"
                } ${
                  checkActivePath("/family-holiday-packages")
                    ? "active "
                    : "text-white"
                }`}
              >
                family
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href={"/multi-city-holiday-packages"}
                as={"/multi-city-holiday-packages"}
                className={`hover:text-purple-400 duration-700 ease-in-out tracking-wide ${
                  pathname == "/multi-city-holiday-packages"
                    ? "active"
                    : "text-white"
                } ${
                  checkActivePath("/multi-city-holiday-packages")
                    ? "active "
                    : "text-white"
                }`}
              >
                Multi City
              </Link>
            </SheetClose>
          </div>
          <div>
            <div className="flex gap-4 justify-center text-white absolute bottom-20 right-0 left-0">
              <SheetClose asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.facebook.com/aerotravelsuk/"}
                  className=" p-3 hover:text-purple-400  duration-700 ease-in-out"
                >
                  <div className="">
                    <Facebook size={24} className="" />
                  </div>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.instagram.com/aero.travels"}
                  className=" p-3 hover:text-purple-400  duration-700 ease-in-out"
                >
                  <div className="">
                    <Instagram size={24} />
                  </div>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.youtube.com/channel/UC3uEKDT1OWulLJlupRc591Q"
                  }
                  className=" p-3 hover:text-purple-400  duration-700 ease-in-out"
                >
                  <div className="">
                    <Youtube size={28} />
                  </div>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.pinterest.co.uk/aerotravelsuk/"}
                  className=" p-3 hover:text-purple-400  duration-700 ease-in-out"
                >
                  <FontAwesomeIcon
                    className=" "
                    size="lg"
                    icon={faPinterestP}
                  />
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.tiktok.com/@aerotravels.uk"}
                  className=" p-3 hover:text-purple-400  duration-700 ease-in-out"
                >
                  <FontAwesomeIcon className="" size="lg" icon={faTiktok} />
                </Link>
              </SheetClose>
            </div>
            <div className="text-white absolute bottom-4 right-0 left-0 text-normal ">
              <p>Call Us</p>
              <a className="hover:text-purple-400" href="tel:+442039839938">
                0203 983 9938
              </a>
            </div>
          </div>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
