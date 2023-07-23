import React, { useState } from "react";
import {
    Card,
    Input,
    Textarea,
    Typography,
    Alert
} from "@material-tailwind/react";

export default function ContactUsForm() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mobile, setMobile] = React.useState("")
    const [message, setMesage] = React.useState("")
    const [serviceIntersted, setServiceIntersted] = React.useState("")
    const [formError, setFormError] = React.useState({})
    const formErr = {}


    const verifyEmail = (value) => {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    };

    const verifyNumber = (value) => {
        var numberRex = new RegExp("^[0-9]+$");
        if (numberRex.test(value)) {
            return true;
        }
        return false;
    };

    const handleFormError = () => {

        if (name.trim().length === 0) {
            formErr.name = "Name is Required"
        }

        if (email.trim().length === 0) {
            formErr.email = "Email is Required"
        } else if (!verifyEmail(email)) {
            formErr.email = "Email is Invalidate"
        }

        if (mobile.trim().length < 10) {
            formErr.mobile = "Mobile is Required"
        } else if (!verifyNumber(mobile)) {
            formErr.mobile = "Mobile is Invalidate"
        }

        if (message.trim().length === 0) {
            formErr.message = "Message is Required"
        }
    }

    const resolve = () => {
        setEmail("")
        setFormError({})
        setName("")
        setMesage("")
        setMobile("")
        setServiceIntersted("")
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        handleFormError()
        if (Object.keys(formErr).length > 0) {
            setFormError(formErr)
        } else {
            const data = { name, email, message, mobile }
            console.log(data)
            resolve()
        }
    }

    const services = [
        "Social Media", "Content Creation", "Gaming", "Applications", "Web Development", "SEO", "Digital Markting", "Email & SMS Marketing Automation"
    ]

    return (
        <div className="w-[100%] mt-6">
            <form className="mt-2 mb-2" onSubmit={handleFormSubmit}>
                <div className="mb-4 flex flex-col gap-6 sm:w-[60%]">
                    <div>
                        <Input size="lg" label="Name" value={name} onChange={(e) => {
                            setName(e.target.value)
                            setFormError({})
                        }} />
                        {
                            Object.keys(formError).length > 0 && formError.name && <small className="text-[#BC2929]">{formError.name}</small>
                        }
                    </div>
                    <div>
                        <Input size="lg" label="Email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                            setFormError({})
                        }} />
                        {
                            Object.keys(formError).length > 0 && formError.email && <small className="text-[#BC2929]">{formError.email}</small>
                        }
                    </div>
                    <div>
                        <Input size="lg" label="Mobile" value={mobile} type="number" onChange={(e) => {
                            setMobile(e.target.value)
                            setFormError({})
                        }} />
                        {
                            Object.keys(formError).length > 0 && formError.mobile && <small className="text-[#BC2929]">{formError.mobile}</small>
                        }
                    </div>
                    <div className="">
                        <Textarea label="Message" size="lg" value={message} onChange={(e) => {
                            setMesage(e.target.value)
                            setFormError({})
                        }} />
                        {
                            Object.keys(formError).length > 0 && formError.message && <small className="text-[#BC2929]">{formError.message}</small>
                        }
                    </div>
                </div>
                <div className="my-4 grid grid-cols-1 gap-4">
                    <h6>Which services are you interested in?</h6>
                    <div className="flex flex-wrap flex-row gap-2">
                        {
                            services.map((service, s) => {
                                return <div key={s}
                                    className="px-4 py-2 border-[2px] border-[#aaaaaa] inline-block rounded-[50px]"
                                    onClick={() => {
                                        setServiceIntersted(service)
                                    }}
                                >{service}</div>
                            })
                        }
                    </div>
                </div>
                <button type="submit"
                    className="w-[100%] sm:w-[60%] text-center hover:bg-[#009FCF] bg-[#000000] text-[#ffffff] hover:text-[#ffffff] cursor-pointer px-12 py-3 rounded-[50px]">
                    Sumbit
                </button>
            </form>
        </div>
    );
}