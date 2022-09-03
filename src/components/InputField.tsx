interface InputFieldProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onKeyPress: (fieldName: string, value: string) => void;
    type?: string;
    name: string;
    prefix?: string;
    optional?: boolean;
}
export const InputField = (props: InputFieldProps) => {
    const { type, label, placeholder, optional = false, name } = props;
    return (
        <div className="form-input">
            <label className="label-text">{label} {optional && <span className="optional">(optional)</span>}</label>
            <div className="input-wrapper">
                {props.prefix && <div className="prefix">{props.prefix}</div>}
                <input 
                    type={type} 
                    value={props.value} 
                    className="input-field" 
                    onChange={(e) => props.onKeyPress(name, (e.target as HTMLInputElement).value)} 
                    placeholder={placeholder} 
                />
            </div>
        </div>
    )
}