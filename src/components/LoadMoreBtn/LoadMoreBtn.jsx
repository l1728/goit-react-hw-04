import PropTypes from 'prop-types';
import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button className={style.loadMoreBtn} onClick={onClick}>
    Load More
  </button>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
