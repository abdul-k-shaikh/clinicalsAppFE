import {React,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



toast.configure();

function AddPatient(){

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[age,setAge] = useState('')

    const handleSubmit=(event)=>{
        const data = {
                firstName:firstName,
                lastName:lastName,
                age:age
        }
        //making ajax call to the backend , create the patient and will show below popup
        axios.post('http://localhost:8080/api/patients', data).then(res=>{
                toast("Patient added successfully")
        })
    }


        return (<div className="container">
                <h2>Create Patient:</h2>
                <form onSubmit={e => { e.preventDefault(); }}>
                First Name:<input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)} align="left"/>
                Last Name:<input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} align="left"/>
                Age:<input type="text" name="age" onChange={e=>setAge(e.target.value)} align="left"/>
                <button onClick={handleSubmit.bind(this)}>Confirm</button>
                </form>
                <Link  to={'/'}>Go Back</Link>
        </div>)
    
}

export default AddPatient;






