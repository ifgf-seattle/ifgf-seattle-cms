import React from 'react';
import PropTypes from 'prop-types';

const UrlField = ({ source, record = {}, textSource }) => <a href={record[source]} target="_blank">{textSource ? record[textSource] : record[source]}</a>;

UrlField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    textSource: PropTypes.string,
};

export default UrlField;