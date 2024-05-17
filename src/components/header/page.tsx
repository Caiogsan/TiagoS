"use client";
import profile from "../../assets/profile.png";
import Image from "next/image";
import galery1 from "../../assets/galery1.png";
import galery2 from "../../assets/galery2.png";
import galery3 from "../../assets/galery3.png";
import galery4 from "../../assets/galery4.png";
import galery5 from "../../assets/galery5.png";
import galery6 from "../../assets/galery6.png";
import galery7 from "../../assets/galery7.png";
import galery8 from "../../assets/galery8.png";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import wpp from "../../../public/wpp.svg";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Header() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openGalery, setOpenGalery] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [textAppear, setTextAppear] = useState(false);
  const [switchCard, setSwitchCard] = useState(0);
  const switchState = (
    state: boolean,
    item: (value: boolean | ((prevVar: boolean) => boolean)) => void
  ) => {
    item(state);
  };
  return (
    <div className="absolute top-64 w-full z-10 px-20 py-1">
      <div className="flex w-full justify-between items-center">
        <div className="w-full">
          <ul className="flex w-full flex-col gap-20 font-semibold text-white ">
            <Button
              onMouseEnter={() => {
                switchState(true, setOpenAbout);
              }}
              onMouseLeave={() => setOpenAbout(false)}
              variant={"outline"}
              className={`text-amber-300 ${
                openAbout
                  ? "justify-evenly w-[60%] h-[25rem]"
                  : "justify-center w-80 h-10"
              }  flex flex-col  italic transition-all duration-700  
                ease-out`}
            >
              <h1 className="text-2xl">Sobre</h1>
              <div
                className={
                  openAbout ? "flex w-full justify-evenly h-[87%]" : "hidden"
                }
              >
                <div className=" w-[250px] justify-center flex">
                  <Image src={profile} width={300} alt="teste"></Image>
                </div>
                <div className="w-[250px] flex overflow-hidden h-full w-96">
                  <p className="text-start leading-7	">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    sit amet arcu suscipit ultricies a a purus. Interdum et
                    fames
                    <br />
                    ac ante ipsum primis in faucibus. Pellentesque habitant
                    morbi
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    sit amet arcu suscipit ultricies a a purus. Interdum et
                    fames
                    <br />
                    ac ante ipsum primis in faucibus. Pellentesque habitant
                    morbi
                    <br />
                    sit amet arcu suscipit ultricies a a purus. Interdum et
                    fames
                    <br />
                    ac ante ipsum primis in faucibus. Pellentesque habitant
                    morbi
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    ac ante ipsum primis in faucibus. Pellentesque habitant
                    morbi
                    <br />
                    sit amet arcu suscipit ultricies a a purus. Interdum et
                    fames
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    ac ante ipsum primis in faucibus. Pellentesque habitant
                    morbi
                    <br />
                    sit amet arcu suscipit ultricies a a purus. Interdum et
                    fames
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                  </p>
                </div>
              </div>
            </Button>
            <Button
              onMouseEnter={() => {
                switchState(true, setOpenGalery);
                setTextAppear(true);
              }}
              onMouseLeave={() => {
                switchState(false, setOpenGalery);
                setTextAppear(false);
              }}
              variant={"outline"}
              className={`text-amber-300 text-2xl ${
                openGalery
                  ? "justify-evenly w-[60%] h-[30rem]"
                  : "justify-center w-80 h-10 ml-10"
              }  flex flex-col  italic transition-all duration-700  
                ease-out`}
            >
              Galeria
              <div
                onMouseEnter={() => {
                  setTextAppear(true);
                }}
                onMouseLeave={() => setTextAppear(false)}
                className={`
                  ${textAppear ? "opacity-40" : "opacity-100"}
                  ${
                    openGalery
                      ? "flex flex-col duration-300 w-full gap-6 justify-between h-[75%] mb-6"
                      : "hidden"
                  }
                `}
              >
                <div className=" w-full h-[50%] gap-4 justify-center opacity-100 flex">
                  <div className=" h-12 rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery1}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                  <div className="h-12 rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery2}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                  <div className=" rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery3}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                  <div className="rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery4}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                </div>
                <div className=" w-full h-[50%] gap-4 justify-center  flex">
                  <div className=" h-12 rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery5}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                  <div className=" h-12 rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery6}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                  <div className="h-12 rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery7}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                  <div className=" h-12 rounded-md duration-300">
                    <Image
                      className="rounded-md h-44"
                      src={galery8}
                      width={130}
                      alt="galery1"
                    ></Image>
                  </div>
                </div>
              </div>
              <h1
                className={`${
                  openGalery
                    ? "absolute pointer-events-none 	 duration-300 ease-out text-white font-bold underline italic"
                    : "hidden"
                } ${
                  textAppear
                    ? "opacity-100 transition-all ease-out duration-700"
                    : "opacity-0"
                }`}
              >
                Clique para ver mais...
              </h1>
            </Button>
            <Button
              onMouseEnter={() => switchState(true, setOpenContact)}
              onMouseLeave={() => switchState(false, setOpenContact)}
              variant={"outline"}
              className={`text-amber-300 text-2xl ${
                openContact
                  ? "justify-evenly w-[60%] h-[25rem]"
                  : "justify-center w-80 h-10 ml-20"
              }  flex flex-col  italic transition-all duration-700  
                ease-out`}
            >
              Contato
              <div
                onMouseEnter={() => {
                  setTextAppear(true);
                }}
                onMouseLeave={() => setTextAppear(false)}
                className={`
                  
                  ${
                    openContact
                      ? "flex duration-300 w-full gap-6 justify-between items-center h-full"
                      : "hidden"
                  }
                `}
              >
                <div className=" w-[50%] h-[90%] bg-white rounded-md justify-center items-center flex">
                  <iframe
                    className={
                      openContact ? "flex h-full w-full rounded-md" : "hidden"
                    }
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1359941828364!2d-45.453314889455115!3d-22.423906667200495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb7cac82da82b1%3A0xae67797785681b15!2sR.%20Dr.%20Am%C3%A9rico%20de%20Oliveira%2C%20623%20-%20Morro%20Chic%2C%20Itajub%C3%A1%20-%20MG%2C%2037500-061!5e0!3m2!1sen!2sbr!4v1715955138679!5m2!1sen!2sbr"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className=" w-[50%] h-[90%] h-full justify-start flex flex-col">
                  <h1 className="text-center">Marque seu horario!</h1>
                  <div className="text-start mt-6 flex flex-col gap-4">
                    <p className="text-lg">
                      <span className="underline">Endereço:</span> R. Dr.
                      Américo de Oliveira, 623 <br /> - Morro Chic, Itajubá -
                      MG, 37500-061
                    </p>
                    <p className="text-lg">
                      <span className="underline">Email:</span>{" "}
                      tiagossf_2002@hotmail.com
                    </p>
                  </div>
                  <div className="h-full flex flex-col items-start gap-2 justify-center">
                    <div className="flex hover:underline text-base justify-center items-center gap-3">
                      <Image
                        className="rounded-full"
                        src={facebook}
                        width={35}
                        alt="facebook"
                      ></Image>
                      <p>Tiago Sobreiro</p>
                    </div>
                    <div className="flex hover:underline text-base justify-center items-center gap-3">
                      <Image
                        className="rounded-full"
                        src={instagram}
                        width={35}
                        alt="instagram"
                      ></Image>
                      <p>sobreiro.tattoo</p>
                    </div>
                    <div className="flex hover:underline text-sm justify-center items-center gap-3">
                      <Image
                        className="rounded-full"
                        src={wpp}
                        width={35}
                        alt="wpp"
                      ></Image>
                      <p>(35) 9 8876-8553</p>
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
}
