interface FormHeaderProps {
    heading?: string;
    desc?: string;
    img?: string;
    name: string;
    currentItemId: number;
}
export const FormHeader = (props:FormHeaderProps) => {
    return (
        <div className="form-header">
            {props.img && <img src={props.img} className="form-header-image" alt={props.heading}/>}
            <h2 className="form-heading">{props.heading} {props.currentItemId === 4 ? props.name+'!' : ""}</h2>
            <p className="form-desc">{props.desc}</p>
        </div>
    )
}