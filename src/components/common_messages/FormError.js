import PropTypes from "prop-types";

const ValidationError = ({ children }) => {
  return <div className="form-error">{children}</div>;
};

ValidationError.proptTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidationError;
