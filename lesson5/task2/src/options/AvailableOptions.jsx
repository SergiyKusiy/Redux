import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './option.actions';

const mapState = state => ({ options: availableOptionsSelector(state) });

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);