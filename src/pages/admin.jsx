import '../App.css';
import AdminTable from '../components/admintable';
import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

function Admin() {

    return (
        <>
          <Header/>
          <NavBar/>
          <AdminTable/>
          <Footer/>
        </>
    )
}

export default Admin