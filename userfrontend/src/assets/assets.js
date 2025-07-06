import basket_icon from './basket_icon.png'
import logo from './logo.png'
import logo_bottom from './logo-bottom.png'
import header_img from './header_img.jpg'
import search_icon from './search_icon.png'
// Menu/Category Images
import menu_1 from './menu_1.jpg'
import menu_2 from './menu_2.jpg'
import menu_3 from './menu_3.jpg'
import menu_4 from './menu_4.jpg'
import menu_5 from './menu_5.jpg'
import menu_6 from './menu_6.jpg'
import menu_7 from './menu_7.jpg'
import menu_8 from './menu_8.jpg'

// Product Images

// Soaps
import soap_1 from './1soap.jpg'
import soap_2 from './2soap.jpg'
import soap_3 from './3soap.jpg'
import soap_4 from './4soap.jpg'

// Shampoo
import shampoo_1 from './1shampoo.jpg'
import shampoo_2 from './2shampoo.jpg'
import shampoo_3 from './3shampoo.jpg'
import shampoo_4 from './4shampoo.jpg'

// Shower Gel (sg)
import sg_1 from './1sg.jpg'
import sg_2 from './2sg.jpg'
import sg_3 from './3sg.jpg'
import sg_4 from './4sg.jpg'

// Slippers (slip)
import slip_1 from './1slip.jpg'
import slip_2 from './2slip.jpg'
import slip_3 from './3slip.jpg'
import slip_4 from './4slip.jpg'

// Dispenser
import disp_1 from './1disp.jpg'
import disp_2 from './2disp.jpg'
import disp_3 from './3disp.jpg'
import disp_4 from './4disp.jpg'

// Hair Conditioner (hc)
import hc_1 from './1hc.jpg'
import hc_2 from './2hc.jpg'
import hc_3 from './3hc.jpg'
import hc_4 from './4hc.jpg'

// Body Lotion (bl)
import bl_1 from './1bl.jpg'
import bl_2 from './2bl.jpg'
import bl_3 from './3bl.jpg'
import bl_4 from './4bl.jpg'

// Shaving Kit
import sk_1 from './1sk.jpg'
import sk_2 from './2sk.jpg'
import sk_3 from './3sk.jpg'
import sk_4 from './4sk.jpg'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    logo_bottom,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
  { menu_name: "Soaps", menu_image: menu_1 },
  { menu_name: "Shampoo", menu_image: menu_2 },
  { menu_name: "Shower Gel", menu_image: menu_3 },
  { menu_name: "Slippers", menu_image: menu_4 },
  { menu_name: "Dispenser", menu_image: menu_5 },
  { menu_name: "Hair Conditioner", menu_image: menu_6 },
  { menu_name: "Body Lotion", menu_image: menu_7 },
  { menu_name: "Shaving Kit", menu_image: menu_8 },
]

export const product_list = [
  // Soaps
  { _id: "1", name: "Soap 1", image: soap_1, price: 30, description:"Product", category: "Soaps" },
  { _id: "2", name: "Soap 2", image: soap_2, price: 35, description:"Product", category: "Soaps" },
  { _id: "3", name: "Soap 3", image: soap_3, price: 32, description:"Product", category: "Soaps" },
  { _id: "4", name: "Soap 4", image: soap_4, price: 28, description:"Product", category: "Soaps" },

  // Shampoo
  { _id: "5", name: "Shampoo 1", image: shampoo_1, price: 40, description:"Product", category: "Shampoo" },
  { _id: "6", name: "Shampoo 2", image: shampoo_2, price: 45, description:"Product", category: "Shampoo" },
  { _id: "7", name: "Shampoo 3", image: shampoo_3, price: 48, description:"Product", category: "Shampoo" },
  { _id: "8", name: "Shampoo 4", image: shampoo_4, price: 50, description:"Product", category: "Shampoo" },

  // Shower Gel
  { _id: "9", name: "Shower Gel 1", image: sg_1, price: 38, description:"Product", category: "Shower Gel" },
  { _id: "10", name: "Shower Gel 2", image: sg_2, price: 42, description:"Product", category: "Shower Gel" },
  { _id: "11", name: "Shower Gel 3", image: sg_3, price: 44, description:"Product", category: "Shower Gel" },
  { _id: "12", name: "Shower Gel 4", image: sg_4, price: 47, description:"Product", category: "Shower Gel" },

  // Slippers
  { _id: "13", name: "Slipper 1", image: slip_1, price: 60, description:"Product", category: "Slippers" },
  { _id: "14", name: "Slipper 2", image: slip_2, price: 62, description:"Product", category: "Slippers" },
  { _id: "15", name: "Slipper 3", image: slip_3, price: 65, description:"Product", category: "Slippers" },
  { _id: "16", name: "Slipper 4", image: slip_4, price: 66, description:"Product", category: "Slippers" },

  // Dispenser
  { _id: "17", name: "Wall Dispenser 1", image: disp_1, price: 250, description:"Product", category: "Dispenser" },
  { _id: "18", name: "Wall Dispenser 2", image: disp_2, price: 260, description:"Product", category: "Dispenser" },
  { _id: "19", name: "Wall Dispenser 3", image: disp_3, price: 240, description:"Product", category: "Dispenser" },
  { _id: "20", name: "Wall Dispenser 4", image: disp_4, price: 210, description:"Product", category: "Dispenser" },

  // Hair Conditioner
  { _id: "21", name: "Hair Conditioner 1", image: hc_1, price: 48, description:"Product", category: "Hair Conditioner" },
  { _id: "22", name: "Hair Conditioner 2", image: hc_2, price: 50, description:"Product", category: "Hair Conditioner" },
  { _id: "23", name: "Hair Conditioner 3", image: hc_3, price: 52, description:"Product", category: "Hair Conditioner" },
  { _id: "24", name: "Hair Conditioner 3", image: hc_4, price: 58, description:"Product", category: "Hair Conditioner" },

  // Body Lotion
  { _id: "25", name: "Body Lotion 1", image: bl_1, price: 55, description:"Product", category: "Body Lotion" },
  { _id: "26", name: "Body Lotion 2", image: bl_2, price: 58, description:"Product", category: "Body Lotion" },
  { _id: "27", name: "Body Lotion 3", image: bl_3, price: 60, description:"Product", category: "Body Lotion" },
  { _id: "28", name: "Body Lotion 4", image: bl_4, price: 62, description:"Product", category: "Body Lotion" },

  // Shaving Kit
  { _id: "29", name: "Shaving Kit 1", image: sk_1, price: 75, description:"Product", category: "Shaving Kit" },
  { _id: "30", name: "Shaving Kit 2", image: sk_2, price: 85, description:"Product", category: "Shaving Kit" },
  { _id: "31", name: "Shaving Kit 3", image: sk_3, price: 69, description:"Product", category: "Shaving Kit" },
  { _id: "32", name: "Shaving Kit 4", image: sk_4, price: 80, description:"Product", category: "Shaving Kit" },
]