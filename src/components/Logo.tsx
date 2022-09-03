interface LogoProps {
    img: string;
    text?: string;
}
export const Logo = (props: LogoProps) => {
    
    return (
        <div className="logo-wrapper">
            <img src={props.img} alt={props.text || "Logo"} />
            <span className="logo-text">{props.text}</span>
        </div>
    )
}