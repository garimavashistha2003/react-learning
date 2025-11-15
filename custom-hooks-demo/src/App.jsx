import useFetch from "./hooks/useFetch";
import UserList from "./components/UserList";

function App() {
  const { data, isPending, iserror } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (isPending) {
    return <h1>Loading....</h1>;
  }
  if (iserror) {
    return <h1>{iserror}</h1>;
  }
  return (
    <>
      <UserList users={data} />
    </>
  );
}

export default App;
