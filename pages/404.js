import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops....</h1>
      <h2>That page doesn't exists</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
