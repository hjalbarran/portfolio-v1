<template>
<div>
    <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300 right-0 md:right-64 first-animation">
            <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37325.19444855875!2d-66.9134410132135!3d10.474806114925432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1624318369831!5m2!1ses-419!2sve" style="filter: grayscale(1) contrast(1.2) opacity(0.65);"></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex md:visible invisible first-animation">
            <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-1 shadow-md text-center">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-6xl">
                    <span class="block xl:inline">Let's work together!</span>
                </h1>
            </div>
        </div>
    </section> 
    <section class="text-gray-800 body-font">
        <div class="container flex flex-wrap px-5 lg:px-10 pt-24 mx-auto">
            <div class="lg:w-4/12 md:w-5/12 sm:w-6/12 sm:text-center lg:text-left">
                <div class="mb-12">
                    <h5 class="tracking-widest text-gray-600 mb-4 second-animation">CONTACT</h5>
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                        <span class="block xl:inline third-animation">Get in touch - Let's work together!</span>
                    </h1>
                </div>
                <div class="mb-8 fourth-animation">
                    <h5 class="tracking-widest text-gray-600 mb-1">CONTACT INFO</h5>
                    <ul class="list-none font-semibold">
                        <li>+58 4126102861</li>
                        <li>hjalbarran@gmail.com</li>
                        <li>https://github.com/hjalbarran</li>
                    </ul>
                </div>
                <span class="inline-flex">
                    <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    </a>
                </span>
            </div>
            <div class="lg:w-8/12 md:w-7/12 sm:w-6/12 sm:text-center lg:text-justify px-4">
                <h3 class="text-xl text-gray-400 font-semibold second-animation">Got a project? Drop me a message. I am always excited to join and develop new projects.</h3>
                <div class="container mx-auto pt-2">
                    <Form class="contact-form flex flex-wrap -m-2 third-animation" @submit="sendEmail">
                        <fieldset class="container flex">
                            <legend class="text-transparent leading-none text-xs pl-2">Name and email</legend>
                            <div class="p-2 w-1/2">
                                <label for="1" class="leading-7 text-sm text-gray-600" id="name">Name</label>
                                <Field type="text" name="name" id="1" :rules="isRequired" aria-describedby="name" :aria-invalid="isRequired ? true : null" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" aria-required/>
                                <ErrorMessage class="text-red-500" name="name" id="name" aria-live="assertive" />
                            </div>
                            <div class="p-2 w-1/2">
                                <label for="2" class="leading-7 text-sm text-gray-600" id="email">Email</label>
                                <Field type="email" name="email" id="2" :rules="validateEmail" aria-describedby="email" :aria-invalid="validateEmail ? true : null" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <ErrorMessage class="text-red-500" name="email" id="email" aria-live="assertive" />
                            </div>
                        </fieldset>
                        <fieldset class="container flex">
                            <legend class="text-transparent leading-none text-xs pl-2">Message</legend>
                            <div class="p-2 w-full">
                                <label for="3" class="leading-7 text-sm text-gray-600" id="message">Message</label>
                                <Field type="text" name="message" id="3" :rules="isRequired" aria-describedby="message" :aria-invalid="isRequired ? true : null" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                                <ErrorMessage class="text-red-500" name="message" id="message" aria-live="assertive" />
                            </div>
                        </fieldset>
                        <input type="submit" value="Send" class="flex mx-auto px-8 py-2 my-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 md:py-4 md:text-lg md:px-10 hover:bg-gray-700 cursor-pointer">
                    </Form>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { Field, Form, ErrorMessage  } from 'vee-validate'


export default {
  components: {
    Field,
    Form,
    ErrorMessage 
  },
  data () {
    return {
      name: null,
      email: null, 
      message: null
    }
  },
  methods: {
    // Validator function
    isRequired (value) {
      return value ? true : 'This field is required'
    },
    sendEmailTest (values) {
      alert(JSON.stringify(values, null, 2))
    },
    validateEmail (value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }
      // if the field is not a valid email
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'This field must be a valid email'
      }
      // All is good
      return true
    },
    sendEmail: () => {
      emailjs.sendForm('service_bbxwl7k', 'template_9pgeflp', '.contact-form', 'user_swYdziZ2vuZ4jvZHBYsl1')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text)
        }, (error) => {
          console.log('FAILED...', error)
        })
    }
  }
}
</script>

<style scoped>

</style>