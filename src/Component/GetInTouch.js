import React from 'react'
import NavBar from './NavBar'

const GetInTouch = () => {
  return (
    <>
    <NavBar/>
    <div className="flex justify-center">
     <div className="flex-col bg-black">
        <div class="flex h-screen justify-center items-center bg-black">
    <div class="max-w-2xl bg-black p-7 mx-7 shadow-lg rounded">
        <h1 class="text-2xl text-white font-semibold border-b pb-2">Get in Touch</h1>
        <div class="flex flex-wrap justify-between pt-5">
            <div class="w-full md:w-1/2 pb-5">
                <label for="name" class="text-sm text-white">First Name</label>
                <input type="text" placeholder="Enter your First Name" class="h-10 w-full px-3 border rounded focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-full md:w-1/2 pb-5">
                <label for="username" class="text-sm text-white ml-1">Last Name</label>
                <input type="text" placeholder="Enter your Last name" class="ml-1 h-10 w-full px-3 border rounded focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-full pb-5">
                <label for="email" class="text-sm text-white">Email</label>
                <input type="email" placeholder="Enter your Email" class="h-10 w-full px-3 border rounded focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-full md:w-1/2 pb-5">
                <label for="phone" class="text-sm text-white">Phone</label>
                <input type="text" placeholder="Enter your Phone No." class="h-10 w-full px-3 border rounded focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-full md:w-1/2 pb-5">
                <label for="password" class="text-sm text-white ml-1">Subject</label>
                <input type="text" placeholder="Enter your Subject" class="ml-1 h-10 w-full px-3 border rounded focus:outline-none focus:shadow-outline"/>
            </div>
            <div class="w-full pb-5">
                <label for="confirm-password" class="text-sm text-white">Your Message</label>
                <input type="password" placeholder="Your Message" class="h-10 w-full px-3 border rounded focus:outline-none focus:shadow-outline"/>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex items-center pb-5">
                <span class="text-sm font-bold pr-2 text-white">Gender</span>
                <div class="flex">
                    <div class="pr-3">
                        <input type="radio" id="male" name="gender" class="mr-1"/>
                        <label for="male" class="text-sm cursor-pointer text-white">Male</label>
                    </div>
                    <div>
                        <input type="radio" id="female" name="gender" class="mr-1"/>
                        <label for="female" class="text-sm cursor-pointer text-white">Female</label>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                <button type="submit" class="w-full py-2 text-lg font-bold border-2 border-black text-black bg-white rounded hover:border-white hover:underline active:bg-black active:text-white active:border-white">Submit</button>
            </div>
        </div>
    </div>
</div>
      </div>
    </div>
    </>
  )
}

export default GetInTouch