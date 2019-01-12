import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LazyLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadImage: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const options = {
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      options,
    );
    const target = document.getElementById(id);

    observer.observe(target);
  }

  handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.setState({ loadImage: true });

        observer.unobserve(entry.target);
      }
    });
  }

  render() {
    const { url, alt, ...rest } = this.props;
    const { loadImage } = this.state;

    return <img alt={alt} src={loadImage ? url : null} {...rest} />;
  }
}

LazyLoader.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyLoader;
