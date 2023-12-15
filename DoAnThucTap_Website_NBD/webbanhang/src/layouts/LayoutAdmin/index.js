import { Outlet } from 'react-router-dom';
import Menu from './menu';


function LayoutAdmin() {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>

    );
}
export default LayoutAdmin;