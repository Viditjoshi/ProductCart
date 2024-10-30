import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowDownRight } from "react-icons/bs";

const ProductComponent = ({ url, limit }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${url}?limit=${limit}&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts(data.products);
                setLoading(false);

            }
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [count]);

    return (
        <div className="w-100vw">
            <div className="flex flex-col md:flex-row w-[100%] justify-between items-center p-5">
                <div className="text-center md:text-left pl-5 text-sm font-bold">
                    <p className="font-font-2">2024</p>
                    <p className="font-font-1">COLLECTION</p>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-font-1 text-center md:text-left">
                    New Fall Collection
                </h1>
                <div className="flex font-extrabold items-center justify-center gap-2 pr-5 mt-3 md:mt-0">
                    <label htmlFor="" className="font-font-1">Cart</label>
                    <FiShoppingBag size={20} />
                </div>
            </div>
            <div className="bg-slate-600 text-white p-5 text-center" onClick={() => setCount(count + 1)}>
                Next Product
            </div>
            <div className="flex justify-center p-5 flex-col gap-5">
                {loading ? <div>Loading Data Please wait...</div> : (
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-100vw">
                        {products && products.map((product, index) => (
                            <div key={index} className="border-2 border-black p-5  pb-8 h-full lg:h-[50vh] sm:h-[25vh] w-full relative">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="font-bold">{product.brand}</p>
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="font-font-2">
                                        <p className="line-through">${product.price}</p>
                                        <p>${product.discountPercentage}</p>
                                    </div>
                                </div>
                                <div className="w-full h-[70%] relative">
                                    <img src={product.images} className="w-full h-full object-contain" alt={product.title} />
                                </div>
                                <div className="absolute bottom-2 right-0  bg-opacity-60 px-3 py-1 rounded-full">
                                    <BsArrowDownRight size={50} />
                                </div>
                            </div>

                        ))}
                    </div>
                )}
                {error && <div>Something went wrong!</div>}

            </div>
        </div>
    );
};

export default ProductComponent;
