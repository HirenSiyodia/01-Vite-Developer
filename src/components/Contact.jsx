import React, { use, useState } from 'react'
import { Button } from './ui/button'

const Contact = () => {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === 'username') {
        setUsername(value);
    } else if (name === 'email') {
        setEmail(value);
    } else {
        setMessage(value);
    }
}

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log([`Username is: ${username}, Email id is: ${email} and message is ${message}`]);
  }

  return (
    <section id="contact" className="w-full py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h2>
                <p className="max-w-[950px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm available for freelance work. Lets work together and build
              something amazing.
                </p>
                <div className="m-auto w-full max-w-sm space-y-8">
              <form className="flex flex-col gap-4 py-2" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  className="max-w-lg flex-1 px-2 py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email-ID"
                  name= "email"
                  value={email}
                  onChange={handleChange}
                  className= "max-w-lg flex-1 px-2 py-2 rounded"
                />
                <textarea
                  name= "message"
                  value={message}
                  onChange={handleChange}
                  placeholder= "Enter Your Message"
                  className= "px-2 py-2 rounded"
                />
                <Button variant={"default"} type="submit">Submit</Button>
              </form>
            </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Contact