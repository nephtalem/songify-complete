import SongList from "./SongList";
import { useResultContexts } from "../context/ResultContextProvider";
import Loading from "./Loading";
import LocalRoutes from "./LocalRoutes";

const Main = () => {
  const { isLoading } = useResultContexts();

  console.log(isLoading);
  return (
    <section className=" h-[calc(100vh-4rem)]  sm:w-full overflow-y-scroll">
      {isLoading ? <Loading /> : <LocalRoutes />}
    </section>
  );
};
export default Main;
