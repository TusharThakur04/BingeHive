import theme from "./styles/theme/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, ShowDetail, Shows, Search } from "./screens";
import routeConstants from "./constants/routeConstants";
import { Layout } from "./components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/GlobalStyles";

const route = createBrowserRouter([
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
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={route} />
      </ThemeProvider>
    </>
  );
}

export default App;
