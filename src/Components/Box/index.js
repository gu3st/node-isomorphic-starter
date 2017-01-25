import { connect } from 'react-redux';
import BoxContainer from './BoxContainer';
import Box from './Box';

export default BoxContainer.connect(Box, connect);