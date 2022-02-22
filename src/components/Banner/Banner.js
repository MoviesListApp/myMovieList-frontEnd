import { useLocation } from "react-router-dom";
function Banner(props){
    const location = useLocation();
    console.log(location.pathname);
    return(
        <div className='banner'>
            <div className='overlay'></div>
            <div className='banner-content'>
                <h3 className='banner-title'>Your Experiences.<br></br>A world of guests.</h3>
                <p className='banner-parg'>Join us to sell your tours, activities and attraction tickets and promote your business to millions of travelers worldwide.</p>
                <a className='get-start-link' href={location.pathname.includes("/favorite")?"#sec2":"#sec1"}>Get started</a>
            </div>        
        </div>
    )
}

export default Banner;