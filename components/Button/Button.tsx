export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, ...rest }: ButtonProps) => {
  const gralStyle = 'rounded-md px-6 py-2';
  const Btn = ( classes: string ) => {
 return <button 
    className={`${gralStyle} ${classes} ${className} `}
    disabled = {disabled}
    {...rest}
  >
    { children }
  </button>
  }
  return Btn( disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white' )
}

export default Button
