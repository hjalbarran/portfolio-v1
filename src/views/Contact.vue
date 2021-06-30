<template>
<div>
    <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 mt-0 bg-gray-300 right-0 md:right-64 first-animation">
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
        <div class="container flex flex-wrap px-5 lg:px-11 pt-24 mx-auto">
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
                        <li class="tracking-wide">+58 4126102861</li>
                        <li>hjalbarran@gmail.com</li>
                        <li>https://github.com/hjalbarran</li>
                    </ul>
                </div>
                <span class="inline-flex">
                    <!-- WHATSAPP -->
                    <a :href="url.whatsapp" target="_blank" title="WhatsApp" class="ml-3 text-gray-500 hover:text-black">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                    </a>
                    <!-- INSTAGRAM -->
                    <a :href="url.instagram" target="_blank" title="Instagram" class="ml-3 text-gray-500 hover:text-black">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <!-- LINKEDIN -->
                    <a :href="url.linkedin" target="_blank" title="LinkedIn" class="ml-3 text-gray-500 hover:text-black">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                    <!-- GITHUB -->
                    <a :href="url.github" target="_blank" title="GitHub" class="ml-3 text-gray-500 hover:text-black">
                        <svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 256 250">
                            <g>
                                <path stroke="none" fill="currentColor" d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"></path>
                            </g>
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
      message: null,
      url: {
        instagram: 'https://www.instagram.com/hj_albarran/',
        linkedin: 'https://www.linkedin.com/in/humberto-jose-albarran-ramirez/',
        github: 'https://github.com/hjalbarran',
        whatsapp: 'https://wa.me/584126102861'
      }
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