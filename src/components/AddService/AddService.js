import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://agile-sands-48232.herokuapp.com/services', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h2 className="fs-1 fw-bold">PLEASE ADD A SERVICE</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true})} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image URL" />
            <input className="btn btn-success" type="submit" />
        </form>
        </div>
    );
};

export default AddService;