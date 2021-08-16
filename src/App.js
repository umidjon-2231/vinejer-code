import "./main.scss"
import {useState} from "react"
import {AvForm, AvField} from "availity-reactstrap-validation"
import {Col} from "reactstrap"


function App() {
    const [output, setOutput]=useState("")
    const [type, setType]=useState(true)
    const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const cryption=(events, values)=>{
        let key=values.key.toUpperCase(), text=values.text.toUpperCase()
        text=text.replace(/\n/g, " ")
        let newText="";
        let lengthKey=key.length
        if(type){
            //encrypt
            for(let i=0; i<text.length; i++){
                if(text[i]!==" "){

                }
            }

        }else {
            //decrypt

        }
    }

    const changeType=()=>{
        setType(!type)
        //true: encryption
        //false: decryption
    }


    return (
        <div className="container">
            <h1 className="mt-5 text-center text-sm-left">Vijener code </h1>
            <div className="col-sm col-10 mx-auto my-4 bg-info" style={{height: "2px"}}/>
            <div className="row mb-3">
                <div className="col-6 col-sm-3">
                    <select name="type" id="type" onChange={changeType} className="form-control border-primary">
                        <option value="encryption">Encryption</option>
                        <option value="decryption">Decryption</option>
                    </select>
                </div>
            </div>
            <div className="row">

                <div className="col-sm-6 col-12 rounded mb-3 mb-sm-0">
                    <AvForm onValidSubmit={cryption}>
                        <AvField type="textarea" name="text"
                                 placeholder={`Text to ${type?"encryption":"decryption"}`}
                                 cols="40" rows="10"/>

                        <AvField type="text" validate={{
                            required: {value: true},
                            pattern: {value: '^[A-Z-a-z]+$'},
                            minLength: {value: 4},

                        }} name="key" autoComplete="off" placeholder={`Key to ${type?"encrypt":"decrypt"}`}/>


                        <button className="btn btn-dark border-success">
                            {type?"Encryption":"Decryption"}
                        </button>
                    </AvForm>
                </div>

                <div className="col-sm-6 col-12 rounded ">
                    <textarea className="form-control" value={output}
                              placeholder="Output..." disabled={true} cols="40" rows="10"/>
                </div>
            </div>
        </div>
  );
}

export default App;
