import clsx from "clsx";
import React from "react";

interface Option {
    id: number;
    icon?: string;
    activeIcon?: string;
    heading?: string;
    content?: string;
}

interface OptionTabsProps {
    data: Option[];
    defaultValue: number;
    onSelect: (fieldName: string, value: string) => void;
}

export const OptionTabs = (props: OptionTabsProps) => {
    const { data } = props;
    const [selected, setSelected] = React.useState<number>(props.defaultValue);
    const handleSelect = (id: number) => {
        setSelected(id);
        props.onSelect("useFor", String(id));
    }
    return (
        <div className="tabs-container">
            {data.map((content, key) => {
                return (
                    <div 
                        key={key} 
                        onClick={() => handleSelect(content.id)} 
                        className={clsx("tab-option", { 'selected': content.id === selected })}>
                            {content.icon && <img alt={content.heading} src={content.id === selected ? content.activeIcon : content.icon} className='tab-option-icon' />}
                            {content.heading && <h3 className='tab-option-heading'>{content.heading}</h3>}
                            {content.content && <p className='tab-option-content'>{content.content}</p>}
                    </div>)
            })}
        </div>
    )
}