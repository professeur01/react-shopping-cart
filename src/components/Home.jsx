   import { useGetAllProductsQuery } from "../features/productsApi";
    const Home = () => {
       const { data, error, isLoading }  = useGetAllProductsQuery();
        return ( <h1>Home</h1> );
    }
     
    export default Home;