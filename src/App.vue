<template>

<div v-if="loading" class="loading-spinner"></div>

  <div v-else>
  <div>
    <Analytics/>
   </div>

<div class="bg-primary ">
 
<div class="max-w-6xl mx-auto pt-2 px-4">
  <div :class="['md:flex h-16 items-center fixed top-0  w-full z-50', { 'scrolled': scrolled }]">
          <div class="flex-shrink-0 pt-5">
            <a href="/" class="text-xl font-bold text-white mt-30  font-sans capitalize">Mohamed Ahmed</a>  
          </div>
       
              <div :class="{'hidden md:flex flex-1 justify-center space-x-6': !showMobileMenu, 'mt-9 items-start bg-[#151314c9] w-full flex flex-col  z-10': showMobileMenu}" >

                <transition name="slide-fade">
                  <a href="/" @click="showMobileMenu = false" :class="{'text-white  font-medium block md:inline-block nav-link': !showMobileMenu,
                  'text-white  font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }">
                      Home
                  </a>
                </transition>

                <transition name="slide-fade">
                  <a href="#about" @click="showMobileMenu = false" :class="{'text-white  font-medium block md:inline-block nav-link': !showMobileMenu,
                  'text-white  font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }">
                    About
                  </a>
                </transition>

                <transition name="slide-fade">
                  <a href="#technologies" @click="showMobileMenu = false" :class="{'text-white  font-medium block md:inline-block nav-link': !showMobileMenu,
                  'text-white  font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }">
                    Technologies
                  </a>
                </transition>

                <transition name="slide-fade">
                  <a href="#education" @click="showMobileMenu = false" :class="{'text-white  font-medium block md:inline-block nav-link': !showMobileMenu,
                  'text-white  font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }">
                      Education
                  </a>
                </transition>

               
                  <div class="space-x-6">
                    <transition name="slide-fade">
                  <a href="#project" @click="showMobileMenu = false" :class="{'text-white  font-medium block md:inline-block nav-link': !showMobileMenu,
                  'text-white  font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" >
                  Projects
                  </a>
                </transition>

                <transition name="slide-fade">
                  <a href="#contact" @click="showMobileMenu = false" :class="{'text-white  font-medium block md:inline-block nav-link': !showMobileMenu,
                  'text-white pl-4 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" >
                  Contact
                  </a>
                </transition>
                </div>
              </div>
       
        
           <div class="md:hidden ml-auto fixed top-0 right-0 p-4">
                <button
                @click="showMobileMenu = !showMobileMenu"
                class="flex items-center px-3 py-2 rounded text-gray-500 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="showMobileMenu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
                  />
                </svg>
              </button>
          </div>
  </div> 
</div>




  <div>
    <div class="relative pt-40 pb-56 ">
      <div class="relative">
          <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
              <div class="grid items-center grid-cols-1 lg:grid-cols-2">
                  <div>
                      <h1 class="font-sans text-xl  font-normal tracking-tight text-white text-opacity-70">Software Developer</h1>
                      <p class="mt-6 tracking-tighter text-white">
                      
                          <span class="font-serif italic font-normal text-7xl">Mohamed Ahmed</span>
                      </p>
                      <p class="font-serif italic text-base font-normal leading-7 text-white text-opacity-70">  Collaborator | Problem Solver | Innovator | Team Player</p>
                  </div>

                  <div class="hidden lg:block">
                      <img class="w-full mx-auto hidden md:block" src="./assets/hero1.png" alt="" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
  

     
