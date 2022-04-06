import React, {useEffect, useState} from 'react';

import { onSnapshot, collection, doc, setDoc } from 'firebase/firestore'
import { db } from "./firebase";


interface IStatus {
    distance: number,
    garbageStatus: string,
    mass: number
}

function App() {

    const [uid, setUID] = useState(0);
    const [status, setStatus] = useState<IStatus>();

    const addNewStatus = async () => {
        setUID((uid) => uid + 1)

        const docRef = doc(db, "status", `userNo${uid}`)
        const payload = {
            distance: 90,
            garbageStatus: 'medium',
            mass: 12
        }
        await setDoc(docRef, payload);
    }

    useEffect(() => {

        onSnapshot(collection(db, 'status'), (res) => {
            let status = {
                distance: 0,
                garbageStatus: 'garbageStatus',
                mass: 0
            }
            res.docs.map((doc) => {
                let {distance, garbageStatus, mass} = doc.data();
                status = {
                    distance: distance,
                    garbageStatus: garbageStatus,
                    mass: mass
                }
            })
            setStatus(status);
        })

    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello</h1>
                <div>{status?.garbageStatus}</div>
                <div>{status?.mass}</div>
                <div>{status?.distance}</div>
                <button onClick={addNewStatus}>Add status</button>
            </header>
        </div>
    );
}

export default App;
