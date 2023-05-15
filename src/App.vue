<template>
  <div class="bg-primary ">
    <div class="max-w-7xl mx-auto py-12 px-4">

        <div class="items-center relative">
          <h2 class="text-lg md:text-3xl font-bold text-primary-text font-sans capitalize">Who am I</h2>
          <div class="mx-auto rounded-full h-48 w-48  lg:h-80 lg:w-80">
            <img src="https://mohamedahmedm.vercel.app/image/1667145901902-removebg-preview%20(3).png" alt="Profile Picture" class="w-full h-full mb-4 rounded-full">
          </div>
          <div class="text-center mt-10">
            <h1 class="text-white text-xl md:text-4xl font-medium md:font-bold font-sans">Frontend Developer</h1>
            <p class="text-sm md:text-lg text-white font-sans">Hey there, i'm Mohamed Ahmed. a Frontend Developer</p>

            <button class="btn capitalize font-semibold rounded-sm mt-5 px-7 py-1"><a href="https://docs.google.com/file/d/1qAAqZ_0nqGFcRBwxrvJG7oBcqskPp-Sc/edit?filetype=msword" target="_blank" >download CV</a></button>
          </div>
          
            <div class="absolute top-40 md:top-60">
              <ul class="flex flex-col">
                <div class="py-2">
                  <a href="https://www.linkedin.com/in/mohamed-ahmed-513947241/"><fa :icon="['fab', 'linkedin' ]" class="md:w-10 md:h-10 w-7 h-7 icon cursor-pointer" /></a>
                </div>
                <div>
                <a href="https://github.com/MohamedAhmeDdev"><fa :icon="['fab', 'github' ]" class="w-7 h-7 md:w-10 md:h-10 icon cursor-pointer"/></a>
                </div>
            </ul>
            </div>
        </div>

        <div class="pt-10 md:pt-24 md:flex md:items-center md:justify-center mx-auto ">
          <h3 class="text-sm md:text-xl mb-3 lg:mb-0 font-bold text-primary-text font-sans">Tech stack:</h3>
            <p class="flex ml-5">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a>
            <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a>
            <a class="bg-white" href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>  
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
            </p>
        </div>

        <div class="pt-20 md:pt-40">
          <h2 class="text-lg md:text-3xl font-bold text-primary-text capitalize">What i do</h2>
          <p class="mt-4 text-white text-md sm:text-lg font-sans tracking-wide sm:mt-5 md:mt-5  sm:max-w-xl sm:mx-auto  lg:mx-0">
            As a front-end developer, I am passionate about creating user-friendly software that provides a seamless experience for the end-user. 
            I am dedicated to the art of designing and developing attractive and intuitive interfaces that are not only visually appealing but also highly functional. I take great satisfaction in seeing my work bring joy and value to users.
        </p>
        </div>

        <div class="pt-16 md:pt-40">
          <h2 class="text-lg md:text-3xl font-bold text-primary-text capitalize">What I've accomplished</h2>
           
          <div class="mt-10  mx-auto px-16 sm:px-0 md:px-0  grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">

            <div class="flex flex-col rounded-md overflow-hidden">
              <div class="flex-shrink-0">
                <img src="https://mohamedahmedm.vercel.app/image/2023-01-16%20(10).png" class="h-sm-7 h-48 w-full object-cover">
              </div>
              <div class="bg-white p-3 flex flex-col justify-between">
                  <p class="text-2xl font-semibold text-gray-900 text-center">Double Diner Website/App</p>
                  <p class="mt-1 text-base text-gray-500">Double Diner is a food delivery service that allows customers to place orders from the comfort of their own location.</p>
              </div>
              <div class="bg-white flex justify-center py-2">
                <div class="btn mx-1 px-1 rounded-sm capitalize text-lg text-white">React.js</div>
                <div class="btn mx-1 px-1 rounded-sm capitalize text-lg text-white">Express.js</div>
                <div class="btn mx-1 px-1 rounded-sm capitalize text-lg text-white">MySQL</div>
              </div>
              <div class="bg-white py-5">
                <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-white capitalize">source code</button>
              </div>
            </div>

             <div class="flex flex-col rounded-md overflow-hidden">
                <div class="flex-shrink-0">
                  <img src="https://mohamedahmedm.vercel.app/image/2022-12-26%20(2).png" class="h-sm-7 h-48 w-full object-cover">
                </div>
                <div class="bg-white p-3 flex flex-col justify-between ">
                    <p class="text-2xl font-semibold text-gray-900 text-center">eBook</p>
                    <p class=" text-base text-gray-500">eBooks are digital books that offer a flexible and convenient reading experience.</p>  
                </div>
                <div class="bg-white flex justify-center py-2">
                  <div class="btn mx-1 px-1 rounded-sm capitalize text-lg text-white">next.js</div>
                  <div class="btn mx-1 px-1 rounded-sm capitalize text-lg text-white">Express.js</div>
                  <div class="btn mx-1 px-1 rounded-sm capitalize text-lg text-white">MySQL</div>
                </div>
                <div class="bg-white py-5">
                  <button class="source-btn mx-3 py-1 px-2 rounded-sm text-md text-white capitalize">source code</button>
                </div>
            </div>  
                      
          </div>
        </div>
  
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.bg-primary {
  background-color: #151314;
}

.text-primary-text {
  color: #e8cfb1;
}

.btn{
  background-color:  #f1be70;
}
.source-btn{
  background-color: #6e7a94;
}
.icon {
  background-color:  #b8d0f9;
}
.div-bg{
  background-color: rgba(231, 206, 176, 0.5)
}
</style>