<div class="max-w-6xl mx-auto pt-2 px-4">        
        <div id="about" class="pt-5">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div class="col-span-1 lg:col-span-1 mx-auto md:mx-0">
              <div class="">
                <img src="./assets/92859355-removebg-preview.png" alt="Profile Picture" class="0 mb-4 rounded-md -z-10">
              </div>
            </div>

            <div class="text-left md:col-span-1 lg:col-span-2">
              <h2 class="text-3xl md:text-3xl font-bold text-white opacity-50 capitalize">About Me</h2>
              <p class="mt-4 text-white text-md font-sans tracking-wide sm:mt-5 md:mt-5 opacity-90 leading-relaxed">
                As a Software Developer, I am passionate about creating user-friendly software that provides a seamless experience for the end-user. 
                I am dedicated to the art of designing and developing attractive and intuitive interfaces that are not only visually appealing but also highly functional. I take great satisfaction in seeing my work bring joy and value to users.
              </p>

              <div class="my-4 flex justify-center md:justify-start">
                <button class="btn text-sm flex justify-center text-white capitalize font-semibold rounded-full mt-5 px-10 py-4">
                <a href="https://drive.google.com/file/d/18rhzNrA0htxCk9WztPD9OPbHLlrmBgf2/view?usp=drive_link" target="_blank" >
                   download CV  
                </a>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-1 w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </span>
              
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="technologies" class="pt-32">
          <h2 class="text-3xl md:text-3xl font-bold text-white opacity-50 capitalize">Technologies</h2>  
            <div class="mt-10 mx-auto px-10 sm:px-0 md:px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">

            <div class="icon flex flex-col icon-div overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
                  </p>
                  <p class="text-md text-center text-white opacity-50">Javascript</p>
              </div>
            </div>
            <div class="icon flex flex-col icon-div overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
                  </p>
                  <p class="text-md text-center text-white opacity-50">React.js</p>
              </div>
            </div>

              <div class="icon flex flex-col icon-div overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a>
                  </p>
                  <p class="text-md text-center text-white opacity-50">Vue.js</p>
              </div>
            </div>

            <div class="icon flex flex-col icon-div overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a class="bg-white" href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
                  </p>
                  <p class="text-md text-center text-white opacity-50">Next.js</p>
              </div>
            </div>

            <div class="icon flex flex-col icon-div overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>  
                  </p>
                  <p class="text-md text-center text-white opacity-50">Html</p>
              </div>
            </div>

            <div class="icon flex flex-col icon-div  overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  
                  </p>
                  <p class="text-md text-center text-white opacity-50">Css</p>
              </div>
            </div>

            <div class="icon flex flex-col icon-div overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>
                  </p>
                  <p class="text-md text-center text-white opacity-50">Tailwind</p>
              </div>
            </div>

            <div class="icon flex flex-col icon-div overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3"> 
                  <p class="text-xl font-semibold text-center mx-auto text-white"> 
                    <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
                  </p>
                  <p class="text-md text-lg text-center text-white opacity-50">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>

        <div id="education" class="pt-32">
          <h2 class="text-3xl md:text-3xl font-bold text-white opacity-50 capitalize">What I've learned</h2>
          <div class="mt-10  mx-auto px-10 sm:px-0 md:px-0  grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">

            <div class="div-bg flex flex-col rounded-md overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3">
                  <p>
                    <span class="text-2xl font-bold text-yr">March</span> <span class="text-md font-bold text-yr">2024</span>
                    <span class="text-2xl text-white text-yr">-</span>
                    <span class="text-2xl font-bold text-yr">August</span> <span class="text-md font-bold text-yr">2024</span>
                  </p>
                  <p class="text-xl font-semibold text-white">Software Development</p>
                  <p class="text-md text-white opacity-50">Moringa School</p>
              </div>
            </div>

            <div class="div-bg flex flex-col rounded-md overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3">
                  <p>
                    <span class="text-2xl font-bold text-yr">February</span> <span class="text-md font-bold text-yr">2022</span>
                    <span class="text-2xl text-white text-yr">-</span>
                    <span class="text-2xl font-bold text-yr">January</span> <span class="text-md font-bold text-yr">2023</span>
                  </p>
                  <p class="text-xl font-semibold text-white">Diploma In Software Development</p>
                  <p class="text-md text-white opacity-50">Institute Of Software Technologies</p>
              </div>
            </div>

            <div class="div-bg flex flex-col rounded-md overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3">
                  <p>
                    <span class="text-2xl font-bold text-yr">September</span> <span class="text-md font-bold text-yr">2021</span>
                    <span class="text-2xl text-white text-yr">-</span>
                    <span class="text-2xl font-bold text-yr">January</span> <span class="text-md font-bold text-yr">2022</span>
                  </p>
                  <p class="text-xl font-semibold text-white">Certificate In Software Development</p>
                  <p class="text-md text-white opacity-50">Institute Of Software Technologies</p>
              </div>
            </div>
         </div>
        </div>

        <div id="project" class="pt-32">
          <h2 class="text-3xl md:text-3xl font-bold text-white opacity-50 capitalize">What I've accomplished</h2>
           
          <div class="mt-10  mx-auto px-10 sm:px-0 md:px-0  grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">

              <div class="div-bg flex flex-col rounded-md overflow-hidden"> 
              <div class="p-3 flex-shrink-0">
                <img src="./assets/diner.png" class="h-sm-7 h-48 w-full rounded-lg object-cover">
              </div>
              <div class="p-3 flex flex-col justify-between">
                <p class="text-xl font-semibold text-white text-center">Double Diner Website/App</p>
                <p class="mt-1 text-base font-sans font-light text-md text-white">
                  Double Diner is a food delivery service that allows customers to place orders from the comfort of their own location.
                </p>
                <p class="mt-1 text-base font-sans font-light text-md text-white">
                  Access Admin route 
                  <a href="https://double-diner-admin.vercel.app/" target="_blank">
                    <span class="font-bold hover:border-b">Admin</span>
                  </a>
                </p>
                <p class="mt-1 text-base font-sans font-light text-md text-white">
                   Access 
                  <button @click="showDoubleDinerModal = true">credentials</button>
                </p>
              </div>

              <div class="flex justify-center py-2">
                <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">React.js</div>
                <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">Express.js</div>
                <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">MySQL</div>
              </div>

              <div class="flex justify-center py-5">
                <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-sm text-black capitalize">
                  <a href="https://github.com/MohamedAhmeDdev/Double-Diner" target="_blank">source code</a>
                </button>
                <button class="border border-yellow-200 rounded-md mx-3 py-1 px-2 text-md text-sm text-white capitalize">
                  <a href="https://double-diner-user.vercel.app/" target="_blank">Live Display</a>
                </button>
              </div>

              <div v-if="showDoubleDinerModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="bg-white p-6 rounded-lg w-96 mx-auto">
                  <h2 class="text-xl font-bold mb-4 text-center">Access Credentials</h2>
                  <p class="font-bold">Role Admin</p>
                  <p><span class="text-sm font-bold">Username:</span> mohamed@gmail.com</p>
                  <p><span class="text-sm font-bold">Password:</span> 123456789</p>
                  <button @click="showDoubleDinerModal = false" class="mt-4 px-4 py-2 bg-black text-white rounded">Close</button>
                </div>
              </div>
              </div>

              <div class="div-bg flex flex-col rounded-md overflow-hidden">
                <div class="p-3 flex-shrink-0">
                  <img src="./assets/house.png" class="h-sm-7 h-48 w-full rounded-lg object-cover">
                </div>
                <div class="p-3 flex flex-col justify-between">
                    <p class="text-xl font-semibold text-white  text-center">Household</p>
                    <p class="mt-1 text-base font-sans font-light text-md text-white">Household is an application that allows homeowners to post job listings, while providing a convenient platform for job seekers to find  household position.</p>
                </div>
                <div class="flex justify-center py-2">
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">vue.js</div>
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">Express.js</div>
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">MySQL</div>
                </div>
                <div class="flex justify-center py-5">
                  <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-sm text-black capitalize"><a href="https://github.com/MohamedAhmeDdev/Household-management-system" target="_blank">source code</a></button>
                  <button class="border border-yellow-200  rounded-md mx-3 py-1 px-2 text-md text-sm text-white capitalize"><a href="https://household-app.vercel.app/" target="_blank">Live Display</a></button>
                </div>
              </div>
 

              <div class="div-bg flex flex-col rounded-md overflow-hidden">
                  <div class="p-3 flex-shrink-0">
                    <img src="./assets/amana.png" class="h-sm-7 h-48 w-full rounded-lg object-cover">
                  </div>
                  <div class="p-3 flex flex-col justify-between ">
                      <p class="text-xl font-semibold text-white text-center">Amana Virtual Solution</p>
                      <p class=" text-base text-md font-light font-sans text-white">Impowers clients by optimizing processes and introducing cutting-edge systems that elevate the overall efficiency of their operations.</p>  
                  </div>
                  <div class="flex justify-center py-5">
                   <button class="border border-yellow-200  rounded-md mx-3 py-1 px-2 text-md text-sm text-white capitalize"><a href="https://amana-website.vercel.app/" target="_blank">Live Display</a></button>
                  </div>
              </div> 

                <div class="div-bg flex flex-col rounded-md overflow-hidden">
                <div class="p-3 flex-shrink-0">
                  <img src="./assets/medops.png" class="h-sm-7 h-48 w-full rounded-lg object-cover">
                </div>
                <div class="p-3 flex flex-col justify-between">
                    <p class="text-xl font-semibold text-white  text-center">MedOps</p>
                    <p class="mt-1 text-base font-sans font-light text-md text-white">software application designed to streamline the inventory management and distribution process</p>
                    <p class="mt-1 text-base font-sans font-light text-md text-white">
                      Access 
                      <button @click="showMedopsModal = true">credentials</button>
                </p>
                </div>
                <div class="flex justify-center py-2">
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">React.js</div>
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">Express.js</div>
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">MySQL</div>
                </div>
                <div class="flex justify-center py-5">
                  <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-sm text-black capitalize"><a href="https://github.com/MohamedAhmeDdev/medOps-v-2.0" target="_blank">source code</a></button>
                  <button class="border border-yellow-200  rounded-md mx-3 py-1 px-2 text-md text-sm text-white capitalize"><a href="https://med-ops.vercel.app/auth" target="_blank">Live Display</a></button>
                </div>

                <div v-if="showMedopsModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div class="bg-white p-6 rounded-lg w-96 mx-auto">
                   <h2 class="text-xl font-bold mb-4 text-center">Access Credentials</h2>
                   <div class="space-y-5">
                      <div>
                        <p class="font-bold">1. Role manager</p>
                        <p><span class="text-sm font-bold">Username:</span> juma ali</p>
                        <p><span class="text-sm font-bold">Password:</span>nDSzuVF2</p>
                      </div>

                      <div>
                        <p class="font-bold">2. Role logistics</p>
                        <p><span class="text-sm font-bold">Username:</span>peter cain</p>
                        <p><span class="text-sm font-bold">Password:</span>aa92qRsu</p>
                      </div>

                       <div>
                        <p class="font-bold">3. Role Operator</p>
                        <p><span class="text-sm font-bold">Username:</span> dom</p>
                        <p><span class="text-sm font-bold">Password:</span>s4mcVhcT</p>
                      </div>

                      <div>
                        <p class="font-bold">4. Role Transporter</p>
                        <p><span class="text-sm font-bold">Username:</span> abdi</p>
                        <p><span class="text-sm font-bold">Password:</span>fTRskDzh</p>
                      </div>

                   </div>
                    
                  <button @click="showMedopsModal = false" class="mt-4 px-4 py-2 bg-black text-white rounded">Close</button>
                 </div>
               </div>
              </div>
                      
          </div>
        </div>

        <div id="contact" class="pt-32">
          <h2 class="text-3xl md:text-3xl font-bold text-white opacity-50 capitalize">How can you communicate?</h2>
          
          <section id="contact" class="relative w-full min-h-screen form-section flex flex-col  justify-center">
                <div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
                  <form  @submit.prevent="sendEmail" class="w-full md:w-2/3 ">
                    <h2 class="text-2xl pb-3 font-semibold text-white">
                        Send Message
                    </h2>
                    <div>
                      
                      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6  mb-1">
                        <div class="sm:col-span-3">
                          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                          <div class="mt-2">
                            <input type="text" v-model="name" name="name" placeholder="john doe" class="block w-full form-section px-3  py-2 rounded-md  border border-white focus:outline-none text-white ">
                          </div>
                            <p v-if="formSubmitted && !name" :class="{ 'text-red-500 text-xs italic': formSubmitted && !name }">Please enter your name.</p>
                        </div>

                        <div class="sm:col-span-3">
                          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                          <div class="mt-2">
                            <input type="text" v-model="email" name="email" placeholder="johndoe@gmail.com" class="block w-full form-section px-3  py-2 rounded-md  border border-white focus:outline-none text-white ">
                          </div>
                            <p v-if="formSubmitted && !email" :class="{ 'text-red-500 text-xs italic': formSubmitted && !email }">Please enter your email address.</p>
                        </div>

                      </div>

                      <div class="flex flex-col mb-3 pt-5">
                            <label class="text-white capitalize" for="message">Message</label>
                            <textarea 
                                rows="4" id="message"   v-model="message"    name="message" placeholder="Briefly explain"
                                class="px-3 py-2 form-section rounded-md border border-white  focus:outline-none text-white" 
                            ></textarea>
                            <p v-if="formSubmitted && !message" :class="{ 'text-red-500 text-xs italic': formSubmitted && !message }">Please enter message.</p>
                      </div>
                    </div>

                    <div class="w-full pt-3">
                        <button type="submit" class="w-full border border-white rounded-md px-4 py-2 text-white transition duration-50 hover: focus:outline-none font-semibold text-md cursor-pointer">
                           Send
                        </button>
                    </div>
                  </form>
                </div>
          </section>

        </div>

        <div class="pt-32">
          <h2 class="text-3xl md:text-3xl font-bold text-white opacity-50 capitalize">how to Get in touch</h2>
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-10">
                  <div class="p-4 text-center space-y-3">
                    <div class="icon rounded-full mx-auto w-24 h-24">
                      <span class="material-symbols-outlined py-8 text-white">map</span>
                    </div>
                    <h3 class="mb-4 text-white text-lg font-bold">Address</h3>
                    <p class="text-white hr" >Nairobi</p>
                  </div>

          
                  <div class="p-4 text-center space-y-3">
                    <div class="icon rounded-full mx-auto w-24 h-24">
                      <span class="material-symbols-outlined py-8 text-white">call</span>
                    </div>
                    <h3 class="mb-4 text-white text-lg font-bold">Phone Number</h3>
                    <p class="text-white"><a href="tel:+254704170598">+254 704170598</a></p>
                  </div>

                  <div class="p-4 text-center space-y-3">
                    <div class="icon rounded-full mx-auto w-24 h-24">
                      <span class="material-symbols-outlined py-8 text-white">stacked_email</span>
                    </div>
                    <h3 class="mb-4 text-white text-lg font-bold">Email Address</h3>
                    <p class="text-white"><a href="mailto:info@yoursite.com">ma07041705@gmail.com</a></p>
                  </div>

                  <div class="p-4 text-center space-y-3">
                    <div class="icon rounded-full mx-auto w-24 h-24">
                      <span class="material-symbols-outlined py-8 text-white">language</span>
                    </div>
                    <h3 class="mb-4 text-white text-lg font-bold">Website</h3>
                    <p class="text-white"><a href="https://mohamed-a-mohamed.vercel.app/">mohamedahmed</a></p>
                  </div>
          </div>
        </div>
