import { TopNav } from './components/TopNav'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './Routes';

function App() {
  return (
    <>
      <TopNav />
      <AppRoutes />
    </>
  );
}

export default App;
