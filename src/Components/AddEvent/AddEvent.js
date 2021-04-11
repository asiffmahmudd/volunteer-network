import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import './AddEvent.css';

const AddEvent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [bannerError, setBannerError] = useState({
        error : false,
        message : ''
    });

    const onSubmit = data => {
        if(data.banner.length === 0){
            const error = {
                error : true,
                message: 'Please upload an image'
            }
            setBannerError(error);
        }
        else if(data.banner[0].type === "image/png" || data.banner[0].type === "image/jpeg"){
            const error = {
                error : false,
                message: ''
            }
            setBannerError(error);
            console.log(data)
        }
        else{
            const error = {
                error : true,
                message: 'Please upload jpg or png file'
            }
            setBannerError(error);
        }
        
    }

    const bannerClick = () => {
        document.getElementById("banner").click();
    }

    return (
        <div className="add-event" id="event-add">
            <form onSubmit={handleSubmit(onSubmit)} className="add-event-form">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="title">Event Title</label>
                        <input type="text" name="title" {...register("title", { required: true })} className="form-control" id="title" placeholder="Enter Title"/>
                        {errors.title && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="date">Event Date</label>
                        <input type="date" name="date"  {...register("date", { required: true })} className="form-control" id="date"/>
                        {errors.date && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="desc">Event Description</label>
                        <textarea type="text" name="desc"  {...register("desc", { required: true })} className="form-control" id="desc" placeholder="Enter Description" />
                        {errors.desc && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="banner">Banner</label>
                        <span className="btn btn-outline-primary btn-file banner-btn" onClick={bannerClick}>
                            <FontAwesomeIcon icon={faCloudUploadAlt} color="#007bff"/> Upload Image 
                            <input type="file" name="banner"  {...register("banner", { required: true })} className="banner-img" id="banner" hidden />
                        </span>
                        {bannerError.error && <span className="error">{bannerError.message}</span>}
                    </div>
                </div>
                <button type="submit" className="mt-3 btn-submit btn btn-primary float-right">Submit</button>
            </form>
        </div>
    );
};

export default AddEvent;