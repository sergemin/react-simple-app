import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './pagination.css';

// TODO highlight current page
// TODO prop-types
const Pagination = ({ paginationCount }) => {
    let values = [];
    for(let i=0; i<paginationCount; i++) {
        values.push(i+1);
    }
    return (
        <ul className="pagination">
            {values.map((item, i) => (
                <li className='pagination__item' key = {item}>
                    <NavLink className='pagination__link'
                          activeClassName="pagination__link-active" exact
                          to={`/${item === 1 ? '' : item}`}>{item}</NavLink>
                </li>
            ))}
        </ul>
    )
}

Pagination.propTypes = {
    paginationCount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};


export default Pagination;
