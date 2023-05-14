import React from 'react'

const Home = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <h1>Mobiles for Everyone</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src="/images/iphone-12.jpg" className="card-img-top" alt="iPhone 12" />
            <div className="card-body">
              <h5 className="card-title">iPhone 12</h5>
              <p className="card-text">
                The iPhone 12 has it all - 5G, A14 Bionic, Night mode cameras, and more.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src="/images/samsung-galaxy-s21.jpg"
              className="card-img-top"
              alt="Samsung Galaxy S21"
            />
            <div className="card-body">
              <h5 className="card-title">Samsung Galaxy S21</h5>
              <p className="card-text">
                The Samsung Galaxy S21 is the ultimate 5G smartphone with its stunning camera and
                impressive specs.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <h2>Featured Products</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/images/oneplus-9.jpg" className="card-img-top" alt="OnePlus 9" />
            <div className="card-body">
              <h5 className="card-title">OnePlus 9</h5>
              <p className="card-text">
                The OnePlus 9 is a top-of-the-line smartphone that's designed for power users.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/images/xiaomi-mi-11.jpg" className="card-img-top" alt="Xiaomi Mi 11" />
            <div className="card-body">
              <h5 className="card-title">Xiaomi Mi 11</h5>
              <p className="card-text">
                The Xiaomi Mi 11 is a powerful smartphone with a beautiful display and great camera.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home