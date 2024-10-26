import React, { useCallback, useContext, useEffect, useState } from "react"
import { createContext } from "vm"
import { Item, ListItemContext } from "../context/listContext"

interface QuestionsParam {
    questionSelected: (item: Item) => void; 
}

export const Questions = ({questionSelected}: QuestionsParam) => {
    const [ listItemsContext ] = useContext(ListItemContext);
    const [ enableQuestionButton, setEnableQuestionButton ] = useState(false);


    useEffect(() => {
        setEnableQuestionButton(() => listItemsContext.length > 0 );
    }, [listItemsContext]);

    const getRandomQuestion = useCallback(() => {
        const listIndexes = listItemsContext.length;
        const getRamdonIndex = Math.trunc(Math.random() * listIndexes);
        questionSelected(listItemsContext[getRamdonIndex]);
    }, [listItemsContext])

    return (
        <div className="questions-component flex justify-center bg-white">
          <button 
                aria-disabled={!enableQuestionButton}
                disabled={!enableQuestionButton}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                onClick={getRandomQuestion}
                >
                    Make a Ramdom Question
            </button>
        </div>
    )
}