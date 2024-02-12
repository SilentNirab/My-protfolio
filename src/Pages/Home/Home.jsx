import { Link } from 'react-router-dom';
import image from '../../assets/images/nirab.jpg'
import { FaFacebook, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
const Home = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center space-x-10 px-5'>
            <div className="">
                <img className='w-72 h-72 border-8 border-[#6f6f6f] rounded-full' src={image} alt="developer" />
            </div>
            <div className=" md:w-96 space-y-5 pt-5 text-center md:text-left">
                <h1 className='text-5xl text-black font-bold'>MD NIRAB MIA</h1>
                <p className='text-gray-500'>I am a Web Developer at heart and create features that are best suited for the job at hand.</p>
                <ul className='flex justify-center md:justify-start space-x-4 text-xl'>
                    <li><Link to={'https://github.com/SilentNirab'}><FaGithub></FaGithub></Link></li>
                    <li><Link to={'https://www.facebook.com/silentnirab2/'}><FaFacebook></FaFacebook></Link></li>
                    <li><Link to={'https://twitter.com/silent_nirab'}><FaSquareXTwitter /></Link></li>
                    <li><Link to={'https://www.linkedin.com/in/md-nirab-mia-238a04202/'}><FaLinkedin></FaLinkedin></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;