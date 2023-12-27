
export const Card = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/src/assets/lighthouse-island.avif" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Scenario!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Orange sunset at lighthouse on the island of
            tenerife, canary islands. spain
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}
