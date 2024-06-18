import { PRODUCTOS } from "./Productos";
import "../style/styling.css";

interface TablaProps {
  productos: typeof PRODUCTOS;
}

export const TablaProductos = ({ productos }: TablaProps) => {
  const categorias = {
    Cafeteria: "Cafetería",
    Panaderia: "Panadería",
    Dulces: "Dulces",
  };
  const labels = ["Nombre", "Precio", "Stock"];

  const renderProducts = (categoria: string) => {
    return productos
      .filter((producto) => producto.categoria === categoria)
      .map((producto) => {
        return (
          <div className="divProductsInfo">
            {producto.stock === 0 ? (
              <del>{producto.nombre}</del>
            ) : (
              <label>{producto.nombre}</label>
            )}
            <label>{producto.precio}</label>
            <label>{producto.stock}</label>
          </div>
        );
      });
  };

  return (
    <>
      <div>
        <div className="labels">
          {labels.map((label) => (
            <div>{label}</div>
          ))}
        </div>
        <section className="sectionTab">
          <section className="sections">
            <section className="section1">
              {renderProducts(categorias.Cafeteria).length >= 1 ? (
                <>
                  <h1 className="h1">{categorias.Cafeteria}</h1>
                  {renderProducts(categorias.Cafeteria)}
                </>
              ) : (
                <></>
              )}
            </section>
            <section className="section2">
              {renderProducts(categorias.Panaderia).length >= 1 ? (
                <>
                  <h1 className="h1">{categorias.Panaderia}</h1>
                  {renderProducts(categorias.Panaderia)}
                </>
              ) : (
                <></>
              )}
            </section>
            <section className="section3">
              {renderProducts(categorias.Dulces).length >= 1 ? (
                <>
                  <h1 className="h1">{categorias.Dulces}</h1>
                  {renderProducts(categorias.Dulces)}
                </>
              ) : (
                <></>
              )}
            </section>
          </section>
        </section>
      </div>
    </>
  );
};
