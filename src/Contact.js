import React, { useState } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {

    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }

        })
    };

    const formSubmit = (e) => {
      e.preventDefault();
      alert(
          `Your detils submitted are as follows: Name: ${data.fullname} Mobile No.: ${data.phone} Email: ${data.email} Your message: ${data.msg}`
      );
    };

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_w6huuih', 'template_dyuft2k', e.target, 'user_U3rCKap08YYKV61iAmEwg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact Us
                </h1>
            </div>
            <div classname="container contact_div">
                <div className="col-md-3 col-10 mx-auto">
                    <div classname="row">
                        <form onSubmit={sendEmail}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your mobile no." />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email ID" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>

                            <div className="my-12 col-md-12 text-center mb-3">
                                <button class="btn-card" type="submit">Submit</button>
                                {/*<button class="btn btn-outline-primary" type="submit"> Submit form</button>*/}
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Contact;