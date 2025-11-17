import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main
      className="
        flex flex-col-reverse lg:flex-row
        items-center
        justify-center lg:justify-between
        min-h-[calc(90vh-6rem)]
        px-6 sm:px-10 lg:px-16
      "
    >
      {/* Contenido / Texto */}
      <div
        className="
          w-full 
          flex flex-col 
          items-center lg:items-start 
          text-center lg:text-left
          z-10
          mt-12 lg:mt-0
        "
      >
        {/* Etiqueta superior */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-black border border-[#00A86B] shadow-[0_0_15px_rgba(0,168,107,0.4)] backdrop-blur-sm">
          <i className="bx bx-leaf text-green-400 text-lg"></i>
          <span className="ml-2 text-green-200 text-sm font-medium whitespace-nowrap">
            Construyendo una nueva agricultura
          </span>
        </div>

        {/* Título con gradiente más marcado blanco -> verde */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl font-semibold 
            tracking-wider my-6 sm:my-8
            bg-gradient-to-r from-white via-[#5BFFB3] to-[#00B95A]
            bg-clip-text text-transparent
          "
        >
          Sistema interno Biogrow
        </h1>

        {/* Texto en blanco */}
        <p
          className="
            text-base sm:text-lg tracking-wider text-white 
            max-w-[25rem] lg:max-w-[30rem]
          "
        >
          Accede a nuestros sistemas internos para utilizar nuestros servicios.
        </p>
      </div>

      {/* Modelo Spline: oculto en mobile */}
      <div className="hidden md:flex w-full justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[36rem]">
          <Spline scene="https://prod.spline.design/0nqU838cDLx5VFtk/scene.splinecode" />
        </div>
      </div>
    </main>
  );
};

export default Hero;