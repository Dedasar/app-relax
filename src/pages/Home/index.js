import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Category, {categories, filterCategory} from "../../components/Category";
import Carousel from "../../components/Carousel";

function Home() {
    return (
    <>
      <Header />  
      <Banner />
      <Container>
     
        {categories.map((category, index) => (     
          <Category key={index} category={category}>
           <Carousel>
            {filterCategory(category).map(video => (
              <Card key={video.id} id={video.id} cover={video.cover} />
            ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}
export default Home;
