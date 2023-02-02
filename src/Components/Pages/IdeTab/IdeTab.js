import React,{useState, useRef} from 'react';
import Axios from 'axios';
import { FaCog, FaCompressArrowsAlt, FaFileDownload, FaSyncAlt } from "react-icons/fa";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-csharp'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import 'ace-builds/src-noconflict/theme-chrome'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/theme-eclipse'
import 'ace-builds/src-noconflict/theme-terminal'
import spinner from "../../../assets/Spinner.svg"
import "./IdeTab.css";

const IdeTab = (props) => {

    const [code, setCode] = useState(`public class program{ 
        public static void main(String[] args){ 
            System.out.println(5+5+6); 
        }
    }`);
    const [userOutput, setUserOutput] = useState("");
    const [userLang, setUserLang] = useState("java");
    const [userTheme, setUserTheme] = useState("chrome");
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const [isSettings, setIsSettings] = useState(false);

    const fileRef = useRef();

    let data = ({
        "code": code,
        "language": userLang,
        "input": userInput
    });

    let config = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    const handleRun = (e) => {
        setLoading(true);
        if (code === ``) {
            return
        }

        
        Axios(config)
        .then((response)=>{
            response.data.output ? setUserOutput(response.data.output) : setUserOutput(response.data.error)
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
        });
    }

    const clearCode = (e) => {
        e.preventDefault();
        setCode("");
        setUserInput("");
        setUserOutput("");
    }

    const handleFileChange = (file) => {
        let fileData = new FileReader();
        fileData.onloadend = (e) => {
            setCode(e.target.result);
        }
        fileData.readAsText(file);
    }

    const optionHandler = (e) => {
        setUserLang(e.target.value);
        if(userLang === "java" ){
            setCode(
            `public class program{ 
                public static void main(String[] args){ 
                    System.out.println(5+5+6); 
                }
            }`
            );
        } else {
            setCode(``);
        }
        
    }


    const themeHandler = (e) => setUserTheme(e.target.value);

    const handleFullScreen = () => {
        setFullScreen(prev => !prev);
        props.fullScreen(fullScreen);
    }

    const handleSettings = () => setIsSettings(v => !v);

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([code], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myCode"+ Date.now() +".txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }


  return (
    <div style={props.show ? {display: "block"} : {display: "none"}}>
        <div className='border-2 my-2 p-1 flex justify-between items-center'>
                    
            <select name="" id="" onChange={optionHandler} className='shadow-md text-gray-500 select select-accent border-2'>
                <option value="java" >java</option>
                <option value="js" >js</option>
                <option value="py">py</option>
                <option value="c" >c</option>
                <option value="cpp">cpp</option>
                <option value="cs" >cs</option>
            </select>
            <div id='ide-options-top' className='text-gray-500 flex gap-1'>
                <button className='border-2 ' onClick={handleDownload}>
                    <FaFileDownload ></FaFileDownload>
                </button>
                <button onClick={handleFullScreen} className='border-2 '>
                    <FaCompressArrowsAlt ></FaCompressArrowsAlt>
                </button>
                <button onClick={handleSettings} className='border-2 '>
                    <FaCog ></FaCog>
                </button>
                <div className='right-floating-bar shadow-lg' style={isSettings ? {display: "block"} : {display: "none"}}>
                    <div id='triangle'></div>
                    {/* <div id='snippet-option' className='flex justify-even pl-4'>
                        <input type="checkbox" name='snippet' style={{width: '20px'}} checked={isSnippet} onChange={handleSnippet}/> <h4 className='text-black pl-2'>Disable snippet</h4>
                    </div> */}

                    <div id="" className='theme-option pl-4 pt-2'>
                        <h4 className='text-black pb-1'>Choose theme</h4>
                        <select name="" id='' onChange={themeHandler} className='shadow-md text-gray-500 select select-accent border-2'>
                            <option >chrome</option>
                            <option >monokai</option>
                            <option>tomorrow</option>
                            <option >eclipse</option>
                            <option>terminal</option>
                        </select>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='flex border-2'>
            <AceEditor 
                style={{width: "100%"}}
                mode={userLang} 
                theme={userTheme}
                value={code}
                onChange={currentCode => setCode(currentCode)}
                fontSize={16} 
                showGutter={true}
                setOptions={{
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                }}
            />
        </div>
        <div class="bg-gray-200 flex justify-end">
            <button onClick={clearCode} className='border-2 border-gray-400 px-2 py-1 text-gray-500 m-1'>
                <FaSyncAlt ></FaSyncAlt>
            </button>
        </div>
        <div className='flex justify-between items-center my-2 text-xs font-medium'>
            <button className='text-gray-500 border-2 px-2 py-1' onClick={() => fileRef.current.click()}>Open File</button>
            <div style={{ display: "none"}}>
                <input type="file" name="myFile" accept=".txt,.java,.js,.py,.c,.CPP,.go," ref={fileRef} onChange={e => handleFileChange(e.target.files[0])}/>
            </div>
            <div className='flex justify-center gap-2'>
                <button className='text-gray-500 border-2 px-5 py-1' onClick={handleRun}>Run</button>
                <button className='bg-orange-400 text-white px-5 py-1'>Submit</button>
            </div>
        </div>
        <p className='text-gray-500'>Custom Input</p>
        <div className='w-full border-2 mb-2'>
            <p className='bg-gray-200 p-2 '></p>
            <textarea className='w-full text-black border-none outline-none' value={userInput} onChange={(e) => setUserInput(e.target.value)}></textarea>
        </div>
        {loading ?
            <div className='spinner-box'>
                <img style={{width: "40px", height: "40px"}} src={spinner} alt='Loading...' />
            </div> :
            <div className='output-box'>
                <p className='text-gray-500'>Output</p>
                <div className='w-full border-2 mb-2'>
                    <p className='bg-gray-200 p-2'></p>
                    <p className='text-black p-2 mb-20'> {userOutput} </p>
                </div>
            </div>
        }
    </div>
  )
}

export default IdeTab