import React from 'react';
import SiteSeeing from './SiteSeeing';

const SitesSeeing = ({ sitesSeeing, removeSite }) => {
    return (
        <section>
            <div className='title'>
            <h2>our sites</h2>
            <div className='underline'></div>
            </div>
            <div>
                {sitesSeeing.map((siteSeeing) => {
                    return <SiteSeeing key={siteSeeing.id} {...siteSeeing} removeSite={removeSite} />
                })}
            </div>
        </section>
    );
};

export default SitesSeeing;
