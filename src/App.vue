<template>

<div v-if="loading" class="loading-spinner"></div>

  <div v-else>
  <div>
    <Analytics/>
   </div>

  <div class="bg-primary ">
    <div class="max-w-6xl mx-auto pt-2 px-4">

      <div :class="['flex h-16 items-center fixed top-0  w-full z-50', { 'scrolled': scrolled }]">
          <div class="flex-shrink-0">
            <a href="/" class="text-xl font-bold text-white font-sans capitalize">Mohamed Ahmed</a>  
          </div>
       
              <div :class="{'hidden md:flex flex-1 justify-center space-x-6': !showMobileMenu, 'mt-72 w-full flex flex-col  z-10': showMobileMenu}" >

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
  
        <div id="home" class=" flex flex-col items-center justify-center h-screen">
          <div class="pb-20 lg:pr-20">
            <p class="text-3xl text-white tracking-wide font-medium font-sans pb-5">Hey There!</p>
            <p class="text-3xl text-white font-bold font-sans tracking-wide pb-5">I'm Mohamed Ahmed</p>
            <h1 class="text-white text-xl md:text-4xl tracking-wide font-sans">Frontend Developer</h1>

            
           <div class="flex gap-2 pt-3 items-center justify-center">
                  <a href="https://www.linkedin.com/in/mohamed-ahmed-513947241/"><fa :icon="['fab', 'linkedin' ]" class="w-7 h-7 icon cursor-pointer" /></a>
                  <a href="https://github.com/MohamedAhmeDdev"><fa :icon="['fab', 'github' ]" class="w-7 h-7 icon cursor-pointer"/></a>
            </div>
          </div>    
        </div>

     
            
        <div id="about" class="pt-5">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div class="col-span-1 lg:col-span-1 mx-auto md:mx-0">
              <div class="">
                <img src="https://avatars.githubusercontent.com/u/92859355?v=4" alt="Profile Picture" class="0 mb-4 rounded-md -z-10">
              </div>
            </div>

            <div class="text-center md:text-left md:col-span-1 lg:col-span-2">
              <h2 class="text-3xl md:text-3xl font-bold text-white opacity-50 capitalize">About Me</h2>
              <p class="mt-4 text-white text-md font-sans tracking-wide sm:mt-5 md:mt-5 opacity-90 leading-relaxed">
                As a front-end developer, I am passionate about creating user-friendly software that provides a seamless experience for the end-user. 
                I am dedicated to the art of designing and developing attractive and intuitive interfaces that are not only visually appealing but also highly functional. I take great satisfaction in seeing my work bring joy and value to users.
              </p>

              <div class="my-4">
                <button class="btn border-2 border-white text-white capitalize font-semibold rounded-sm mt-5 px-7 py-1"><a href="https://drive.google.com/file/d/1UADF3fkF9xY6iMofwglGkFqX6geCGtP4/view?usp=drive_link" target="_blank" >download CV</a></button>
              </div>
            </div>
          </div>
        </div>

        <div id="technologies" class="pt-32">
          <h2 class="text-3xl md:text-3xl text-center font-bold text-white opacity-50 capitalize">Technologies</h2>  
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
          <h2 class="text-3xl md:text-3xl text-center font-bold text-white opacity-50 capitalize">What I've learned</h2>
          <div class="mt-10  mx-auto px-10 sm:px-0 md:px-0  grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">

            <div class="div-bg flex flex-col rounded-md overflow-hidden">
              <div class="p-3 flex flex-col justify-between space-y-3">
                  <p>
                    <span class="text-2xl font-bold text-yr">February</span> <span class="text-md font-bold text-yr">2022</span>
                    <span class="text-2xl text-white text-yr">-</span>
                    <span class="text-2xl font-bold text-yr">January</span> <span class="text-md font-bold text-yr">2023</span>
                  </p>
                  <p class="text-xl font-semibold text-white">Diploma In Software Development</p>
                  <p class="text-md text-white opacity-50">Institute Of Software Technologies</p>
                  <p class="mt-1 text-base font-sans opacity-90 font-light text-md text-white">Double Diner is a food delivery service that allows customers to place orders from the comfort of their own location.</p>
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
                  <p class="mt-1 text-base font-sans opacity-90 font-light text-md text-white">Double Diner is a food delivery service that allows customers to place orders from the comfort of their own location.</p>
              </div>
            </div>
         </div>
        </div>

        <div id="project" class="pt-32">
          <h2 class="text-3xl md:text-3xl text-center font-bold text-white opacity-50 capitalize">What I've accomplished</h2>
           
          <div class="mt-10  mx-auto px-10 sm:px-0 md:px-0  grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">

              <div class="div-bg flex flex-col rounded-md overflow-hidden">
                <div class="p-3 flex-shrink-0">
                  <img src="https://mohamedahmedm.vercel.app/image/2023-01-16%20(10).png" class="h-sm-7 h-48 w-full rounded-lg object-cover">
                </div>
                <div class="p-3 flex flex-col justify-between">
                    <p class="text-xl font-semibold text-white  text-center">Double Diner Website/App</p>
                    <p class="mt-1 text-base font-sans font-light text-md text-white">Double Diner is a food delivery service that allows customers to place orders from the comfort of their own location.</p>
                </div>
                <div class="flex justify-center py-2">
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">React.js</div>
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">Express.js</div>
                  <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">MySQL</div>
                </div>
                <div class="py-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 justify-items-center">
                    <div class="">
                      <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-sm text-black capitalize"><a href="https://github.com/MohamedAhmeDdev/Double-Diner" target="_blank">source code</a></button>
                    </div>
                    <div class="">
                      <button class="border border-yellow-200  rounded-md mx-3 py-1 px-2 text-md text-sm text-white capitalize"><a href="https://double-diner-user.vercel.app/" target="_blank">User</a></button>
                    </div>
                    <div class="">
                      <button class="border border-yellow-200  rounded-md mx-3 py-1 px-2 text-md text-sm text-white capitalize"><a href="https://double-diner-admin.vercel.app/Login" target="_blank">Admin</a></button>
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
                    <img src="https://mohamedahmedm.vercel.app/image/2022-12-26%20(2).png" class="h-sm-7 h-48 w-full rounded-lg object-cover">
                  </div>
                  <div class="p-3 flex flex-col justify-between ">
                      <p class="text-xl font-semibold text-white text-center">eBook</p>
                      <p class=" text-base text-md font-light font-sans text-white">eBooks are digital books that offer a flexible and convenient reading experience.</p>  
                  </div>
                  <div class="flex justify-center py-2">
                    <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">next.js</div>
                    <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">Express.js</div>
                    <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">MySQL</div>
                  </div>
                  <div class="flex justify-center py-5">
                    <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-sm capitalize"><a href="https://github.com/MohamedAhmeDdev/eBook-Next-" target="_blank">source code</a></button>
                  </div>
              </div>  

              <div class="div-bg flex flex-col rounded-md overflow-hidden">
                  <div class="p-3 flex-shrink-0">
                    <img src="https://static.vecteezy.com/system/resources/previews/002/115/431/original/coming-soon-business-sign-free-vector.jpg" class="h-sm-7 h-48 w-full rounded-lg object-cover">
                  </div>
                  <div class="p-3 flex flex-col justify-between ">
                      <p class="text-xl font-semibold text-white text-center">medops</p>
                      <p class=" text-base text-md font-light font-sans text-white">The MedOps is a software application designed to streamline the inventory management and distribution process within a medical warehouse.</p>  
                  </div>
                  <div class="flex justify-center py-2">
                    <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">React.js</div>
                    <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">Express.js</div>
                    <div class="icon mx-1 px-1 rounded-sm capitalize font-light text-lg text-white">MySQL</div>
                  </div>
                  <div class="flex justify-center py-5">
                    <!-- <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-sm capitalize"><a href="https://github.com/MohamedAhmeDdev/eBook-Next-" target="_blank">source code</a></button> -->
                    <p class="text-2xl font-semibold text-white text-center">Ongoing</p>
                  </div>
              </div> 
                      
          </div>
        </div>

        <div id="contact" class="pt-32">
          <h2 class="text-3xl md:text-3xl text-center font-bold text-white opacity-50 capitalize">How can you communicate?</h2>
          
          <section id="contact" class="relative w-full min-h-screen form-section flex flex-col  justify-center mt-10">
                <div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
                    <form  @submit.prevent="sendEmail" class="w-full md:w-2/3 p-6">
                    <h2 class="text-2xl pb-3 font-semibold text-white">
                        Send Message
                    </h2>
                    <div>
                        <div class="flex flex-col mb-3">
                        <label class="text-white capitalize" for="name">Full Name</label>
                        <input 
                            type="text" id="name" 
                            class="px-3 py-2 form-section rounded-md  border border-white focus:outline-none text-white"
                            autocomplete="off" placeholder="john doe"   v-model="name"    name="name"
                        >
                        <p v-if="formSubmitted && !name" :class="{ 'text-red-500 text-xs italic': formSubmitted && !name }">Please enter your name.</p>
                        </div>

                        <div class="flex flex-col mb-3 pt-5">
                        <label class="text-white capitalize" for="email">Email Address</label>
                        <input 
                            type="text" id="email" 
                            class="px-3 py-2 form-section rounded-md border border-white  focus:outline-none text-white"
                            autocomplete="off" placeholder="johndoe@gmail.com"     v-model="email"    name="email"
                        >
                        <p v-if="formSubmitted && !email" :class="{ 'text-red-500 text-xs italic': formSubmitted && !email }">Please enter your email address.</p>
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
                        <button type="submit" class="w-full border border-white rounded-full px-4 py-2 text-white transition duration-50 focus:outline-none font-semibold text-md cursor-pointer">
                           Send
                        </button>
                    </div>
                    </form>
                </div>
          </section>

        </div>

        <div class="pt-32">
          <h2 class="text-3xl md:text-3xl text-center font-bold text-white opacity-50 capitalize">how to Get in touch</h2>
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
      loading: true, // Initially set to true to show the loading spinner
      showMobileMenu: false,
      showDropdown: false,
      scrolled: false,
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
      .sendForm('service_h3i5phy', 'template_ngr7r6j', e.target, 'mNNocNTmyGlPAiot7', {
        name: this.name,
        email: this.email,
        message: this.message
      })
      .then(() => {
        alert('Thank You For Contacting Me');
        // Reset form fields after successful submission
        this.name = '';
        this.email = '';
        this.message = '';
        this.formSubmitted = false; // Reset the form submission flag
      })
      .catch((err) => {
        if (err) {
          alert(err.message);
        }
      });
  }
},

    handleScroll() {
      // Set 'scrolled' to true when the user scrolls to a certain position
      this.scrolled = window.scrollY > 100; // Adjust the value as needed
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    setTimeout(() => {
      this.loading = false; // Set to false to hide the loading spinner
    }, 2000); // Adjust the delay time as needed
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.loading-spinner {
  /* Style for the loading spinner container */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.scrolled {
  background-color: #151314c9;
}

 .nav-link:hover {
    border-bottom: 1px solid #fbbc04; /* Set your desired border color */
  }

  /* Add a transition for link clicks */
  .nav-link {
    transition: border-bottom 0.3s ease; /* Adjust the timing function and duration as needed */
  }

  /* Add a transition for mobile menu button clicks */
  .mobile-menu {
    transition: transform 0.3s ease; /* Adjust the timing function and duration as needed */
  }
.bg-primary {
  background-color: #151314;
}

.text-primary-text {
  color: #e8cfb1;
}
.text-yr{
  color: #fbbc04;
}
.btn:hover{
  background-color: white;
  color:black;
}
.icon-div:hover{
  color:white;
  background-color: #fbbd0490
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
</style>
