import Pokemon from ".";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((poke) => {
    return {
      params: { id: poke.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { poke: data },
  };
};

const Details = ({ poke }) => {
  return (
    <div>
      <h1>{poke.name}</h1>
      <p>{poke.email}</p>
      <p>{poke.website}</p>
      <p>{poke.address.city}</p>
    </div>
  );
};

export default Details;
