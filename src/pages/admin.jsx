import '../App.css';
import AdminTable from '../components/admintable';
import AdminDelete from '../components/admindelete';
import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

function Admin() {

    return (
        <>
          <Header/>
          <NavBar/>
          <AdminTable/>
          <AdminDelete/>
          <Footer/>
        </>
    )
}

export default Admin