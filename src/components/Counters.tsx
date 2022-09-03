import clsx from "clsx";
import React from "react";

interface CountersProps {
    totalItems: number;
    current: number;
    onClick: (item: number) => void;
}

export const Counters = (props: CountersProps) => {

    let choicesList: any[] = [];
    const [items, setItems] = React.useState<any[]>(choicesList);

    const getItems = React.useRef(() => {});

    getItems.current = () => {
        let data: number[] = [];
        for (var i = 0; i < props.totalItems; i++) {
            data.push(i+1);
        }
        setItems(data);
    }
    
    React.useEffect(() => {
        getItems.current();
    }, []); // Used ref at line number 15 for getItems function to get rid of the "React Hook React.useEffect has a missing dependency: 'getItems'. Either include it or remove the dependency array." Warning

    return (
        <div className="counters-wrapper">
            {items.map((item,key) => {
                return (<button
                    onClick={() => props.onClick(item)}
                    className={clsx('counter-item', { 'active': key + 1 <= props.current })} key={key + 1}>{key + 1}</button>);
            })}
        </div>
    );

}