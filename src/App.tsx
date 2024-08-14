import { TablaProductos } from "./components/TablaProductos";
import { PRODUCTOS } from "./components/Productos";

export const App = () => {
  return (
    <>
      <TablaProductos productos={PRODUCTOS} />;
    </>
  );
};
