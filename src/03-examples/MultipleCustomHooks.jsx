import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote } from ".";

export const MultipleCustomHooks = () => {
  const { increment, counter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

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
