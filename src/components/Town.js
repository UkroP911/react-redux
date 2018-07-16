import React from 'react';
import PropTypes from 'prop-types';

const Town = ({...name}) =>
    <li>
        {console.log(name)}
        {name.name}
    </li>

export default Town;