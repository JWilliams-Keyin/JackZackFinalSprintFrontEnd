import {Link} from 'react-router-dom';
import '../App.css';

function NavBar() {
    return(
        <div className = 'nav'>
            <div className='navLeft'>
                <h2>
                    <Link className = 'links' to = '/'>Home</Link>
                </h2>
            </div>

            <div className='navRight'>
                <h2>
                    <Link className = 'links' to = 'admin'>Admin Dashboard</Link>
                </h2>
            </div>
            
        </div>
    )
}

export default NavBar