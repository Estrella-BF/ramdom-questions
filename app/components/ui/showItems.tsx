import { useContext, useEffect, useState } from "react"
import { ItemContext, Item } from "../context/listContext";

export default function ShowItem() {
    const [ itemsContext ] = useContext(ItemContext);
    const [ listAddedItems, setListAddedItems ] = useState<Item[]>([{} as Item]);

    useEffect(() => {
        let newList = []
        if (Object.keys(listAddedItems[0]).length === 0) {
            newList.push(itemsContext);
            setListAddedItems(newList);
        } else {
            newList = [...listAddedItems];
            newList.push(itemsContext);
            setListAddedItems(newList);
        }
    }, [itemsContext]);

    const listComponents = listAddedItems.map((item: Item, index: number) => 
        <li key={ `${index}-${item.title}` }>
            { item.title }
        </li>
    )
    return (
        <div className="grid grid-cols-4 gap-4">
            <h3>Questions List</h3>
            <ul className="m-4">{listComponents}</ul>
        </div>

    )
}