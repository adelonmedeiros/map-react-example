import "./App.css";

const users = [
  {
    name: "João",
    address: "Rua A, 123",
    age: 25,
    isAdmin: true,
  },
  {
    name: "Maria",
    address: "Rua B, 456",
    age: 32,
    isAdmin: false,
  },
  {
    name: "Pedro",
    address: "Rua C, 789",
    age: 18,
    isAdmin: false,
  },
  {
    name: "Ana",
    address: "Rua D, 1011",
    age: 27,
    isAdmin: true,
  },
  {
    name: "Lucas",
    address: "Rua E, 1213",
    age: 21,
    isAdmin: false,
  },
];

{
  /*
O código acima é a definição de um array de objetos chamado users. Cada objeto contém quatro chaves: name, address, age e isAdmin.

Cada objeto representa um usuário fictício com suas informações pessoais. O primeiro usuário, por exemplo, é chamado João, tem 25 anos, é administrador (isAdmin: true) e mora na Rua A, número 123.

Os demais objetos seguem o mesmo padrão de definição de propriedades, com informações de nome, endereço, idade e se é ou não um administrador. Esses objetos podem ser utilizados para diversas finalidades em uma aplicação que precise de informações de usuários, como por exemplo exibição de informações em uma lista, busca por nome ou idade, entre outras.
*/
}

function App() {
  return (
    <>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            {user.name}, {user.age}
          </div>
        ))}
      </div>

      {/* 
      Não é recomendado utilizar o index com key, pois o index pode mudar de posição e o react não consegue identificar a mudança
      
      Sem utilizar o map:

      <div>
        {users[0].name}, {users[0].age}
      </div>
      <div>{users[1].name}</div>
      <div>{users[2].name}</div>
      <div>{users[3].name}</div>
      <div>{users[4].name}</div> 
      
      */}
    </>
  );
}

export default App;
