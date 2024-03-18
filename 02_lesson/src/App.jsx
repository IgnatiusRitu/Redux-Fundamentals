import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";

const App = () => {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
};

export default App;
