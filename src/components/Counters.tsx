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

    const getItems = () => {
        let data: number[] = [];
        for (var i = 0; i < props.totalItems; i++) {
            data.push(i+1);
        }
        return data;
    }
    
    React.useEffect(() => {
        const updatedList = getItems();
        setItems(updatedList)
    }, []);

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