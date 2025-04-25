"use client";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import Colors from "@/data/Colors";
import Lookup from "@/data/Lookup";
import { ArrowRight, Link } from "lucide-react";
import React, { useContext, useState } from "react";
import SignInDialog from "./SignInDialog";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Hero() {
  const [userInput, setUserInput] = useState();
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [openDialog, setOpenDialog] = useState(false);
  const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
  const router = useRouter();

  const onGenerate = async (input) => {
    if (!userDetail?.name) {
      setOpenDialog(true);
      return;
    }
    if (userDetail?.token < 10) {
      toast("You don't have enough token to generate code");
      return;
    }
    const msg = {
      role: "user",
      content: input,
    };
    setMessages(msg);

    const workspaceId = await CreateWorkspace({
      user: userDetail._id,
      messages: [msg],
    });
    console.log(workspaceId);
    router.push("/workspace/" + workspaceId);
  };

  return (
<div className="flex flex-col items-center px-4 sm:px-6 md:px-12 mt-24 sm:mt-32 xl:mt-40 gap-4">
      {/* Heading */}
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 mb-2">
        {Lookup.HERO_HEADING}
      </h2>

      {/* Description */}
      <p className="text-blue-400 font-medium text-center text-sm sm:text-base max-w-xl">
        {Lookup.HERO_DESC}
      </p>

      {/* Input Box */}
      <div
        className="p-4 sm:p-5 border border-gray-800 rounded-xl w-full max-w-2xl mt-4 shadow-md sm:shadow-lg transition-all duration-300 backdrop-blur-sm"
        style={{ backgroundColor: Colors.BACKGROUND }}
      >
        <div className="flex gap-2">
          <textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            className="outline-none bg-transparent w-full h-28 sm:h-32 max-h-56 resize-none text-sm sm:text-base text-white placeholder:text-gray-400"
            onChange={(event) => setUserInput(event.target.value)}
          />
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-gradient-to-r from-blue-500 to-pink-500 p-2 h-10 w-12 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          )}
        </div>
        <div>
          <div>
            <Link className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex mt-8 flex-wrap max-w-2xl items-center justify-center gap-2 sm:gap-3">
        {Lookup.SUGGSTIONS.map((suggestion, index) => (
          <h2
            key={index}
            onClick={() => onGenerate(suggestion)}
            className="px-3 py-1 border border-gray-800 rounded-full text-xs sm:text-sm text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text transition duration-300 cursor-pointer"
          >
            {suggestion}
          </h2>
        ))}
      </div>

      {/* SignIn Dialog */}
      <SignInDialog
        openDialog={openDialog}
        closeDialog={(v) => setOpenDialog(v)}
      />

      {/* Footer */}
      <div className="w-full fixed bottom-0 left-0 right-0 m-0 p-2 text-xs sm:text-sm backdrop-blur-md bg-black/20">
        <footer className="text-white text-center">
          <p className="mb-1">
            Built with ❤️ by{" "}
            <a
              href="https://kumarnishant.netlify.app/"
              target="_blank"
              className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text transition duration-300"
            >
              Nishant Kumar
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Hero;
