import React, { useState } from "react";
import Footer from "./Footer";
const Contact = () => {
  const [val, upVal] = useState({
    Name: '',
    Phone: '',
    Email: '',
  });

  const thisVal = (obj) => {
    const value = obj.target.value;
    const name = obj.target.name;
    upVal((obj) => {
      return ({
        ...obj,
        [name]: value,
      }
      )
    })
  }


  const sent = (obj) => {
    obj.preventDefault();
    upVal({
      Name: '',
      Phone: '',
      Email: '',
    })
    alert(`Your Name is" ${val.Name}". Your Email is "${val.Email}".`);
  }
  return (
    <>
      <div>
        <h1 className=' text-center mt-5 my-3'>Contact Me</h1>
      </div>
      <div className='container'>
        <div className="row">
          <div className='col-lg-10 mx-auto col-10 mt-5'>
            <form onSubmit={sent}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input onChange={thisVal} value={val.Name} name='Name' required type="text" class="form-control" placeholder="Enter Your Full Name" />
                <label for="exampleFormControlInput1" class="form-label">PHONE</label>
                <input onChange={thisVal} value={val.Phone} name='Phone' type="password" class="form-control" placeholder="Enter your Mobile No" />
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input required onChange={thisVal} value={val.Email} name='Email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" placeholder="Enter your suggestion" rows="3"></textarea>
                <div className="text-center my-4 cen">
                  <button type="submit" class="btn   btn-outline-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div className='my-2 tshadow'>
        <Footer />
      </div>
    </>
  )
}
export default Contact;