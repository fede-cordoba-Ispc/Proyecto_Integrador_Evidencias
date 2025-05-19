function Productlist(props){
    return (
 <section className="text-gray-400 bg-gray-500 body-font overflow-hidden max-w-4xl mx-auto border border-white">
  <div className="container px-5 py -1 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 className="text-white text-3xl title-font font-medium mb-4">{props.titulo}</h1>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-white">${props.precio}</span>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}
export default Productlist;