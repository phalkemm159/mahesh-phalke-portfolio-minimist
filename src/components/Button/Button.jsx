import Icon from "../Icon/Icon";
import "./Button.css";

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  download,
  target,
  rel,
  onClick,
  type = "button",
  className = "",
}) {
  const classes = `button button-${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={15} />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} download={download} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {content}
    </button>
  );
}
