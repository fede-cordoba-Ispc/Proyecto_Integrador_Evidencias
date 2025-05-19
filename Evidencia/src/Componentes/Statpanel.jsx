function Statpanel(props){
    return(
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Estadísticas
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Estos valores se obtienen de los filtros aplicados
      </p>
    </div>

    <div className="flex flex-wrap">
      {["Productos Totales", "Precio Máximo", "Precio Mínimo", "Suma de Precios","Titulo >20 caracteres","Descuento Promedio","Precio Promedio"].map((titulo, i) => (
        <div
          key={i}
          className="xl:w-1/7 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-blue-300 border-opacity-60"
        >
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{titulo}</h2>
          <p className="leading-relaxed text-base mb-4">
          {i=== 0 && (<p className="leading-relaxed text-base mb-4"> {props.total}</p>)}
          {i=== 1 && (<>
            <p className="leading-relaxed text-base mb-4"> $ {props.max}</p>
            <p className="text-sm text-gray-900">Producto: {props.maxtit}</p>
          </>)}
          {i=== 2 && (<>
            <p className="leading-relaxed text-base mb-4"> $ {props.min}</p>
            <p className="text-sm text-gray-900">Producto: {props.mintit}</p>
          </>)}
          {i=== 3 && (<p className="leading-relaxed text-base mb-4"> $ {props.suma}</p>)}
          {i=== 4 && (<p className="leading-relaxed text-base mb-4">  {props.tit}</p>)}
          {i=== 5 && (<p className="leading-relaxed text-base mb-4"> $ {props.desc}</p>)}
          {i=== 6 && (<p className="leading-relaxed text-base mb-4"> $ {props.prom}</p>)}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
}
export default Statpanel;