'use client'
import { useContext, useEffect, useRef, useState } from "react";
import { KeyItem, ItemContext, Item } from "../context/listContext";

export const InputItem = () => {
    const initialItemState: Item = {
    title: '',
        answer: ''
    }
    const [_itemsContext, setItemsContext ] = useContext(ItemContext);
    const [item, setItem] = useState<Item>(initialItemState);
    const firstInputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
        setItemsContext(item);
        // clean inputs
        setItem(initialItemState);
    }

    const addItem = (key: KeyItem, value: string) => {
        console.log('---listitem:', item)
        let itemObject: Item = {} as Item;
        itemObject[key as keyof Item] = value;
        setItem({...item, ...itemObject});
    }

    useEffect(() => {
        firstInputRef.current?.focus()
    }, []);

    return(
        <div className="grid grid-cols-3 gap-4 m-4">
            <div className="col-span-1">

                <div className="flex justify-between">
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Add Title Item</span>
                        <input type="text" placeholder="...add title" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "
                        value={item.title}
                        ref={firstInputRef}
                        onChange={e => addItem(KeyItem.title, e.target.value)}
                        />
                    </label>

                    <label className="block ml-3">
                        <span className="block text-sm font-medium text-slate-700">Add Answer Item</span>
                        <input type="text" placeholder="...add answer" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        "
                        value={item.answer}
                        onChange={e => addItem(KeyItem.answer, e.target.value)}
                        />
                    </label>   
                    <div className="content-end ml-6">
                        <button 
                        aria-disabled={true}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                        onClick={onClick}
                        >
                            Add
                        </button>
                    </div>
                </div>
       
            </div>


 {/*            <div className="col-span-1 flex">
                <div className="flex justify-around items-center content-center	self-center w-full">
                    <button 
                    disabled={true}
                    aria-disabled={true}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    onClick={onClick}
                    >
                        Add
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Remote
                    </button> 
                </div>
            </div> */}

        </div>
    )

}