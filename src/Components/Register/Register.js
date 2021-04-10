import React from 'react';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import './Register.css';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("example"));

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
                                    <input type="text" name="task"  {...register("task")} className="form-control" id="task" placeholder="Task" />
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