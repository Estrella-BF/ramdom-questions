import { InputItem } from "../components/ui/item";
import { Questions } from "../components/ui/questions";
import ShowItem from "../components/ui/showItems";

export const List = () => {
    return (
        <>
            <p>Lista</p>
            <div className="">
                <InputItem />
                <ShowItem />
                <Questions />
            </div>

        </>
    )
}