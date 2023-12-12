import { Link } from "react-router-dom";
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"
const Protfolio = () => {
    return (
        <div className="pt-20 md:pt-10 px-10 lg:px-20">
            <h2 className='text-black text-3xl font-bold mb-5'>Creative Portfolio </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Link to={'https://tech-info-5ab1a.web.app/'} target="_blank" className="tooltip" data-tip="View Live" >
                    <img className="max-h-[500px]" src={img1} alt="" />
                </Link>
                <Link to={'https://brand-shop-a4585.web.app/'} target="_blank" className="tooltip" data-tip="View Live">
                    <img className="max-h-[500px]" src={img2} alt="" />
                </Link>
                <Link to={'https://hotel-booking-fc964.web.app/'} target="_blank" className="tooltip" data-tip="View Live">
                    <img className="max-h-[500px]" src={img3} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Protfolio;