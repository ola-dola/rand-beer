const Beer = ({ id, abv, name, tagline, image_url, removeBeer }) => {
  return (
    <article className='single-beer'>
      {' '}
      {/* pos rel */}
      <div className='beer-info'>
        <h3>{name}</h3>
        <h5>{tagline}</h5>
      </div>
      <div className='img-wrapper'>
        <img src={image_url} alt={name} />
      </div>
      <span className='beer-abv text-small'>abv {abv}%</span>
      <div className='btn-container'>
        <button
          type='button'
          className='btn btn-block delete-btn'
          onClick={() => removeBeer(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Beer;
