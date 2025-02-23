import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Image */}
      <img src="/ban.jpg" className="img-fluid w-100 pt-1" alt="Banner" />

      {/* Recipe Cards */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div className="col">
          <div className="card">
            <img src="/ban.jpg" className="card-img-top" alt="Veg Recipes" />
            <div className="card-body">
              <h5 className="card-title">Veg Recipes</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src="/ban.jpg"
              className="card-img-top"
              alt="Non-Veg Recipes"
            />
            <div className="card-body">
              <h5 className="card-title">Non-Veg Recipes</h5>
              <p className="card-text">
                Explore a variety of non-veg dishes with step-by-step guides.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="/ban.jpg" className="card-img-top" alt="Desserts" />
            <div className="card-body">
              <h5 className="card-title">Desserts</h5>
              <p className="card-text">
                Indulge in sweet treats with our collection of dessert recipes.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="/ban.jpg" className="card-img-top" alt="Drinks" />
            <div className="card-body">
              <h5 className="card-title">Drinks</h5>
              <p className="card-text">
                Refresh yourself with homemade drinks and beverages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
