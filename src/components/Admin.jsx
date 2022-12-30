import { useNavigate } from 'react-router-dom'; 


function Admin(props) {
const childTemplate = name => ({ name, earned: 0, lost: 0 });

    const navigate = useNavigate(); 
    const routeChange = () => {
        const newChildren =
            document.getElementById('textArea').value.split(',')
                .filter(child => !props.children.map(kid => kid.name === child));
        console.log("new: ", newChildren)
        if (newChildren.length > 0) {
            console.log("Different")
            newChildren.map(child => props.addChildren(props.children.push(new childTemplate(child))))
            // props.addChildren(document.getElementById('textArea').value.split(','));

        }
        let path = "/"; 
        navigate(path);
    }
    
    return (
        <div className="Admin"> Admion page
            List of Kids:
            <textarea id="textArea" name="children" defaultValue={props.children.map(child => child.name)}></textarea>
            <button onClick={routeChange} >Save</button>
        </div>
    );
    
}

export default Admin;