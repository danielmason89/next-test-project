import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo heading-logo">
        <Image
          width={100}
          height={70}
          backgroundcolor={"white"}
          src="/images.png"
          alt="Pikachu"
        />
        <h1>Pokemon List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/pokemon">
        <a>Pokemon Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
