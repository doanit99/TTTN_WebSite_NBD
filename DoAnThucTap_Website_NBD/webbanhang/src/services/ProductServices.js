import httpAxios from "../httpAxios";

//BackEnd
function getAll(){
    return httpAxios.get('Products/GetProducts');
}
function getById(id){
    return httpAxios.get(`Products/GetProduct/${id}`)
}
function create(data){
    return httpAxios.post('Products/PostProduct',data);

}
function update(data, id){
    return httpAxios.put(`Products/PutProduct/${id}`, data);
}
function remove(id){
    return httpAxios.delete(`Products/DeleteProduct/${id}`);
}
//FrontEnd

const ProductService ={
    
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}

export default ProductService;