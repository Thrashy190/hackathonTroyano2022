import React from "react";
import SearchButton from "../../Components/LandigPage/SearchButton";
import Morra from "../../Assets/Morra.jpeg";
import RoadMap from "../../Assets/RoadMap.png";
import Foto1 from "../../Assets/Foto1.png";
import Foto2 from "../../Assets/Foto2.png";
import Logo from "../../Assets/Logo.png";
import NavLanding from "../../Components/LandigPage/NavLanding";
import CarouselCard from "../../Components/LandigPage/CarouselCard";
import Grop_3 from "../../Assets/Group_3.png";

const LandingPage = () => {
  const blockArray = [
    "Periodos",
    "Temarios",
    "Documentos",
    " Videos",
    "Charlas",
    "Dudas",
  ];

  return (
    <div className="w-screen h-screen justify-center flex-col bg-white">
      <NavLanding></NavLanding>
      <div className="w-full h-full flex justify-center items-strech bg-white">
        <div className="w-2/5 h-full space-y-6 items-center flex-col bg-white">
          <img
            src={Grop_3}
            className="flex justify-center item-center ml-[25%] mt-12"
          ></img>
          <h1 className="font-bold text-[2vw] text-center text-indigo-900 mt-[40%]">
            Conoce tu universidad <br />
            desde dentro
          </h1>
          <div className="ml-[16%]">
            <SearchButton></SearchButton>
          </div>
          <h3 className="font-medium text-sm text-center text-indigo-900">
            ¿No encuentras tu universidad?
          </h3>
          <h3
            className="font-medium text-sm text-center underline underline-offset-4 text-indigo-900" /*onClick={}*/
          >
            Crea tu propio camino aquí
          </h3>
        </div>
        <div className="w-3/5 h-full flex justify-start flex-col bg-indigo-600 ">
          <img
            src={Morra}
            className="w-[92%] h-[41vw] justify-self-start rounded-tr-[70px] rounded-br-[70px] mt-[4%] object-cover "
          ></img>
        </div>
      </div>

      <div className="w-full h-[800px] flex justify-center items-center flex-col bg-indigo-600">
        <div className="w-[80%] h-[100%] flex justify-center flex-col mt-[2%] rounded-lg">
          <CarouselCard></CarouselCard>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center flex-row space-x-[20%] bg-white border-black border-b-[1.5px]">
        <div className="w-[30%] h-[50%] flex-col mt-[2%] rounded-lg ">
          <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">
            BUSCA
          </h1>
          <h3 className="font-light text-[4vw] text-center text-indigo-900">
            Acerca de las
            <br />
            materias que
            <br />
            te interesan.
          </h3>
        </div>
        <img src={RoadMap} className="w-[30%] h-[30vw] mt-[2%]"></img>
      </div>

      <div className="w-full h-full flex justify-center items-center flex-col border-black border-t-[1px]">
        <div className="w-full h-full flex justify-center items-start flex-row space-x-[8%] mb-10 bg-white mt-20">
          <div className="w-[32%] h-[50%] flex-col mt-[2%] rounded-lg">
            <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">
              INTERACTUA
            </h1>
            <h3 className="font-light text-[4vw] text-center text-indigo-900">
              Con los recursos
              <br />
              que seleccionamos
              <br />
              para ti.
            </h3>
          </div>
          <img src={Foto1} className="w-[30%] h-[30vw] mt-[2%]"></img>
        </div>

        <div className="grid grid-cols-3 gap-x-20 gap-y-10">
          {blockArray.map((item) => {
            return (
              <div className="w-[20vw] h-[6.5vw] flex justify-center items-center shadow-2xl border-indigo-600 border-[2px] rounded-lg">
                <h3 className="font-light text-[3vw] text-center text-indigo-900">
                  {item}
                </h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex justify-center items-center flex-row space-x-[1%]   ">
        <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">
          TODO
        </h1>
        <h1 className="font-bold text-[3.5vw] text-center text-indigo-900 mb-32 mt-32">
          EN UN MISMO LUGAR.
        </h1>
      </div>

      <div className=" flex justify-center items-center flex-col ">
        <div className="w-full flex justify-center items-center flex-row space-x-[10%] border-black border-t-[1.5px]">
          <div className=" flex-col rounded-lg ">
            <h1 className="font-bold text-[3.5vw] text-center text-indigo-600">
              ALZA LA MANO
            </h1>
            <h3 className="font-light text-[4vw] text-center text-indigo-900">
              Y has tus dudas a la
              <br />
              comunidad.
            </h3>
          </div>
          <img src={Foto2} className="w-[38%] h-[30vw]  "></img>
        </div>
        <div className="w-full h-full flex justify-center  flex-row space-x-[7%] ">
          <div className="w-[23vw] h-[25vw] justify-center flex-col items-center shadow-2xl bg-white border-[#969696] border-[2px] rounded-lg">
            <h3 className="font-light text-[1.3vw] text-center text-indigo-900 mt-[10%] mb-3">
              UAQ FAULTDAD
              <br />
              DE INFORMÁTICA
            </h3>
            <h1 className="font-bold text-[2.5vw] text-center text-indigo-600">
              ¿Cual es mi oferta
              <br />
              laboral al graduarme?
            </h1>
            <h2 className="font-bold text-[1.3vw] text-center text-indigo-900 mt-5">
              10 personas activas.
            </h2>
          </div>
          <div className="w-[23vw] h-[25vw] justify-center flex-col items-center shadow-2xl bg-white border-[#969696] border-[2px] rounded-lg">
            <h3 className="font-light text-[1.3vw] text-center text-indigo-900 mt-[10%] mb-3">
              UAQ FAULTDAD
              <br />
              DE INFORMÁTICA
            </h3>
            <h1 className="font-bold text-[2.5vw] text-center text-indigo-600">
              ¿Qué tan buena
              <br />
              es esta carrera?
            </h1>
            <h2 className="font-bold text-[1.3vw] text-center text-indigo-900 mt-[25%]">
              20 personas activas.
            </h2>
          </div>
          <div className="w-[23vw] h-[25vw] justify-center flex-col items-center shadow-2xl bg-white border-[#969696] border-[2px] rounded-lg">
            <h3 className="font-light text-[1.3vw] text-center text-indigo-900 mt-[10%] mb-3">
              INSTITUTO
              <br />
              TECNOLOGICO DE SALTILLO
            </h3>
            <h1 className="font-bold text-[2.5vw] text-center text-indigo-600">
              ¿De que trata
              <br />
              la carrera
              <br />
              de software?
            </h1>
            <h2 className="font-bold text-[1.3vw] text-center text-indigo-900 mt-5">
              15 personas activas.
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full h-[30%] flex justify-center items-center flex-col  bg-indigo-600 mt-32">
        <img src={Logo} className="w-20 h-30 mt-4"></img>
        <h3 className="font-light text-[1vw] text-center text-white">
          Todos los derechos reservados 2022 / Avgi
        </h3>
      </div>
    </div>
  );
};

export default LandingPage;
