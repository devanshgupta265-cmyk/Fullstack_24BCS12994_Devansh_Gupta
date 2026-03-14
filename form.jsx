import { useState } from "react";

function Form(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const [data,setData] = useState(null);

    function handleSubmit(e){
        e.preventDefault();

        setData({
            name:name,
            email:email,
            age:age
        });
    }

    return(
        <>
        <h1>USER INFO FORM</h1>

        <form onSubmit={handleSubmit}>

            <p>
                Name:
                <input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </p>

            <p>
                Email:
                <input 
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </p>

            <p>
                Age:
                <input 
                type="number"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                />
            </p>

            <button type="submit">Submit</button>

        </form>

        {data && (
            <>
            <h2>Submitted Information</h2>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Age: {data.age}</p>
            </>
        )}

        </>
    )
}

export default Form;