import { useContext, useEffect, useState } from "react"
import { ListItemContext, Item } from "../context/listContext";

export default function ShowItem() {
    enum ButtonName {
        Show = 'Show', 
        Hide = 'Hide'
    }
    const [ itemsContext ] = useContext(ListItemContext);
    // const [ buttonName, setButtonName ] = useState<ButtonName>(ButtonName.Hide)
    const [ showList, setShowList ] = useState(true);

    useEffect(() => {
        /* 
        let newList = [];
        if (Object.keys(listAddedItems[0]).length === 0) {
            newList.push(itemsContext);
            // setListAddedItems(newList);
        } else {
            newList = [...listAddedItems];
            // newList.push(itemsContext);
            setListAddedItems(newList);
        } */
    }, [itemsContext]);

    const clickButtonList = () => {
        setShowList(!showList);
        // setButtonName( (buttonName: ButtonName) => buttonName === ButtonName.Hide ? ButtonName.Show : ButtonName.Hide);
    }

    const listComponents = itemsContext.map((item: Item, index: number) => 
        <li key={ `${index}-${item.title}` }>
            { item.title }
        </li>
    );

    return (
        <div className="m-6 grid grid-rows-3 grid-flow-col">
            <div className="flex flex-col">
                <div className="flex justify-between content-center mb-4">
                    <p className="font-semibold text-lg ">Questions List</p>
                    <button 
                    disabled={ itemsContext.length === 0 }
                    onClick={clickButtonList} 
                    className="bg-sky-500 text-white hover:bg-sky-700 px-5 py-1 rounded text-xs font-semibold disabled:opacity-5xs0"
                    >
              {/*           { buttonName } */}
                        { showList ? ButtonName.Show : ButtonName.Hide }
                    </button>
                </div>
                <>
                {
                    showList ? 
                    <ul className="font-light">{listComponents}</ul> : <></>
                }
                </>
                
            </div>
        </div>

    )
}