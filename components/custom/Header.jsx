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
    <div className="p-4 flex justify-between items-center">
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
        <div className="flex gap-5">
          <Button
            onClick={() => setOpenDialog(true)}
            className="bg-gradient-to-r text-white from-blue-500 to-pink-500 p-2 w-32  hover:from-blue-600 hover:to-pink-600 transition duration-300"
          >
            Sign In
          </Button>
          <Button
            onClick={() => setOpenDialog(true)}
            className="bg-gradient-to-r text-white from-blue-500 to-pink-500 p-2 w-32  hover:from-blue-600 hover:to-pink-600 transition duration-300"
            // style={{
            //   backgroundColor: Colors.BLUE,
            // }}
          >
            Get Started
          </Button>
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
                // style={{
                //   backgroundColor: Colors.BLUE,
                // }}
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
