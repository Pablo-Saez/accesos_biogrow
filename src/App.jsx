// // src/App.jsx
// import Hero from "./components/Hero";
// import PedidosSection from "./components/PedidosSection";
// // en los próximos pasos agregaremos RendicionesSection y ClientesSection
// // import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="font-[Poppins] text-white overflow-x-hidden">
//       {/* Portada principal */}
//       <Hero />

//       {/* Secciones scrolleables */}
//       <PedidosSection />

//       {/* Futuras secciones */}
//       {/* <RendicionesSection /> */}
//       {/* <ClientesSection /> */}

//       {/* Pie de página */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <main>

    {/* Portada principal */}
    <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img"/>

    {/* bLUR EFFECT */}

    <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#42ab11] -rotate-[30deg] -z-10"></div>
    <Header />
    <Hero />
    </main>

  );
}