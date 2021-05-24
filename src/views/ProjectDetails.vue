<template>
    <h1>Este es project: {{ projectName }}</h1>

    <section class="text-gray-800 body-font">
        <div class="container flex flex-wrap px-5 pt-24 mx-auto">
            <div class="lg:w-4/12 md:w-5/12 sm:w-6/12 sm:text-center lg:text-left">
                <div class="mb-12">
                    <h5 class="tracking-widest text-gray-600 mb-4">PROJECT CASE</h5>
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                        <span class="block xl:inline">Website Developer for an ecommerce</span>
                    </h1>
                </div>
                <div class="mb-8">
                    <h5 class="tracking-widest text-gray-600 mb-1">MY ROLE</h5>
                    <ul class="list-none font-semibold">
                        <li>Brand Designer</li>
                        <li>Website Builder</li>
                        <li>Graphic Design Assesment</li>
                    </ul>
                </div>
                <div class="mb-8">
                    <h5 class="tracking-widest text-gray-600 mb-1">CLIENT</h5>
                    <ul class="list-none font-semibold">
                        <li>Albarrán & Rocha S.L.</li>
                    </ul>
                </div>
                <div class="mb-8">
                    <h5 class="tracking-widest text-gray-600 mb-1">YEAR</h5>
                    <ul class="list-none font-semibold">
                        <li>2019 - 2021</li>
                    </ul>
                </div>
            </div>
            <div class="lg:w-8/12 md:w-7/12 sm:w-6/12 sm:text-center lg:text-justify px-4">
                <h3 class="text-xl text-gray-400 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium fusce id velit ut tortor. Arcu non sodales neque sodales ut. Sodales ut etiam sit amet nisl purus in mollis nunc. Erat velit scelerisque in dictum non consectetur a erat. Suscipit adipiscing bibendum est ultricies integer quis auctor. Amet massa vitae tortor condimentum lacinia. Sodales ut eu sem integer vitae justo. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Netus et malesuada fames ac turpis egestas maecenas. In vitae turpis massa sed elementum tempus egestas. Et netus et malesuada fames. Venenatis cras sed felis eget velit aliquet. Enim sed faucibus turpis in eu mi bibendum. Nunc sed velit dignissim sodales ut eu sem integer vitae.</h3>
                <br>
                <h3 class="text-xl text-gray-400 font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium fusce id velit ut tortor. Arcu non sodales neque sodales ut. Sodales ut etiam sit amet nisl purus in mollis nunc. Erat velit scelerisque in dictum non consectetur a erat.
                </h3>
            </div>
        </div>
    </section>

    <section class="text-gray-600 body-font">
        <div class="container px-5 pb-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap md:-m-2 -m-1">
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300">
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301">
                    </div>
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360">
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361">
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302">
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['projectName'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>