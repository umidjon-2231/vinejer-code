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

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
let alphabetUpper =""
alpha.map((x) => alphabetUpper+=String.fromCharCode(x));
let alphabetLower = ""
alpha.map((x) => alphabetLower+=String.fromCharCode(x+32));

export const encrypt=(text, key)=>{
    let keyId=0;
    key=key.toUpperCase()
    //text=text.replace(/\n/g, " ")
    key=key.replace(/" "/g, "")
    let newText="";
    for(let i=0; i<text.length; i++){
        let newLatter="";
        console.log(text[i])
        if(text[i]!==" " && isNaN(text[i]*1) && (alphabetLower.indexOf(text[i])!==-1 || alphabetUpper.indexOf(text[i])!==-1 )){

            if(isUpperCase(text[i])){
                newLatter=alphabetUpper.indexOf(text[i]);
                newLatter+=alphabetUpper.indexOf(key[keyId])
                newLatter%=26
                newLatter=alphabetUpper[newLatter]
            }else{
                newLatter=alphabetLower.indexOf(text[i]);
                newLatter+=alphabetUpper.indexOf(key[keyId])
                newLatter%=26
                newLatter=alphabetLower[newLatter]
            }
            if(keyId===key.length-1){
                keyId=0
            }else{
                keyId++
            }
        }else{
            newLatter=text[i]
        }
        newText+=newLatter
    }
    return newText

}

export const decrypt=(text, key)=>{
    let keyId=0;
    key=key.toUpperCase()
    //text=text.replace(/\n/g, " ")
    key=key.replace(/" "/g, "")
    let newText="";
    for(let i=0; i<text.length; i++){
        let newLatter="";
        if(text[i]!==" " && isNaN(text[i]*1) && (alphabetLower.indexOf(text[i])!==-1 || alphabetUpper.indexOf(text[i])!==-1 )){
            if(isUpperCase(text[i])){
                newLatter=alphabetUpper.indexOf(text[i])-alphabetUpper.indexOf(key[keyId]);
                newLatter%=26
                if(newLatter<0){
                    newLatter=alphabetUpper[26+newLatter]
                }else{
                    newLatter=alphabetUpper[newLatter]
                }
            }else{
                newLatter=alphabetLower.indexOf(text[i]);
                newLatter-=alphabetUpper.indexOf(key[keyId])
                newLatter%=26
                if(newLatter<0){
                    newLatter=alphabetLower[26+newLatter]
                }else{
                    newLatter=alphabetLower[newLatter]
                }
            }
            if(keyId===key.length-1){
                keyId=0
            }else{
                keyId++
            }
        }else{
            newLatter=text[i]
        }
        newText+=newLatter
    }
    return newText
}