import Link from "next/link";

export default function Navbar(props) {
  function toggler() {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  }

  return (
    <div>
      <nav className="container mx-auto p-3 flex flex-row  justify-between shadow-lg bg-blue-300 ">
        <div className="bg-myowncolor ">Logo</div>

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
          className="hidden flex-col absolute items-center py-8 mt-10 space-y-6 font-bold bg-slate-500 w-auto self-center left-10 right-10 top-3 drop-shadow-md z-10"
        >
          <Link href="/">Home</Link>
          <Link href="/Youtube">Youtube</Link>
          <Link href="/Websites">Websites</Link>
          <Link href="/Form">AddNew</Link>
        </div>
      </div>
      <main>{props.children}</main>
    </div>
  );
}
