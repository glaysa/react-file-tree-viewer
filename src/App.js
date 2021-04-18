import {useState} from 'react'

function App() {
    return (
        <div className={'container my-5 p-3 border border-secondary w-25'}>
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
            <Folder name={'Music'} isOpen={false}>
                <File name={'lovesick.mp3'}/>
                <File name={'mi_corazon.mp3'}/>
                <File name={'just_stay.mp3'}/>
                <File name={'fallen_angel.mp3'}/>
                <File name={'danger.mp3'}/>
            </Folder>
        </div>
    );
}

const Folder = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {name, children} = props;
    const folderSwitch = () => {setIsOpen(!isOpen)}
    const caretDirection = isOpen ? 'down' : 'right'

    return (
        <div>
            <span onClick={folderSwitch}>
                <i className={'folder icon'}/>
                <i className={`caret ${caretDirection} icon`}/>
            </span>{name}

            <div style={{marginLeft: "20px"}}>
                {isOpen ? children : null}
            </div>
        </div>
    );
}

const File = (props) => {
    const {name} = props
    const fileExtension = name.split('.')[1]
    const fileIcons = {
        mp3: 'headphones',
        jpeg: 'file image outline',
        png: 'file image',
        exe: 'hdd outline',
        jar: 'hdd',
        py: 'microchip',
        bin: 'server'
    }

    return (
        <div>
            <i className={`${fileIcons[fileExtension]} icon`}/>
            {name}
        </div>
    );
}

export default App;
