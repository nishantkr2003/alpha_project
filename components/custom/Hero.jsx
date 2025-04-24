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
    <div
      className="flex flex-col items-center mt-36 xl:mt-42 gap-2"
      // className="flex flex-col items-center mt-36 xl:mt-42 gap-2 bg-cover bg-center bg-no-repeat min-h-screen"
      // style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <h2 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:scale-110 transition duration-300 mb-2">
        {Lookup.HERO_HEADING}
      </h2>
      <p className="text-blue-400 font-medium">{Lookup.HERO_DESC}</p>
      <div
        className="p-5 border rounded-xl max-w-2xl w-full mt-3 shadow-lg transition-all duration-300"
        style={{
          backgroundColor: Colors.BACKGROUND,
        }}
      >
        <div className="flex gap-2">
          <textarea
            placeholder={Lookup.INPUT_PLACEHOLDER}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
            onChange={(event) => setUserInput(event.target.value)}
          />
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-gradient-to-r from-blue-500 to-pink-500 p-2 h-8 w-12 rounded-md cursor-pointer"
            />
          )}
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>

      <div className="flex mt-8 flex-wrap max-w-2xl items-center justify-center gap-3">
        {Lookup.SUGGSTIONS.map((suggestion, index) => (
          <h2
            className="p-2 px-2 border-1 border-gray-800 rounded-full text-sm text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text transition duration-300 cursor-pointer"
            key={index}
            onClick={() => onGenerate(suggestion)}
          >
            {suggestion}
          </h2>
        ))}
      </div>

      <SignInDialog
        openDialog={openDialog}
        closeDialog={(v) => setOpenDialog(v)}
      />

      <div className="w-full bg-transparent fixed bottom-0 left-0 right-0 m-0 p-2">
        <footer className="text-white text-center bg-transparent">
          <p className="mb-2">
            Built with ❤️ by{" "}
            <a
              className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text transition duration-300 cursor-pointer"
              href="https://kumarnishant.netlify.app/"
              target="_blank"
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
