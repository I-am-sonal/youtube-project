import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import DemoUseMemo from "./components/DemoUseMemo";
import DemoUseRef from "./components/DemoUseRef";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "demousememo",
          element: (
            <>
              <DemoUseMemo />
              <DemoUseRef />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App text-center">
        <Head />
        <RouterProvider router={appRouter} />
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
    </Provider>
  );
}

export default App;
