import React, { useState } from 'react';

const SiteSeeing = ({ id, image, info, name, price, removeSiteSeeing }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-site">
      <img src={image} alt={name} />
      <footer>
        <div className="site-info">
          <h4>{name}</h4>
          <h4 className="site-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeSiteSeeing(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default SiteSeeing;
