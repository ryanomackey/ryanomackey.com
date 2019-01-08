import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TypedText extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      renderedText: '',
    };
  }

  componentDidMount() {
    const { text, delay } = this.props;

    this.type(text, delay);
  }

  type(text, delay) {
    let tempDelay = delay;

    text.split('').forEach(letter => {
      setTimeout(() => {
        this.setState(state => ({ renderedText: state.renderedText + letter }));
      }, 0 + tempDelay);

      tempDelay += 90;
    });
  }

  render() {
    const { renderedText } = this.state;

    return renderedText;
  }
}

TypedText.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default TypedText;
