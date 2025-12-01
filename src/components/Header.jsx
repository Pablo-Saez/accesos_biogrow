import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  // Toggle menú mobile
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header
      className="
        flex justify-between items-center 
        py-4 px-6 sm:px-10 lg:px-16 
        bg-transparent z-50
      "
    >
      {/* LOGO + TITULO */}
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src="/logo.png"
          alt="Logo Biogrow Lifescience"
          className="
            w-10 h-10 sm:w-12 sm:h-12
            object-contain
            drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]
            rounded-full bg-black/30
            border border-emerald-500/40
          "
        />
        <h1
          className="
            text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide
            bg-gradient-to-r from-white via-white to-[#00ff88]
            bg-clip-text text-transparent
          "
        >
          Biogrow Lifescience
        </h1>
      </div>

      {/* MENU DESKTOP */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-10">
        <a
          href="https://clientes.biogrowsystem.com/"
          className="
            relative group text-sm lg:text-base tracking-wider text-gray-200
            transition-all
          "
        >
          <span
            className="
              inline-flex items-center gap-2 px-3 py-1 rounded-full
              bg-white/0 group-hover:bg-white/5
              border border-transparent group-hover:border-emerald-500/60
              shadow-none group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]
              transition-all duration-300
            "
          >
            <i className="bx bx-user-circle text-emerald-400 text-lg" />
            <span>Sistema de Clientes</span>
          </span>
          <span
            className="
              pointer-events-none absolute -bottom-1 left-0
              h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-emerald-600
              transition-all duration-300 group-hover:w-full
            "
          />
        </a>

        <a
          href="https://rendiciones.biogrowsystem.com/"
          className="
            relative group text-sm lg:text-base tracking-wider text-gray-200
            transition-all
          "
        >
          <span
            className="
              inline-flex items-center gap-2 px-3 py-1 rounded-full
              bg-white/0 group-hover:bg-white/5
              border border-transparent group-hover:border-emerald-500/60
              shadow-none group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)]
              transition-all duration-300
            "
          >
            <i className="bx bx-file text-emerald-400 text-lg" />
            <span>Sistema de Rendición de gastos</span>
          </span>
          <span
            className="
              pointer-events-none absolute -bottom-1 left-0
              h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-emerald-600
              transition-all duration-300 group-hover:w-full
            "
          />
        </a>
      </nav>

      {/* BOTÓN MOBILE */}
      <button
        onClick={toggleMobileMenu}
        className="
          md:hidden text-3xl p-2 text-gray-200
          active:scale-95 transition-transform
        "
      >
        <i className="bx bx-menu" />
      </button>

      {/* MENÚ MOBILE */}
      <div
        id="mobileMenu"
        className="
          hidden fixed top-16 left-0 right-0 bottom-0 
          bg-black/80 backdrop-blur-md
          flex flex-col items-center justify-start
          pt-10 gap-6
          md:hidden z-40
        "
      >
        <a
          href="https://clientes.biogrowsystem.com/"
          className="
            w-11/12 max-w-xs
            flex items-center justify-center gap-2
            rounded-xl border border-emerald-500/70 
            bg-black/60 px-4 py-3
            text-base font-medium text-gray-100 tracking-wide
            shadow-[0_0_18px_rgba(16,185,129,0.35)]
            hover:bg-emerald-500/10
            active:scale-95
            transition-all duration-200
          "
        >
          <i className="bx bx-user-circle text-emerald-400 text-xl" />
          <span>Sistema de Clientes</span>
        </a>

        <a
          href="https://rendiciones.biogrowsystem.com/"
          className="
            w-11/12 max-w-xs
            flex items-center justify-center gap-2
            rounded-xl border border-emerald-500/70 
            bg-black/60 px-4 py-3
            text-base font-medium text-gray-100 tracking-wide
            shadow-[0_0_18px_rgba(16,185,129,0.35)]
            hover:bg-emerald-500/10
            active:scale-95
            transition-all duration-200
          "
        >
          <i className="bx bx-file text-emerald-400 text-xl" />
          <span>Sistema de Rendición de gastos</span>
        </a>

        <a
          href="https://pedidos.biogrowsystem.com/"
          className="
            w-11/12 max-w-xs
            flex items-center justify-center gap-2
            rounded-xl border border-emerald-500/70 
            bg-black/60 px-4 py-3
            text-base font-medium text-gray-100 tracking-wide
            shadow-[0_0_18px_rgba(16,185,129,0.35)]
            hover:bg-emerald-500/10
            active:scale-95
            transition-all duration-200
          "
        >
          <i className="bx bx-file text-emerald-400 text-xl" />
          <span>Sistema de Pedidos Biogrow</span>
        </a>
      </div>
    </header>
  );
};

export default Header;