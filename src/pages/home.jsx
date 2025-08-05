import '../App.css';
import HomeTable from '../components/hometable';
import Header from '../components/header';
import Footer from '../components/footer';
import '../components/navbar';

function Home() {

    return (
        <>
          <Header/>
          <HomeTable/>
          <Footer/>
        </>
    )
}

export default Home