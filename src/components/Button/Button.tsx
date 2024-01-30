"use client";

import iconPrimaryBtnHover from "@assets/icons/icon-primary-btn-hover.svg";
import iconPrimaryBtn from "@assets/icons/icon-primary-btn.svg";

import Image from "next/image";

interface ButtonProps {
  label: string;
  isPrimary?: boolean;
  disabled?: boolean;
  handleClick: () => void;
}

export const Button = ({
  label,
  isPrimary = false,
  disabled = false,
  handleClick,
}: ButtonProps) => {
  if (isPrimary) {
    return (
      <PrimaryButton
        label={label}
        disabled={disabled}
        handleClick={handleClick}
      />
    );
  }

  return (
    <SecondaryButton
      label={label}
      disabled={disabled}
      handleClick={handleClick}
    />
  );
};

const PrimaryButton = ({ label, disabled, handleClick }: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`group text-white transition-colors bg-elephant hover:bg-verdigris disabled:bg-eggshell h-12 inline-flex`}>
      <span className="inline-flex bg-black/5 h-12 w-12 text-eggshell group-hover:text-eggshell group-disabled:text-eggshell">
        <Image
          src={iconPrimaryBtn}
          alt=""
          className="inline-block group-hover:hidden group-disabled:hidden m-auto"
        />
        <Image
          src={iconPrimaryBtnHover}
          alt=""
          className="hidden group-hover:inline-block group-disabled:inline-block m-auto"
        />
      </span>
      <span className="px-8 uppercase text-body2 font-body font-semibold tracking-widest align-middle self-center">
        {label}
      </span>
    </button>
  );
};

const SecondaryButton = ({
  label,
  disabled = false,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`transition-colors text-tuna border solid border-tuna bg-transparent h-12 inline-flex hover:text-alabaster hover:bg-tuna disabled:border-eggshell disabled:text-eggshell disabled:bg-transparent`}>
      <span className="px-8 uppercase text-body2 font-body tracking-widest align-middle self-center">
        {label}
      </span>
    </button>
  );
};
