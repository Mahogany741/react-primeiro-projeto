import { GeoForm } from "../components/GeoForm";
import { Person } from "../components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo</h1>
      <h3>Outro texto qualquer</h3>

      <GeoForm />
      <Person />

    </div>
  );
}

export default Page;