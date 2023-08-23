import AuthContext from "@/store/AuthContext";
import { useContext, useRef, useState } from "react"

export default function SearchInput(){
    const [search, setSearch] = useState('');
    const authCtx = useContext(AuthContext);
    const inputSearch : any = useRef();
    const dispatch = 

    const handleInputChange = (e) => {

    }

    return (
        <input 
        type="text" 
        ref={inputSearch} 
        className="input"
        placeholder="Search Game..."
        onChange={handleInputChange}
        />

    )
}