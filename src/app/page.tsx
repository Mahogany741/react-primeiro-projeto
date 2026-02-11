import { GeoForm } from "../components/GeoForm";
import { Person } from "../components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo</h1>
      <h3>Outro texto qualquer</h3>

      <Person 
        name="Elon Musk"
        avatar="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-1024x1024.jpg"
        roles={["CEO da Tesla", "CEO SpaceX"]}
      />

      <Person
        name="Jeff Bezos"
        avatar="https://investidorsardinha.r7.com/wp-content/uploads/2020/09/jeff-bezos-a-historia-do-homem-mais-rico-do-mundo-1-scaled.jpg"
        roles={['Ceo Amazon', 'Ceo Blue Origin']}
      />

      <Person
        name='Avatar teste'
        roles={['Ceo Teste', 'Ceo Teste 2']}
      />

    </div>
  );
}

export default Page;