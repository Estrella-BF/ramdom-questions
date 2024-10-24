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
        <div className="m-5 grid grid-rows-3 grid-flow-col">
            <div className="flex flex-col">
                <h3 className="mb-2 font-semibold text-lg ">Questions List</h3>
                <ul className="font-light">{listComponents}</ul>
            </div>
        </div>

    )
}