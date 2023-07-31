import { useEffect} from "react";

export const useOnKeyUp =(callback, targetKey) =>{
    useEffect(() => {
        window.addEventListener("keyup")
    })
}