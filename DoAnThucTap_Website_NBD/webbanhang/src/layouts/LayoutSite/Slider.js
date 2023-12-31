import Category from "./Category";


function Slider() {
 
    return (
        <>
            {/* Begin Slider With Category Menu Area */}
            <div className="slider-with-banner">
                <div className="container">
                    <div className="row">
                        {/* Begin Category Menu Area */}
                        <div className="col-lg-3">
                            {/*Category Menu Start*/}
                            <Category />
                            {/*Category Menu End*/}
                        </div>
                        {/* Category Menu Area End Here */}
                        {/* Begin Slider Area */}
                        <div className="col-lg-6 col-md-8">
                            <div className="slider-area slider-area-3 pt-sm-30 pt-xs-30 pb-xs-30">
                                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">                                   
                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <img src="frontend/images/slider/7.jpg" className="d-block w-100" alt="Slider Image" />
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>Sale Offer</h5>
                                                <h2>Work Desk Surface Studio 2018</h2>
                                                <h3>Starting at <span>$1599.00</span></h3>
                                                <div className="default-btn slide-btn">
                                                    <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="frontend/images/slider/8.jpg" className="d-block w-100" alt="Slider Image" />
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>Sale Offer</h5>
                                                <h2>Work Desk Surface Studio 2018</h2>
                                                <h3>Starting at <span>$1599.00</span></h3>
                                                <div className="default-btn slide-btn">
                                                    <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img src="frontend/images/slider/9.jpg" className="d-block w-100" alt="Slider Image" />
                                            <div className="carousel-caption d-none d-md-block text-dark">
                                                <h5>Sale Offer</h5>
                                                <h2>Work Desk Surface Studio 2018</h2>
                                                <h3>Starting at <span>$1599.00</span></h3>
                                                <div className="default-btn slide-btn">
                                                    <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>

                                    {/* Single Slide Area End Here */}
                                    {/* Begin Single Slide Area */}
                                    {/* <div className="single-slide align-center-left animation-style-02 bg-8">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                            <h2>Work Desk Surface Studio 2018</h2>
                                            <h3>Starting at <span>$1599.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* Single Slide Area End Here */}
                                    {/* Begin Single Slide Area */}
                                    {/* <div className="single-slide align-center-left animation-style-01 bg-9">
                                        <div className="slider-progress"></div>
                                        <div className="slider-content">
                                            <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                            <h2>Phantom 4 Pro+ Obsidian</h2>
                                            <h3>Starting at <span>$809.00</span></h3>
                                            <div className="default-btn slide-btn">
                                                <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* Single Slide Area End Here */}
                                </div>
                            </div>
                        </div>
                        {/* Slider Area End Here */}
                        {/* Begin Li Banner Area */}
                        <div className="col-lg-3 col-md-4 text-center pt-sm-30">
                            <div className="li-banner">
                                <a href="#">
                                    <img src="frontend/images/banner/3_1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="li-banner mt-15 mt-sm-30 mt-xs-25 mb-xs-5">
                                <a href="#">
                                    <img src="frontend/images/banner/3_2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        {/* Li Banner Area End Here */}
                    </div>
                </div>
            </div>
            {/* Slider With Category Menu Area End Here */}
        </>
       
    )
}
export default Slider;