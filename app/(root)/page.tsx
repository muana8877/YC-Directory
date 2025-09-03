import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query ?? "";

  return (
    <section className="pink_container">
      <h1 className="heading text-2xl">
        Pitch Your Startup,
        <br />
        Connect with entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
      </p>
      <SearchForm query={query} />
    </section>
  );
}
