import Link from "next/link";

export default function Navbar(props) {
  function toggler() {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("opacity-0");
    nav.classList.toggle("-translate-y-96");
  }

  return (
    <div>
      <nav className="container mx-auto p-3 flex flex-row items-center justify-between shadow-lg bg-blue-300 ">
        <h1 className="bg-myowncolor px-2 py-1 text-neutral-900 font-bold text-2xl">Collector</h1>

        <div onClick={toggler}>
        <button
          id="menu-btn"
          className="block  hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        </div>

        <div className="hidden space-x-3 md:block">
          <Link href="/">Home</Link>
          
          <Link href="/Form">AddNew</Link>
          <Link href="/About">About</Link>
        </div>
      </nav>
      <div className="md:hidden">
        <div
          id="menu"
          className="flex flex-col absolute items-center py-8 mt-10 space-y-6 font-bold bg-slate-500 w-auto self-center left-10 right-10 top-3 drop-shadow-md z-10 -translate-y-96 opacity-0 transition-all duration-500 ease-out"
        >
          <Link href="/"><span onClick={toggler}>Home</span></Link>
          <Link href="/Youtube"><span onClick={toggler}>About</span></Link>
          <Link href="/Websites"><span onClick={toggler}>Contact</span></Link>
          <Link href="/Form"><span onClick={toggler}>Add New</span></Link>
        </div>
      </div>
      <main>{props.children}</main>
    </div>
  );
}
