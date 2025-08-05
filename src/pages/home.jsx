import '../App.css';
import '../components/hometable';
import '../components/header';
import '../components/footer';
import '../components/navbar';
import HomeTable from '../components/hometable';

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