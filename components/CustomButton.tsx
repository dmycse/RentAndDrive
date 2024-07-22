'use client';

import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({title, btnStyles, btnType, handleClick}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${btnStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>

    </button>
  )
}
