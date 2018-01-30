import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * The page header.
 */
class PageHeader extends Component {
  static propTypes = {
    /**
     * The sub-title.
     */
    label: PropTypes.string,

    /**
     * The title.
     */
    title: PropTypes.string,
  };

  render() {
    const { label, title } = this.props;
    const labelContent = label ? <h4 className="page-header__label">{label}</h4> : <div className="page-header__label" />;

    return (
      <div className="page-header">
        {labelContent}
        <h1 id="page-title" className="page-header__title">
          {title}
        </h1>
      </div>
    );
  }
}

export default PageHeader;
