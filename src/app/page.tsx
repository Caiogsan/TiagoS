"use client";

import Image from "next/image";
import background from "../assets/newteste.png";
import logo from "../assets/logo.png";
import home from "../../public/vercel.svg";
import { Button } from "@/components/ui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
export default function Home() {
  return (
    <div className=" max-w-[1350px]">
      <Image
        className="opacity-90 relative"
        src={background}
        width={1350}
        alt="background"
      ></Image>
      <div className="absolute flex flex-col gap-4 top-6 items-center right-10">
        <Dropdown>
          <DropdownTrigger className="rounded-full ">
            <Button variant={"defaultBlank"} className="w-full">
              <Image
                className="p-2 bg-white rounded-full"
                width={50}
                src={home}
                alt="teste"
              ></Image>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem>Cuidados</DropdownItem>
            <DropdownItem>Localização</DropdownItem>
            <DropdownItem>Feedbacks</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="bg-gray-100 pt-20 px-40 text-center">
        <div className="w-full flex border-b-1 border-gray-400"></div>
        <h1 className="text-4xl font-newTatto py-12 font-bold">
          Interessado em fazer uma tatuagem?
        </h1>
        <p className="font-newTatto text-xl text-gray-500">
          Se você estiver interessado em fazer uma tatuagem comigo, por favor dê
          uma olhada na aba de perguntas e respostas. Após isso me envie uma
          mensagem e eu retornarei o mais rapido possivel.
        </p>
        <Button className="font-newTatto tracking-widest my-8 w-56 h-12">ESTOU INTERESSADO!</Button>
      </div>
    </div>
  );
}
