import { useEffect } from "react"

const useTitle =title =>{
    
    useEffect(()=>{
        document.title =`${title}-OrebiMain`;
    },[title])
};

export default useTitle;