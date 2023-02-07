import {useState} from "react";

function APP(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(100);
    const [isMale, setIsMale] = useState(true);

    return (
        <div>
            <h1>My name is {name}</h1>
            <h1>I am {age} years old</h1>
            <h1>I am a {isMale? "male" : "female"}</h1>
            <h4>I am feeling {props.emotion}</h4>
        </div>
    );
}

export default APP;