import React from 'react';

const MovieTabs = props => {
    const { sort_by, updateSortBy } = props;
    return (
       <ul className='tabs nav nav-pills'>
           <li className='nav-item'>
               <div className={`nav-link ${
                    sort_by === 'popularity.desc' ? 'active' : ""
                    }`}
                    onClick={() => {
                        updateSortBy('popularity.desc');
                    }}
                >
                   Popularity desk
               </div>
           </li>
           <li className='nav-item'>
               <div className={`nav-link ${
                   sort_by === 'revenue.desk' ? 'active': ""
                   }`}
                   onClick={() => {
                       updateSortBy('revenue.desc');
                   }}
                >
                    Revenue desk
               </div>
           </li>
           <li className='nav-item'>
               <div className={`nav-link ${ 
                   sort_by === 'vote_avetage.desk '? 'active' : ""
                    }`}
                    onClick={() => {
                        updateSortBy('vote_avetage.desc');
                    }}
                >
                    Vote avetage desk
               </div>
           </li>
       </ul>
    )
}

export default MovieTabs;