<template>
<div>
<img alt="Vuelogo" src="../assets/logo.png" />
    <nav>
        <ul>
            <li><router-link to="/">Show-Data</router-link></li>
            <li><router-link to="/post">Post-Data</router-link></li>
            <li><router-link to="/child">Test</router-link></li>
        </ul>
    </nav>
    </div>
</template>
<script>
export default {
    name:"Navbar"
}
</script>