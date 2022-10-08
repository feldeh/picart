import StyledButton from './Button.css'

type ButtonProps = {
    btnText: string
    onClick?: () => void
    children?: React.ReactNode
}

const Button = ({ btnText, onClick, children }: ButtonProps) => {
    return (
        <StyledButton variant="contained" onClick={onClick}>
            {btnText}
            {children}
        </StyledButton>
    )
}

export default Button
