import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "button" | "submit";
  btnStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;  
}