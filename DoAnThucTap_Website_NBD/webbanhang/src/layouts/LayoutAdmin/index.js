import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';

function LayoutAdmin() {
    return (
        <>
            <body id="page-top">
                {/*Page Wrapper*/}
                <div id="wrapper">
                    {/*Sidebar*/}
                    <Menu />
                    {/*End of Sidebar*/}

                    {/*Content Wrapper*/}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/*Main Content*/}
                        <div id="content">
                            {/*Topbar*/}
                            <Header />
                            {/*End of Topbar*/}

                            {/* Begin Page Content */}
                            <div className="container-fluid">
                                <Outlet />
                            </div>
                        </div>

                        {/* Footer */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2023</span>
                                </div>
                            </div>
                        </footer>
                        {/* End of Footer */}
                    </div>
                    {/* End of Main Content */}
                </div>
            </body>
        </>

    );
}
export default LayoutAdmin;