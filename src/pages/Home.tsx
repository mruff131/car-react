import Background from '../assets/images/cars.jpg';

function Home() {
  return (
    <div 
      className='flex justify-center items-center h-screen bg-cover bg-fixed bg-center'
      style={{ 
        backgroundImage: `url(${Background})`,
      }} 
    >
      <div className='p-5 bg-white bg-opacity-50 text-black rounded'>
        <h3 className='text-center'>Welcome to the Dealership App</h3>
      </div>
    </div>       
  );
}

export default Home;


