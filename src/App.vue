<template>
  <div class="bg-primary max-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

      <div class="items-center relative">
        <h2 class="text-3xl font-bold text-primary-text capitalize">Who am I</h2>
        <div class="mx-auto rounded-full h-48 w-48  lg:h-80 lg:w-80">
          <img src="https://mohamedahmedm.vercel.app/image/1667145901902-removebg-preview%20(3).png" alt="Profile Picture" class="w-full h-full mb-4 rounded-full">
        </div>
        <div class="text-center mt-10">
          <h1 class="text-4xl font-bold text-white">Frontend Developer</h1>
          <p class="text-md text-white">Hey there, i'm Mohamed Ahmed. a Frontend Developer</p>

          <button class="btn capitalize font-semibold rounded-sm mt-5 px-7 py-1"><a href="https://docs.google.com/file/d/1qAAqZ_0nqGFcRBwxrvJG7oBcqskPp-Sc/edit?filetype=msword" target="_blank" >download cv</a></button>
        </div>
        
          <div class="absolute top-60">
            <ul class="flex flex-col">
              <div class="py-2">
                <a href="https://www.linkedin.com/in/mohamed-ahmed-513947241/"><fa :icon="['fab', 'linkedin' ]" class="w-10 h-10 icon cursor-pointer" /></a>
              </div>
              <div>
               <a href="https://github.com/MohamedAhmeDdev"><fa :icon="['fab', 'github' ]" class="w-10 h-10 icon cursor-pointer"/></a>
              </div>
           </ul>
          </div>
      </div>

      <div class="pt-24 flex items-center justify-center mx-auto ">
        <h3 class="text-xl font-bold text-primary-text">Tech stack:</h3>
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

      <div class="pt-40">
        <h2 class="text-3xl font-bold text-primary-text capitalize">What i do</h2>
        <p class="mt-4 text-white text-md sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
          As a front-end developer, I am passionate about creating user-friendly software that provides a seamless experience for the end-user. 
         I am dedicated to the art of designing and developing attractive and intuitive interfaces that are not only visually appealing but also highly functional. I take great satisfaction in seeing my work bring joy and value to users.
       </p>
      </div>

      <!-- <div class="mb-8">
        <h2 class="text-3xl font-bold">Project Details</h2>
        <p class="mt-4 text-white">Provide details about your projects, including the technologies used, challenges faced, and outcomes achieved.</p>
      </div> -->

      <!-- <div>
        <h2 class="text-3xl font-bold">Tech Stack</h2>
        <ul class="mt-4 list-disc pl-8">
          <li>Tech 1</li>
          <li>Tech 2</li>
          <li>Tech 3</li>
      
        </ul>
      </div> -->
 
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

.btn {
  background-color:  #f1be70;
}

.icon {
  background-color:  #b8d0f9;
}
</style>
