import Pokemon from ".";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json;

  const paths = data.map((ninjs) => {
    return {
      params: { id: Pokemon.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default Details;
