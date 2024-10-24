'use client'
import { useContext, useEffect, useState } from "react";
import { KeyItem, ItemContext, Item } from "../context/listContext";
 

export const InputItem = () => {
    const [_itemsContext, setItemsContext ] = useContext(ItemContext);
    const [listItem, setListItem] = useState<Item>({} as Item);

    const onClick = () => {
        setItemsContext(listItem);
    }

    const addItem = (key: KeyItem, value: string) => {
        let itemObject: Item = {} as Item;
        itemObject[key as keyof Item] = value;
        setListItem({...listItem, ...itemObject});
    }

    useEffect(() => {
    }, []);

    return(
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">

                <form className="flex justify-center">
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Add Title Item</span>
                        <input type="text" placeholder="...add title" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "
                        onChange={e => addItem(KeyItem.title, e.target.value)}
                        />
                    </label>

                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Add Answer Item</span>
                        <input type="text" placeholder="...add answer" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "
                        onChange={e => addItem(KeyItem.answer, e.target.value)}
                        />
                    </label>
                </form>

            </div>


            <div className="col-span-1 flex">
                <div className="flex justify-around items-center content-center	self-center w-full">
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onClick}
                    >
                        Add
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Remote
                    </button>
                </div>
             
     
            </div>

        </div>
    )

}