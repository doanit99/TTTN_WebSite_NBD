import httpAxios from "../httpAxios";


function getAll(){
    return httpAxios.get('Contacts/GetContacts');
}

function getById(id){
    return httpAxios.get(`Contacts/GetContact/${id}`)
}

function create(data){
    return httpAxios.post('Contacts/PostContact',data);

}

function update(data, id){
    return httpAxios.put(`Contacts/PutContact/${id}`, data);
}

function remove(id){
    return httpAxios.delete(`Contacts/DeleteContact/${id}`);
}


const ContactService ={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,

}

export default ContactService;