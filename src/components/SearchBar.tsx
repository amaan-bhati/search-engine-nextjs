import { Search } from "lucide-react";
import { Input } from "./ui/input";
// import { Button } from "./ui/button";

const SearchBar = () => {
    return (
        <div className="relative w-full h-14 flex flex-col bg-white">
            <div className="relative h-14 z-10 rounded-md">
                <Input className="absolute inset-0 h-full"/>

                {/* <Button className="absolute right-0 inset-y-0 h-full rounded-1-none"><Search className="h-6 w-6"/></Button> */}
            </div>
        </div>
    )

}
export default SearchBar;
