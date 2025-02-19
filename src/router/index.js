import {createRouter, createWebHistory } from 'vue-router'
import Homepage from './../components/Homepage.vue'
import About from './../components/About.vue'
import Booking from './../components/Booking.vue'
import Contact from './../components/Contact.vue'
import Feedback from './../components/Feedback.vue'
import Menu from './../components/Menu.vue'
import Order from './../components/Order.vue'
import Restaurantlist from './../components/Restaurant.vue'

 // route array of object : path, component

 const routes = [
 {
    path:'/',
    component:Homepage
 },
 {
    path:'/about',
    component:About
 },
 {
    path:'/booking',
    component:Booking
 },
 {
    path:'/contact',
    component:Contact
 },
 {
    path:'/feedback',
    component:Feedback
 },
 {
    path:'/menu',
    component:Menu
 },
 {
    path:'/order',
    component:Order
 },
 {
    path:'/Restaurantlist',
    component:Restaurantlist
 },
 ]
 const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
 })

 export default router