import styles from "./button.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const GradientButton = ({
  children,
  className,
  gradient,
  border,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button {...props} className={clsx(styles.root, className, disabled === true && styles.disabled)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

GradientButton.propTypes = {
  gradient: PropTypes.array,
  border: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

GradientButton.defaultProps = {
  onClick: () => {},
  disabled: false
}

export default GradientButton;
