"use client";

import { Button } from "@components/Button/Button";
import { FontBody, FontHeading } from "@lib/fonts";
import { useRouter } from "next/navigation";

const ContactPrompt: React.FC = () => {
  const router = useRouter();
  return (
    <div className={`my-8 py-8 ${FontBody.variable} ${FontHeading.variable}`}>
      <div className="flex flex-col gap-8 sm:flex-row md:justify-between">
        <h2 className="text-center sm:w-full sm:text-left font-heading text-h2 font-bold leading-none md:text-h1">
          Interested in doing a project together?
        </h2>

        <div className="flex justify-center sm:justify-end items-center sm:w-1/2">
          <Button
            label="Contact Me"
            handleClick={() => router.push("/contact-me")}></Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPrompt;
