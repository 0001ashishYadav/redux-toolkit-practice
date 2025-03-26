import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <section className="h-screen flex justify-center items-center">
        <section className="h-[50vh] max-w-[600px] w-[95%] mx-auto bg-green-100 rounded-2xl shadow-xl pb-5 overflow-auto scrollbar-hidden">
          <AddTodo />
          <Todo />
        </section>
      </section>
    </>
  );
}

export default App;