</div>
<div class="pt-10 md:pt-28">
     <div class="container-fluid div-bg p-4 text-center">
        <p class="font-sans text-lg font-light text-white">
          Mohamed Ahmed <font-awesome-icon :icon="['fas', 'copyright']" class="w-4 h-4 md:w-4 md:h-4 cursor-pointer"/>
          {{ new Date().getFullYear() }}
        </p>
    
        <div class="flex gap-2 pt-3 items-center justify-center">
                    <a href="https://www.linkedin.com/in/mohamed-ahmed-513947241/"><fa :icon="['fab', 'linkedin' ]" class="w-7 h-7 icon cursor-pointer" /></a>
                    <a href="https://github.com/MohamedAhmeDdev"><fa :icon="['fab', 'github' ]" class="w-7 h-7 icon cursor-pointer"/></a>
        </div>
      </div>
</div>
</div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      formSubmitted: false,
      showMobileMenu: false,
      showDropdown: false,
      scrolled: false,
      showDoubleDinerModal: false,
      showMedopsModal: false, 
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    sendEmail(e) {
  this.formSubmitted = true;

  if (!this.name || !this.email || !this.message) {
    return;
  } else {
    emailjs
      .sendForm('service_tclk0di', 'template_ngr7r6j', e.target, 'mNNocNTmyGlPAiot7', {
        name: this.name,
        email: this.email,
        message: this.message
      })
      .then(() => {
        alert('Thank You For Contacting Me');
        this.name = '';
        this.email = '';
        this.message = '';
        this.formSubmitted = false;
      })
      .catch((err) => {
        if (err) {
          alert(err.message);
        }
      });
  }
},

    handleScroll() {
      this.scrolled = window.scrollY > 100;
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.bg-primary {
  background-color: #151314;
}
.scrolled {
  background-color: #151314c9;
}

.nav-link:hover {
    border-bottom: 1px solid white;
}

.nav-link {
    transition: border-bottom 0.3s ease;
}

.mobile-menu {
    transition: transform 0.3s ease; 
 }

.text-primary-text {
  color: #e8cfb1;
}
.text-yr{
  color: #fbbc04;
}
.btn{
  background-color:rgba(231, 206, 176, 0.063);
  color: white;
}
.btn:hover{
  background-color:rgba(231, 206, 176, 0.063);
  color: white;
}
.icon-div:hover{
  color:white;
   background-color: rgba(255, 255, 255, 0.419);
}
.source-btn{
  background-color: #fbbc04;
}
.icon {
  background-color: rgba(255, 255, 255, 0.296);
}
.div-bg{
  background-color: rgba(231, 206, 176, 0.063)
}
.bg-button {
  background-color: #151314;
}
.timeline{
  background-color: #fbbc04
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.form-section{
  background-color: rgba(231, 206, 176, 0.035)
}

.form-section button:hover{
  background-color: white;
  color: black;
}
</style>
