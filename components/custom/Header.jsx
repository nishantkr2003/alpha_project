"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import Colors from "@/data/Colors";
import { UserDetailContext } from "@/context/UserDetailContext";
import Link from "next/link";
import { Download, Rocket } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { usePathname } from "next/navigation";
import { ActionContext } from "@/context/ActionContext";
import { useState } from "react";
import SignInDialog from "./SignInDialog";

function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const { action, setAction } = useContext(ActionContext);
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const [openDialog, setOpenDialog] = useState(false);

  const onActionBtn = (actn) => {
    setAction({
      actionType: actn,
      timeStamp: Date.now(),
    });
  };

  return (
    <div className="p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-lg bg-black bg-opacity-30 z-50">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="transition-transform duration-300 hover:scale-110 "
        />
      </Link>

      {!userDetail?.name ? (
        <div className="flex items-center justify-between w-full">
          {/* Add home  ,aboutus, contact us , and github */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <div className="relative group">
              <Link
                href="#"
                className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent hover:text-transparent hover:bg-clip-text "
              >
                Home
              </Link>
            </div>
            <div className="relative group">
              <Link
                href="#"
                className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent hover:text-transparent hover:bg-clip-text "
              >
                About Us
              </Link>

              {/* Dropdown */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 h-108 bg-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 z-50 p-4 border border-gray-600">
                <p className="text-sm text-white">
                  Welcome to NovaCode AI, an AI-powered platform that
                  revolutionizes the coding process. Built by a passionate solo
                  developer, NovaCode AI leverages Google Gemini AI to generate
                  and refine code based on natural language prompts. With a
                  real-time interactive environment powered by Sandpack and a
                  serverless backend via Convex, it offers instant code previews
                  and seamless updates. Designed with Next.js, React 18, and
                  Tailwind CSS, NovaCode AI enhances developer productivity by
                  providing a fast, scalable, and intuitive platform for modern
                  software development.
                </p>
              </div>
            </div>

            <div className="relative group">
              <Link
                href="#"
                className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent hover:text-transparent hover:bg-clip-text "
              >
                Contact Us
              </Link>

              {/* Dropdown */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 h-108 bg-black shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 z-50 p-4 border border-gray-600 ">
                <ul>
                  <li className="mb-2">
                    <a
                      href="mailto:nishantkr2003nna@gmail.com"
                      className="block text-sm text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent hover:text-transparent hover:bg-clip-text transition duration-300"
                    >
                      Gmail: nishantkr2003nna@gmail.com
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.linkedin.com/in/nishant-kumar-749279260/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent hover:text-transparent hover:bg-clip-text transition duration-300"
                    >
                      LinkedIn: nishant-kumar-749279260
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      href="https://wa.me/917541006707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent hover:text-transparent hover:bg-clip-text transition duration-300"
                    >
                      WhatsApp: 7541006707
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="https://github.com/nishantkr2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent hover:text-transparent hover:bg-clip-text "
            >
              GitHub
            </Link>
          </div>

          <div className="flex gap-4 ml-auto">
            <Button
              onClick={() => setOpenDialog(true)}
              className="bg-gradient-to-r text-white from-blue-500 to-pink-500 p-2 w-32  hover:from-blue-600 hover:to-pink-600 transition duration-300"
            >
              Sign In
            </Button>

            <Button
              onClick={() => setOpenDialog(true)}
              className="bg-gradient-to-r text-white from-blue-500 to-pink-500 p-2 w-32  hover:from-blue-600 hover:to-pink-600 transition duration-300"
            >
              Get Started
            </Button>
          </div>

        </div>
      ) : (
        <div className="flex gap-5 items-center">
          {pathname.includes("/workspace/") && (
            <>
              <Button
                className="bg-gradient-to-r text-white from-blue-500 to-pink-500 p-2 w-32  hover:from-blue-600 hover:to-pink-600 transition duration-300"
                onClick={() => onActionBtn("export")}
              >
                <Download /> Export
              </Button>
              <Button
                onClick={() => onActionBtn("deploy")}
                className="bg-gradient-to-r text-white from-blue-500 to-pink-500 p-2 w-32  hover:from-blue-600 hover:to-pink-600 transition duration-300"
              >
                <Rocket /> Deploy
              </Button>
            </>
          )}
          {userDetail && (
            <Image
              onClick={toggleSidebar}
              src={userDetail?.picture}
              alt="userImage"
              width={40}
              height={40}
              className="rounded-full cursor-pointer object-cover"
            />
          )}
        </div>
      )}
      <SignInDialog openDialog={openDialog} closeDialog={setOpenDialog} />
    </div>
  );
}

export default Header;
