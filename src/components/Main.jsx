import { useNavigate } from 'react-router-dom';
import Child from './Child';

function Main(props) {

    const navigate = useNavigate();
    const routeChange = () => {
    let path = "/admin";
        navigate(path);
        
    };
    const children = props.children;
console.log("children", children)
    return (
        <div className="App">
            <div className='nav'>
            <a onClick={routeChange}>&#9881;</a>
            </div>
            {children.forEach(
                function (child) {
                    console.log("child: ", child);
                    return (
                        <Child child={child} key={child.name} />
                    );
                }
            )}
        </div>);
}

export default Main;