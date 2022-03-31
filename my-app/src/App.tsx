import React, {useEffect, useState} from 'react';

import {onSnapshot, collection, doc, setDoc} from 'firebase/firestore'
import {db} from "./firebase";


interface IUser {
    username: string,
    password: string
}

function App() {

    const [users, setUsers] = useState(Array<IUser>());
    const [user, setUser] = useState<IUser>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const addNewUser = async () => {
        const docRef = doc(db, "users", "userNo1")
        const payload = {
            username: user?.username,
            password: user?.password
        }
        await setDoc(docRef, payload);
    }

    useEffect(() => {

        onSnapshot(collection(db, 'users'), (res) => {
            let arr = Array<IUser>();
            res.docs.map((doc) => {
                let {username, password} = doc.data()
                let user = {
                    username: username,
                    password: password
                }
                arr.push(user)
            })
            setUsers(arr)
        })

    }, [])

    const handlePassAndName = (event: any) => {
        const {value, name} = event.target;

        if (name === "username") {
            setUsername(value);
        } else {
            setPassword(value);
        }

        console.log(username, password)

        setUser({
            username: username,
            password: password
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello</h1>

                <input type="text" name = "username" placeholder="username" onChange={(e) => {handlePassAndName(e)}}/>
                <input type="password" name = "password" placeholder="password" onChange={(e) => {handlePassAndName(e)}}/>
                <button onClick={addNewUser}>Add new user</button>

                {users.map((el, i) => {
                    return (<div key={i}>
                        <div>{el.username}</div>
                        <div>{el.password}</div>
                    </div>)
                })
                }
            </header>
        </div>
    );
}

export default App;
