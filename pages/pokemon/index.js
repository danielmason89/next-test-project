import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <h1>All Pokemon</h1>
      {pokemon.map((poke) => (
        <Link href={"/pokemon/" + poke.id} key={poke.id}>
          <a className={styles.single}>
            <h3>{poke.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Pokemon;
