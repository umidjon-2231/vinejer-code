import "./main.scss"
import {useEffect, useState} from "react"
import {AvForm, AvField} from "availity-reactstrap-validation"
import {isUpperCase, useThemeDetector} from "./tools"



function App() {
    const [output, setOutput]=useState("")
    const [type, setType]=useState(true)
    const isDark=useThemeDetector()



    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    let alphabetUpper =""
    alpha.map((x) => alphabetUpper+=String.fromCharCode(x));
    let alphabetLower = ""
    alpha.map((x) => alphabetLower+=String.fromCharCode(x+32));

    useEffect(()=>{

    })

    const cryption=(events, values)=>{
        let key=values.key.toUpperCase(), text=values.text
        //text=text.replace(/\n/g, " ")
        key=key.replace(/" "/g, "")
        let newText="";
        let keyId=0;
        console.log(alphabetUpper)
        console.log(alphabetLower)


        if(type){
            //encrypt

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

        }else {
            //decrypt
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
        }
        setOutput(newText)
    }

    const changeType=()=>{
        setType(!type)
        //true: encryption
        //false: decryption
    }

    const copyToClipboard = (text) => {
        console.log('text', text)
        let textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }


    return (
        <div className="container">
            <h1 className="mt-5 text-center text-sm-left">Vijener code </h1>
            <div className="col-sm col-10 mx-auto my-4 bg-info" style={{height: "2px"}}/>
            <div className="row mb-3">
                <div className="col-6 ">
                    <select name="type" id="type" onChange={changeType} className="form-control col-sm-3 btn-color border-primary">
                        <option value="encryption">Encryption</option>
                        <option value="decryption">Decryption</option>
                    </select>
                </div>

            </div>
            <div className="row">

                <div className="col-sm-6 col-12 rounded mb-5 mb-sm-0">
                    <AvForm onValidSubmit={cryption} >
                        <AvField type="textarea" name="text"
                            // validate={{
                            //    required: {value: true, errorMessage: `Type text to ${type?"encrypt":"decrypt"}`},
                            // }}
                                 placeholder={`Text to ${type?"encryption":"decryption"}`}
                                 cols="40" rows="10"/>

                        <AvField type="text" validate={{
                            required: {value: true, errorMessage: `You need a key for ${type?"encrypt":"decrypt"}`},
                            pattern: {value: '^[A-Z-a-z]+$', errorMessage: "The key should only contain content from the English alphabet"},
                        }} name="key" autoComplete="off" placeholder={`Key to ${type?"encrypt":"decrypt"}`}/>


                        <button className={`btn ${isDark?"btn-dark":"btn-light"} col-sm-3 col-12 border-success`}>
                            {type?"Encrypt":"Decrypt"}
                        </button>

                    </AvForm>
                </div>

                <div className="col-sm-6 col-12 rounded mb-5 mb-sm-0">

                    <button className={`btn border-primary bg-secondary  ${isDark?"btn-dark":"btn-secondary"}`}
                            onClick={()=>{
                                copyToClipboard(document.getElementById("output").value)}}
                            style={{position: "absolute", right: "15px",top: "-40px"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke={`${isDark?"white": "#343A40"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-clipboard">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                    </button>

                    <textarea className="form-control" value={output}
                              placeholder="Output..." disabled={true} id="output" cols="40" rows="10"/>
                </div>
            </div>
        </div>
    );
}

export default App;
