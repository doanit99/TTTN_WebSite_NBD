import httpAxios from "../httpAxios";

//BackEnd
function getAll(){
    return httpAxios.get('ProductSales/GetProductSales');
}
function getById(id){
    return httpAxios.get(`ProductSales/GetProductSale/${id}`)
}
function create(data){
    return httpAxios.post('ProductSales/PostProductSales',data);

}
function update(data, id){
    return httpAxios.put(`ProductSales/PutProductSales/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`ProductSales/DeleteProductSales/${id}`);
}


const ProductSaleService ={
    
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
 
}

export default ProductSaleService;