import Body from "./components/Body";
import Head from "./components/Head";

function App() {
  return (
    <div className="App text-center font-bold">
      <Head />
      <Body />
      {/* 
      Head
      Body
      Sidebar
        - MenuItems
      MainContainer
        - ButtonsList
        - VideoContainer
          - VideoCard
      */}
    </div>
  );
}

export default App;
