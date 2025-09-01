import Banner from './Banner/Banner';
import CallUs from './CallUs/CallUs';
import Category from './Category/Category';
import ChefRecommends from './ChefRecommends/ChefRecommends';
import ChefService from './ChefService/ChefService';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <ChefService></ChefService>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;