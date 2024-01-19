import httpAxios from "../httpAxios";


function getAll(){
    return httpAxios.get('Banners/GetBanners');
}

function getById(id){
    return httpAxios.get(`Banners/GetBanner/${id}`)
}

function create(data){
    return httpAxios.post('Banners/PostBanner',data);

}

function update(data, id){
    return httpAxios.put(`Banners/PutBanner/${id}`, data);
}

function remove(id){
    return httpAxios.delete(`Banners/DeleteBanner/${id}`);
}


const BannerService ={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,

}

export default BannerService;