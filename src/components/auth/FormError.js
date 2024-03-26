import styled from 'styled-components';
import PropTypes from 'prop-types';

const SFormError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0px 10px 0px;
`;

function FormError({ message }) {
  return message === '' || !message ? null : (
    <SFormError> {message}</SFormError>
  );
}

FormError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FormError;
