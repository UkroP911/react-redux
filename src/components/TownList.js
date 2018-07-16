import React from 'react';
import PropTypes from 'prop-types';


import Town from './Town';

const TownList = ({town}) =>
    <ul>
        {/*{console.log(town.towns[0])}*/}
        {
            town.towns.map((name, id) =>
                <Town name={name} key={id} />
            )
        }
    </ul>

export default TownList;