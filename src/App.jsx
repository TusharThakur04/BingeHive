import { Home, ShowDetail, Shows, Search } from "./screens";
import routeConstants from "./constants/routeConstants";
import { Layout } from "./components/layout";

const routes = [
  {
    path: routeConstants.HOME, // "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: routeConstants.SHOWS,
        element: <Shows />,
      },
      {
        path: `${routeConstants.SHOWS}/:id`,
        element: <ShowDetail />,
      },
      {
        path: routeConstants.SEARCH,
        element: <Search />,
      },
    ],
  },
];

function App() {
  return <></>;
}

export default App;
