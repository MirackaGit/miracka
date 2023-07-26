import React, { useState } from "react";
import {
    Input,
    Textarea,
    Alert
} from "@material-tailwind/react";
import emailjs from 'emailjs-com';
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function ContactUsForm() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mobile, setMobile] = React.useState("")
    const [message, setMesage] = React.useState("")
    const [serviceIntersted, setServiceIntersted] = React.useState("")
    const [hoveredIndex,setHoveredIndex] = React.useState("")
    const [formError, setFormError] = React.useState({})
    const formErr = {}

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("")

    React.useEffect(() => {
        emailjs.init("dxPET6LUsrL_Vk0-S")
    }, [])


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
        setHoveredIndex(-1)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        handleFormError()
        if (Object.keys(formErr).length > 0) {
            setFormError(formErr)
        } else {
            // const data = { name, email, message, mobile, serviceIntersted }
            try {
                await emailjs.send('service_vqz8t4o', 'template_245p05e', {
                    to_name: 'Miracka',
                    from_name: name,
                    from_email: email,
                    from_mobile: mobile,
                    from_service:serviceIntersted,
                    message: message
                });
                resolve()
                setOpen(true)
                setMsg("true")
                setTimeout(() => {
                    setOpen(false)
                    setMsg("")
                }, 2500);
                // alert("Your Message was sent successfully")
            } catch (error) {
                setOpen(true)
                setMsg("false")
                setTimeout(() => {
                    setOpen(false)
                    setMsg("")
                }, 2500);
                // alert(`Oops! Your Message was not sent, please try again ${JSON.stringify(error)}`)
            }
        }
    }

    const services = [
        "Graphic Designing", "Website Development", "UI/UX", "Wordpress Websites", "Social Media Ads", "Social Media Marketing", "Re-Branding Solutions", "Video Editing & Animations",
        "Email Marketing", "Bulk Messaging", "Photography & Video Shoot", "Mobile Application Solutions", "ERP Solutions", "Sales & Marketing"
    ]

    return (
        <div className="w-[100%] mt-6">
            {
                open && msg == "true" && <Alert className="w-[100%] md:w-[55%]" open={open} onClose={() => {
                    setOpen(false)
                    setMsg("")
                }}
                    color="green"
                    icon={
                        <InformationCircleIcon
                            strokeWidth={2}
                            className="h-6 w-6"
                        />
                    }>
                    Your Message was sent successfully
                </Alert>
            }
            {
                open && msg == "false" && <Alert className="w-[100%] md:w-[55%]" open={open} onClose={() => {
                    setOpen(false)
                    setMsg("")
                }} color="red"
                    icon={
                        <InformationCircleIcon
                            strokeWidth={2}
                            className="h-6 w-6"
                        />
                    }>
                    Oops! Your Message was not sent, please try again
                </Alert>
            }
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
                    <div className="flex flex-wrap flex-row items-center gap-4 md:gap-2">
                        {
                            services.map((service, s) => {
                                return <div key={s}
                                    style={{ backgroundColor: hoveredIndex === s ? "#00A2D0" : '#FFFFFF' }}
                                    className="text-[14px] md:text-[16px] cursor-pointer px-2 py-1.5 md:px-4 md:py-2 border-[2px] border-[#aaaaaa] inline-block rounded-[50px]"
                                    onClick={() => {
                                        setServiceIntersted(service)
                                        setHoveredIndex(s)
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