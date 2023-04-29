// data.jsx
import BestSeller1 from "../assets/images/bestseller1.png"
import BestSeller2 from "../assets/images/bestseller2.png"
import BestSeller4 from "../assets/images/bestseller4.png"
import Shampoo from "../assets/images/shampoo.jpg"
import Lotion from "../assets/images/lotion.jpg"
import Oil from "../assets/images/oil.jpg"
import Spray from "../assets/images/spray.jpg"
import Soap from "../assets/images/soap.jpg"

const products = [
    {
        id: 111,
        price: 70,
        desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
        number: 1,
        name: "Kaffir Lime Shampoo",
        image: BestSeller1,
    },
    {
        id: 222,
        price: 70,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
        number: 2,
        name: "Jasmine Lotion",
        image: BestSeller2,
    },
    {
        id: 333,
        price: 70,
        desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
        number: 3,
        name: "Nourishing Rice Lotion",
        image: BestSeller4,
    },
]

const bestSellerProducts = [
    // array of best seller products data
]

const users = [
    // array of user data
]

const contactInfo = {
    // object containing contact information
    phone: "555-555-5555",
    email: "contact@example.com",
    address: "123 Main St, Anytown USA",
}

const categories = [
    {
        title: "Shampoo",
        image: Shampoo,
        url: "/category",
    },
    {
        title: "Shampoo",
        image: Lotion,
        url: "/category",
    },
    {
        title: "Shampoo",
        image: Oil,
        url: "/category",
    },
    {
        title: "Shampoo",
        image: Spray,
        url: "/category",
    },
    {
        title: "Shampoo",
        image: Soap,
        url: "/category",
    },
]
const slides = [
    {
        price: 70,
        desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
        number: 1,
        name: "Kaffir Lime Shampoo",
        image: BestSeller1,
    },
    {
        price: 70,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
        number: 2,
        name: "Jasmine Lotion",
        image: BestSeller2,
    },
    {
        price: 70,
        desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
        number: 3,
        name: "Nourishing Rice Lotion",
        image: BestSeller4,
    },
]

export { products, bestSellerProducts, users, contactInfo, categories, slides }
