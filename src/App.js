import {useState} from 'react'

function App() {
    return (
        <div className={'container my-5 p-3 border border-secondary'}>
            <Folder name={'Documents'} isOpen={false}>
                <File name={'dogs.png'}/>
                <File name={'cats.png'}/>
                <Folder name={'Projects'} isOpen={false}>
                    <File name={'DNA_System.py'}/>
                    <File name={'DNA_System32.bin'}/>
                </Folder>
            </Folder>
            <Folder name={'Applications'} isOpen={false}>
                <File name={'zombie.exe'}/>
                <File name={'editor.jar'}/>
            </Folder>
        </div>
    );
}

const Folder = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {name, children} = props;
    const folderSwitch = () => {setIsOpen(!isOpen)}

    return (
        <div>
            <span onClick={folderSwitch}>{name}</span>
            <div style={{marginLeft: "20px"}}>
                {isOpen ? children : null}
            </div>
        </div>
    );
}

const File = (props) => {
    return (
        <div>{props.name}</div>
    );
}

export default App;
