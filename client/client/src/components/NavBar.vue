<template>
    <nav class="flex items-center justify-between h-32">
        <div class="flex gap-2">
            <h1 class="text-white font-bold text-2xl">My <span class="text-secondary">ToDo</span> List</h1>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 11.25V4.375L23.125 11.25M7.5 2.5C6.1125 2.5 5 3.6125 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10L17.5 2.5H7.5Z" fill="white"/>
                </svg>
        </div>
        <div class="flex items-center gap-10">
            <a class="text-white font-medium" href="#home">Home</a>
            <a class="text-white font-medium" href="#about">About Us</a>
            <a class="text-white font-medium" href="#contact">Contact</a>
            <button class="px-8 py-3 rounded-full text-white font-bold text-lg bg-secondary" onclick="window.location.href='http://localhost:8080/ToDo'">Get Strated</button>
        </div>
    </nav>
</template>

<script>

</script>

<style scoped>

</style>