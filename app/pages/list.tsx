import { useState } from "react";
import { Item } from "../components/context/listContext";
import { InputItem } from "../components/ui/item";
import { Questions } from "../components/ui/questions";
import { ResultQuestion } from "../components/ui/resultQuestion";
import ShowItem from "../components/ui/showItems";

export const List = () => {
    const [ questionSelected, setQuestionSelected ] = useState<Item>({ title: 'f', answer: 'd'} as Item);

    const handleQuestionSelected = (questionSelected: Item) => {
        setQuestionSelected(questionSelected);
    }

    return (
        <div className="list-component container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6 gap-6">
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
                <InputItem />
                <ShowItem />
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-white p-4 rounded">
                <Questions questionSelected={handleQuestionSelected} />
                <ResultQuestion questionSelected={questionSelected} />
            </div>
    
        </div>
    )
}