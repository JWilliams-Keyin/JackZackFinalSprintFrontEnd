import '../App.css';
import HomeTable from '../components/hometable';
import Header from '../components/header';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

function Home() {

    return (
        <>
          <Header/>
          <NavBar/>
          <HomeTable/>
          <Footer/>
        </>
    )
}

export default Home