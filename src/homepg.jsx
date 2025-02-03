import './homepg.css'
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const handlelogin = () =>{
        navigate("/login");
    };
    return(
        <>
        <header>
        <h1>Judiciary System Dashboard</h1>
        <nav>
          <ul>
            <li>Public</li>
            <li onClick={handlelogin}>Clerk</li>
            <li onClick={handlelogin}>Lawyer</li>
            <li onClick={handlelogin}>Judge</li>
            <li onClick={handlelogin}>Admin</li>
          </ul>
        </nav>
      </header>
      </>
    )
}

export default Home