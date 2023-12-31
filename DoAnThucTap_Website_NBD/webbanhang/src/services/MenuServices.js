import httpAxios from "../httpAxios";


function getAll(){
    return httpAxios.get('Menus/GetMenus');
}

function getById(id){
    return httpAxios.get(`Menus/GetMenu/${id}`)
}

function create(data){
    return httpAxios.post('Menus/PutMenu',data);

}

function update(data, id){
    return httpAxios.put(`Menus/PostMenu/${id}`, data);
}

function remove(id){
    return httpAxios.delete(`Menus/DeleteMenu/${id}`);
}

//frontend
function getByParentId(parentId){
    return httpAxios.get(`Menus/GetMenuByParentId/${parentId}`);
}

const MenuService ={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    getByParentId:getByParentId
}

export default MenuService;