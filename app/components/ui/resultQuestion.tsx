import { useContext, useState } from "react"
import { Item, ListItemContext } from "../context/listContext"

type ResultQuestionParams = {
    questionSelected: Item;
};

export const ResultQuestion = ({questionSelected}: ResultQuestionParams) => {
    const [ showAnswer, setShowAnswer ] = useState(false);

    const handleButtonAnswer = () => {
        setShowAnswer(!showAnswer)
    };

    return (
        <div className="mt-6">
            <div>
                <p className="inline-block text-lg font-bold">Question:</p>
                <button 
                    aria-label="show answer question button"
                    onClick={handleButtonAnswer}
                    className="text-sky-800 hover:text-sky-600 font-bold rounded inline-block ml-6 text-sm"
                >
                    Show answer
                </button>
            </div>
            <p>{ questionSelected.title }</p>
 
            <div className="mt-6">
        
                {
                    showAnswer ? 
                    <p className="font-light text-lg">{ questionSelected.answer }</p> : <></>
                }
                
            </div>
        </div>
    );

}