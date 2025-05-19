
import './App.css'
import axios from "axios";
// importa el componente propios
import Tarjeta from './Componentes/Tarjeta'
import Productlist from './Componentes/Productlist'
import Statpanel from './Componentes/Statpanel';

// importa useEffect y useState
import {useEffect,useState} from "react";

function App() {
// definicion de estados
  const [products,setProducts]= useState([]);
  const [search,setSearch]= useState("");
  const [show,setShow] = useState(true);

// conexion a la API para pedir datos
 useEffect(()=>{
    axios.get("https://dummyjson.com/products?limit=50").then((res)=>{
     setProducts(res.data.products);
    }); 
 },[]);

// filtra los productos obtenidos de la API
const filteredproducts = products.filter((p)=>p.title.toLowerCase().includes(search.toLocaleLowerCase()));

//Estadisticas
//total de productos que fueron filtrados
const totalProduct= filteredproducts.length;
//precio maximo entre los productos filtrados
const maxProduct =filteredproducts.length > 0 ? Math.max(...filteredproducts.map((p)=>p.price)) 
                  :  filteredproducts.length == 0 ? 0 : Math.max(...products.map((p)=>p.price));
const productoMasCaro = filteredproducts.find(p => p.price === maxProduct);
const tituloMasCaro = productoMasCaro?.title;

// precio minimo entre los productos filtrados
const minProduct = filteredproducts.length > 0 ? Math.min(...filteredproducts.map((p)=>p.price)) 
                  : ( filteredproducts.length == 0 ? 0 : Math.min(...products.map((p)=>p.price)));
const productoMasbarato = filteredproducts.find(p => p.price === minProduct);
const tituloMasbarato = productoMasbarato?.title;
// titulo de mas de 20 caracteres
const productosTitulo20 = filteredproducts.filter((p) => p.title.length > 20).length;
// Suma de precios filtrados 
const sumaPrecios = filteredproducts.reduce((acum, p) => acum + p.price, 0);
// Precio promedio filtrado
const PrecioProm = sumaPrecios/totalProduct;
// Promedio de Descuentos:
const descuentoTotal = filteredproducts.reduce((acum, p) => acum + p.discountPercentage, 0);
const promedioDescuentos = filteredproducts.length > 0 ? descuentoTotal/totalProduct: 0;

return (
    <>
       <Tarjeta />

      < input 
        type="Text" 
        placeholder="Buscar producto" 
        value ={search}
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
        // estilos del input
        className="text-white ml-35 bg-gray-800 px-5 py-2 rounded ml-80 mb-4"
      />
        
        <u1>
          {filteredproducts.map((p) => (
            <Productlist
            titulo={p.title}
            precio={p.price}
            
          />
          ))}
        </u1>
         {/* Renderizacion Condicional*/}
         {filteredproducts.length === 0 && (<div style={{ marginLeft: '600px' }}>
          No se encontraron Productos
         </div>)}
         
          {/* Carga los productos*/}
       <Statpanel total={totalProduct} 
                  max={maxProduct} 
                  min={minProduct}
                  suma={sumaPrecios}
                  tit={productosTitulo20}
                  maxtit={tituloMasCaro}
                  mintit={tituloMasbarato}
                  desc={promedioDescuentos}
                  prom={PrecioProm}
                  />
       
       
    </>
  );
}

export default App
