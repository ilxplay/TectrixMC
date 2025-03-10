import { FaDiscord } from "react-icons/fa";
import MagicButton from "./MagicButton";
import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import { InputGroup } from "@/components/ui/input-group";
import { ChakraProvider } from "@chakra-ui/react";

const Demo = () => {
  return (
    <ClipboardRoot
      maxW="300px"
      value="play.tectrix.dev"
      className="text-center mx-auto my-5"
    >
      <InputGroup
        className="text-center bg-black rounded-lg border-[#71717a] border-2 p-2"
        width="full"
        endElement={<ClipboardIconButton me="-2" />}
      >
        <div className="pl-1 flex flex-row items-center justify-center">
          <p>IP:</p>
          <ClipboardInput />
        </div>
      </InputGroup>
    </ClipboardRoot>
  );
};

const Footer = () => {
  const discordInviteLink = "https://discord.com/invite/XkWmXWTcwD";
  return (
    <footer
      className="w-full pt-20 pb-10"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to try <span className="text-purple">TectrixMC</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center text-xl">
          Join right now to participate in peak minecraft experience!
        </p>

        <a
          href={discordInviteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Join"
            icon={<FaDiscord />}
            position="right"
          />
        </a>
      </div>
      <Demo />
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 The TectrixMC team. All rights reserved
        </p>

        <p className="md:text-base text-xl md:font-normal font-semibold">
          Our IP: play.tectrix.dev
        </p>

        {/*<div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>*/}
      </div>
    </footer>
  );
};

export default Footer;
