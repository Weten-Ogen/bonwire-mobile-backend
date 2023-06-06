import LogoImg from "@/public/logo.svg"
import React from 'react';
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image 
      className="text-red-600 bg-red-600 rounded object-cover"
      src={LogoImg} 
      height={50} 
      width={50}
       alt="logo"/>
    </div>
  );
}
