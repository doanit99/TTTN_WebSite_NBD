import "../../../index.css"
import { Link } from 'react-router-dom';
import { urlImageFE } from '../../../config';
function ProductItemSale(props) {
    const shortenedName = props.product.nameSale.length > 20 ? `${props.product.nameSale.substring(0, 20)}...` : props.product.nameSale;
    const discountPercentage = props.product.discountSale / 100;
    const pricesale = props.product.priceSale - (props.product.priceSale * discountPercentage);
    return (
       
            <div className="col-md-3 pt-4 pb-4">
                <div className="product-item border" style={{ borderTopRightRadius: '15px', background:'white' }}>
                <div className="discount-percentage" style={{ position: 'absolute', top: 0, right: 0, background: 'red', color: 'white', padding: '5px' }}>Giảm {props.product.discountSale}%</div>
                    <Link to={"/chi-tiet-san-pham/"+props.product.productId}>
                        <img src={urlImageFE+"products/"+ props.product.imageSale} className="img-fluid" alt="hinh san pham"/>
                    </Link>
                    <Link to={"/chi-tiet-san-pham/"+props.product.productId} style={{textDecoration:'none', color:"black"}}>
                   
                    <h3 className="fs-5 p-2 text-center product-name">{shortenedName}</h3>
                    </Link>
                    <div className="product-price p-2">
                        <div className="row">
                            {/* <div className="col-md-6">
                                <strong className="text-danger fs-4 my-text">{props.product.price_sale.toLocaleString()}&#x20ab;</strong>
                            </div> */}
                            <div className="col-md-6 fs-6 pt-2 float-end">                               
                                <strong className="pr-3" style={{ color: 'red', fontSize:20 }}>{pricesale.toLocaleString()}&#x20ab;</strong>
                                <del>{props.product.priceSale.toLocaleString()}&#x20ab;</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    );

}
export default ProductItemSale;