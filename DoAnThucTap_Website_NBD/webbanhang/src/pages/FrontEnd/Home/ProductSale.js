import "../../../index.css"
import { useState } from "react";
import ProductService from "../../../services/ProductServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductItemSale from "../Product/ProductItemSale";


const containerStyle = {
    background: 'url("https://cdn2.cellphones.com.vn/x/media/catalog/product/h/o/hot-sale-giang-sinh_3.png") 0% 0%/ cover no-repeat',
};

function ProductSale() {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const [products, setProduct] = useState([]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    function calculateTimeRemaining() {
        // Calculate the time remaining logic here
        // For example, you can set a future date and calculate the difference
        const endTime = new Date("2024-01-31T00:00:00Z"); // Replace with your actual end time
        const currentTime = new Date();

        const timeDifference = endTime - currentTime;

        if (timeDifference <= 0) {
            // Countdown has ended, you may want to handle this case
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }
    
    useEffect(function () {
        (async function () {
            try {
                await ProductService.GetProductSale().then(function (result) {
                    setProduct(result.data);
                });
            } catch (error) {

                setProduct([]);


            }
        })();
    }, []);

    if (products.length != 0) {
        return (
            <div className="container my-3" style={containerStyle}>
                <div className="row">
                    <div className="col">
                        <div className="box-title">
                        <h1 className="pt-2" style={{ color: 'white'}}>Sản phẩm sale</h1>

                        </div>
                    </div>
                    <div className="col p-3">
                        <div className="countdown d-flex flex-column">
                            
                            <p style={{ color: 'white'}}>Kết thúc sau: {`${timeRemaining.days} days ${timeRemaining.hours} hours ${timeRemaining.minutes} minutes ${timeRemaining.seconds} seconds`}</p>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        {products.map(function (product, index) {
                            return <ProductItemSale product={product} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductSale;
