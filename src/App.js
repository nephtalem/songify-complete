import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex max-sm:flex-col">
        <SideBar />
        <Main />
      </div>
    </>
  );
};
export default App;
