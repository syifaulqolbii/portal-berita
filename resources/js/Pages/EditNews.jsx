import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Components/Navbar"
import {useState} from "react";
import {Inertia} from "@inertiajs/inertia";
export default function EditNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            id : props.myNews.id,
            title,
            description,
            category
        }
        Inertia.put('/news/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }
    return (
        <div className='min-h-screen bg-slate-50 '>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg m-6">
                    <h1 className="text-2xl">Edit Berita</h1>
                    <input type="text" placeholder="Insert title" className="m-2 input input-bordered w-full " onChange={(title)=> setTitle(title.target.value)} defaultValue={props.myNews.title}/>
                    <input type="text" placeholder="Insert description" className="m-2 input input-bordered w-full " onChange={(description)=> setDescription(description.target.value)} defaultValue={props.myNews.description} />
                    <input type="text" placeholder="Insert categories" className="m-2 input input-bordered w-full " onChange={(category)=> setCategory(category.target.value)} defaultValue={props.myNews.category}/>
                    <button className="btn btn-primary m-2" onClick={()=> handleSubmit()}>Update</button>
                </div>
            </div>
        </div>
    )
}

