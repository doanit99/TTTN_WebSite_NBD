import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductServices";
import CategoryService from "../../../services/CategoryServices";
import { useParams } from "react-router-dom";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import Productitem from "../Product/ProductItem";

function ProductCategory() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const infocategory = await CategoryService.getById(id);
                const catid = infocategory.data.id;
                setTitle(infocategory.data.name);
                const infoproduct = await ProductService.getProductByCategoryParent(catid);
                setProducts(infoproduct.data);
            } catch (error) {
                setProducts([]);
            }
        })();

    }, [id]);
    if (products.length === 0) {
        return (
            <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-3">
                            <ListCategory />
                            {/* <ListBrand /> */}
                        </div>
                        <div className="col-md-9">
                            <p className="text-center">Không có sản phẩm</p>
                        </div>
                        
                    </div>
                </div>           
            </section >
        );
    }
    else {
        return (
            <section className="maincontent">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-3">
                            <ListCategory />
                            {/* <ListBrand /> */}
                        </div>
                        <div className="col-md-9">
                            <h3 className="text-center">{title}</h3>
                            <div className="row">
                                {products.map(function (product, index) {
                                    return <Productitem product={product} key={index} />
                                })}
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default ProductCategory;