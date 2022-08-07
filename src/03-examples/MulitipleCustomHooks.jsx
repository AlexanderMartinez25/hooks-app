import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MulitipleCustomHooks = () => {
  const { increment, counter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button
        disabled={isLoading}
        onClick={() => increment(1)}
        className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  );
};
