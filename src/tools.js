import {useEffect, useState} from "react"

export const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);

    return isDarkTheme;
}

export const isUpperCase =(charToCheck)=> {

    let returnValue = NaN;
    let charCode = charToCheck.charCodeAt(0);

    if(charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)){
        returnValue = true;
    }else if (charCode >= "a".charCodeAt(0) &&
        charCode <= "z".charCodeAt(0) ){
        returnValue = false;
    }
    return returnValue;
}