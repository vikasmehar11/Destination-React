import React from 'react';

const Services = () => {
  return (
    <div>
      <div>
        <h1 className="heading" style={{ color: 'rgb(31, 134, 218)', marginTop: '1%' }}>
          Destination Tours And Travels
        </h1>
      </div>

      <div className="services-container">
        <div className="image-container">
          <img 
            src="/images/services.jpg" 
            className="image" 
            alt="Services Banner"
          />
          <div className="overlay">
            <h5 className="title">Services We Offer</h5>
            <ul className="service-list">
              <li className="service-item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus natus neque deleniti at nihil id quae incidunt inventore magnam sed voluptate eaque itaque, quos mollitia quidem cupiditate iusto labore?</li>
              <li className="service-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eaque perferendis ut adipisci deserunt numquam libero quidem aut eveniet exercitationem impedit quo quae iste, repudiandae distinctio inventore quam obcaecati voluptatem?</li>
              <li className="service-item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus obcaecati autem nesciunt velit, asperiores eaque non quos nisi corporis adipisci. Nesciunt, deleniti repellat. Officia blanditiis reprehenderit, recusandae et culpa nemo!</li>
              <li className="service-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique repellat molestias, ullam libero minus ratione atque ipsam iure a accusantium soluta, maxime rem quasi id consequuntur veritatis quaerat dignissimos?</li>
              <li className="service-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro nobis facilis ex unde ipsam totam deserunt? Temporibus qui nulla placeat alias minus ratione quos. Cupiditate facilis unde odit suscipit?</li>
              <li className="service-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, optio. Quisquam quo aspernatur veniam perspiciatis, eaque laboriosam vero delectus voluptatum id blanditiis corrupti. Voluptas et eos harum sapiente quod fuga?</li>
              <li className="service-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, dolor laborum omnis earum suscipit id dicta ea quaerat aperiam? Incidunt quas nobis, eveniet earum quos quisquam ipsum quod facere in?</li>
              <li className="service-item">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus obcaecati autem nesciunt velit, asperiores eaque non quos nisi corporis adipisci. Nesciunt, deleniti repellat. Officia blanditiis reprehenderit, recusandae et culpa nemo!</li>
              <li className="service-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique repellat molestias, ullam libero minus ratione atque ipsam iure a accusantium soluta, maxime rem quasi id consequuntur veritatis quaerat dignissimos?</li>
              <li className="service-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, dolor laborum omnis earum suscipit id dicta ea quaerat aperiam? Incidunt quas nobis, eveniet earum quos quisquam ipsum quod facere in?</li>
            </ul>
          </div>
        </div>
      </div>

      <style>
        {`
          .heading {
            text-align: center;
            font-size: 2rem;
          }

          .services-container {
            position: relative;
            margin-top: 2%;
          }

          .image-container {
            position: relative;
          }

          .image {
            width: 100%;
            height: auto;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            text-align: center;
          }

          .title {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .service-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .service-item {
            color: white;
            font-size: 1rem;
            margin-bottom: 10px;
            line-height: 1.5;
          }
        `}
      </style>
    </div>
  );
};

export default Services;
