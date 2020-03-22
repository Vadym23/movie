import React from 'react';

const MovieTabs = props => {
    const { sort_by, updateSortBy } = props;
    const handleClick = value => {
        return event => {
            updateSortBy(value);
        };
    };

    const getClassLink = value => {
        return `nav-link ${sort_by === value ? 'active' : ""}`;
    };

    return (
       <ul className='tabs nav nav-pills'>
           <li className='nav-item'>
               <div 
                    className={getClassLink('popularity.desc')}
                    onClick={handleClick('popularity.desc')}
                >
                   Popularity desk
               </div>
           </li>
           <li className='nav-item'>
               <div 
                    className={getClassLink('revenue.desk')}
                    onClick={handleClick('revenue.desk')}
                >
                    Revenue desk
               </div>
           </li>
           <li className='nav-item'>
               <div 
                    className={getClassLink('vote_average.desk')}
                    onClick={handleClick('vote_average.desc')}
                >
                    Vote avetage desk
               </div>
           </li>
       </ul>
    )
}

export default MovieTabs;