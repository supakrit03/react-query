import { useQuery, useQueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { getTodos } from "./api/todo";

function Todos() {
  // Queries
  const { data, isLoading, refetch } = useQuery("todos", getTodos);

  if (isLoading) return <div>Loading..</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch todos</button>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      {/* 
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button> */}
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default Todos;
