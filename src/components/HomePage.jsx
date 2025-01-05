import { Carousel, HomePageCard } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[800px] max-w-[1920px] m-auto bg-purple-600">
        TopBAR
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"/images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />

          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"/images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />

          <HomePageCard
            title={"Unlimited Streaming"}
            img={"/images/home_grid_3.jpg"}
            link={"Find out more"}
          />

          <HomePageCard
            title={"More titles to explore"}
            img={"/images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />

          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"/images/home_grid_5.jpg"}
            link={"See more"}
          />

          <HomePageCard
            title={"Spring Sale"}
            img={"/images/home_grid_6.jpg"}
            link={"See the deals"}
          />

          <HomePageCard
            title={"Echo Buds"}
            img={"/images/home_grid_7.jpg"}
            link={"See more"}
          />

          <HomePageCard
            title={"Family Plan : 3 months free"}
            img={"/images/home_grid_8.jpg"}
            link={"Learn more"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
