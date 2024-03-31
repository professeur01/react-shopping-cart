import { productsApi, useGetAllProductsQuery } from "../features/productsApi";
console.log(productsApi)
const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>Welcome to our store!</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product" >
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button>Add To Card</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
