import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home() {
  return (
    <div>
      <h1>create car</h1>
      <CarForm />
      <SearchForm />
    </div>
  );
}
