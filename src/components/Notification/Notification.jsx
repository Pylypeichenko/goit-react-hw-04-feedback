import PropTypes from 'prop-types';

export const Notificaion = ({ message }) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

Notificaion.propTypes = {
  message: PropTypes.string.isRequired,
};
