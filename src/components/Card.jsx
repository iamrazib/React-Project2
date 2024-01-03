
export const Card = ({cardInfo}) => {

  //console.log(props);
  const { name, desc, imageUrl, price } = cardInfo;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={imageUrl} alt="Shoes" width={150} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>Price: ${ price}</p>
          <p>{desc}</p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
