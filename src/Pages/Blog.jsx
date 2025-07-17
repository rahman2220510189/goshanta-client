import { Link } from 'react-router-dom';
import bg from '../assets/Photo/bg2.jpeg'
    const Category = ({name, icon}) =>(
        <div className="flex items-center gap-2 hover:text-orange-600 cursor-pointer transition">
         <span className="text-2xl">{icon}</span>
         <span className="text-sm font-medium">{name}</span>
        </div>
    )
const Blog = () => {


 
    return (
        <div className="relative bg-cover bg-center h-[90vh] animate-bgFadeZoom" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
             <div className="relative z-10 flex flex-col justify-center items-center text-white h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb- mt-20">Destinations</h1>
        <p className="text-lg md:text-xl mb-20 mt-5">Amazing Destinations in the world</p>

       
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 bg-white rounded-lg p-6 shadow-xl w-full max-w-5xl text-gray-800">
          <Link to='/packages'><Category name="Kano package" icon="🚣‍♂️" /></Link>
         <Link to='/historical '><Category name="Historical destination" icon="🏰" /></Link>
         <Link to ='/camping'> <Category name="Camping package" icon="🏕️" /></Link>
          <Link to ='/asia'> <Category name="Asia destination" icon="🛕" /></Link>
          <Link to ='/desert'><Category name="Desert oasis package" icon="🏜️" /></Link>
         <Link to = '/hiking'>     <Category name="Hiking package" icon="🏔️" /></Link>
         <Link to ='/eropa'>   <Category name="Eropa destination" icon="🗼" /></Link>
         <Link to ='/beach'>  <Category name="Beach package" icon="🏖️" /></Link>
         </div>
         </div>
        </div>
        
    );
};

export default Blog;