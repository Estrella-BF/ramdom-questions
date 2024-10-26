import React, { useContext, useEffect } from "react"
import { createContext } from "vm"
import { ListItemContext } from "../context/listContext"

export const Questions = () => {
    const [ itemsContext, setItemsContext ] = useContext(ListItemContext);

    useEffect(() => {
        console.log('-----000 itemsContext:', itemsContext)
    }, [itemsContext]);

    return (
        <div className="flex justify-center">
          <button 
                aria-disabled={true}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    Make a Question
            </button>
        </div>
    )
}