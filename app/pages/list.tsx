import { InputItem } from "../components/ui/item";
import { Questions } from "../components/ui/questions";
import ShowItem from "../components/ui/showItems";

export const List = () => {
    return (
        <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6 gap-2">
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
                <InputItem />
                <ShowItem />
            </div>
            <div className="col-span-1 sm:col-span-2 md:col-span-2">
                <Questions />
            </div>
    
        </div>
    )
}