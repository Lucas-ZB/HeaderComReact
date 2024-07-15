import Header from './Header';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Bem-vindo ao Meu Site</h1>
        <p>Conteúdo da página vai aqui.</p>
        <AnotherApp />
      </main>
    </div>
  );
};

function AnotherApp() {
  return (
    <div>
      <ToDoList />
    </div>
  );
}

export default App;
