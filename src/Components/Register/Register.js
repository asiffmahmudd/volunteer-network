import React from 'react';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Register.css';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { serverUrl } from '../../serverUrl';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    
    const onSubmit = data => {
        fetch(serverUrl+'/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Successfully registered");
                history.push('/');
            }
        })
    };


    return (
        <div className="register">
            <RegisterHeader></RegisterHeader>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="form-container border rounded p-5">
                            <h3 className="mb-4">Register as a Volunteer</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
                                <div className="form-group">
                                    <input type="text" name="fullname" {...register("fullname", { required: true })} className="form-control" id="fullname" placeholder="Full Name"/>
                                    {errors.fullname && <span>This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email"  {...register("email", { required: true })} className="form-control" id="email" placeholder="Email" />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <input type="date" name="date"  {...register("date", { required: true })} className="form-control" id="date" placeholder="Date" />
                                    {errors.date && <span>This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="description"  {...register("description")} className="form-control" id="description" placeholder="Description" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="task"  {...register("task",  { required: true })} className="form-control" id="task" placeholder="Task" />
                                    {errors.task && <span>This field is required</span>}
                                </div>
                                <button type="submit" className="mt-3 w-100 btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                        
            </div>
        </div>
    );
};

export default Register;