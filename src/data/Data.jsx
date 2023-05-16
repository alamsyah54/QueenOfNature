import BestSeller1 from "../assets/images/bestseller1.png"
import BestSeller2 from "../assets/images/bestseller2.png"
import BestSeller4 from "../assets/images/bestseller4.png"
import Shampoo from "../assets/images/shampoo.jpg"
import Lotion from "../assets/images/lotion.jpg"
import Oil from "../assets/images/oil.jpg"
import Spray from "../assets/images/spray.jpg"
import Soap from "../assets/images/soap.jpg"
import QueenContactInstagram from "../assets/images/QueenContactInstagram.webp"
import QueenContactLine from "../assets/images/QueenContactLine.webp"
import QueenContactMessenger from "../assets/images/QueenContactMessenger.webp"
import QueenContactFacebook from "../assets/images/QueenContactFacebook.webp"
import QueenContactTikTok from "../assets/images/QueenContactTikTok.webp"
import QueenTikTokShop from "../assets/images/QueenTikTokShop.webp"
import QueenShopee from "../assets/images/QueenShopee.webp"
import QueenMyshop from "../assets/images/QueenMyshop.webp"
import Bestseller from "../components/bestseller"

const products = [
    {
        id: 111,
        price: 75,
        desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
        number: 1,
        name: "Kaffir Lime Shampoo",
        mainImage: BestSeller1,
        category: "Shampoo",
        images: [BestSeller1, Spray, Lotion],
        verified: "50-1-5600024",
        ingredients: (
            <span>
                Emal 28ct
                <br />
                Emal
                <br />
                PEG-75 Lanolin
                <br />
                Citrus X Hystrix L
            </span>
        ),
        howtouse: "HOW TO USE",
        properties: "บำรุงหนังศีรษะ ลดอาการคัน",
        manufacture:
            "เลขที่ 41/1 หมู่ 2 ตำบลหนองหอย อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่",
        manufacturing_date: "วันเดือนปี ที่ผลิต",
        net_volume: "ปริมาตรสุทธิ 200 มล",
        bestseller: <Bestseller />,
    },
    {
        id: 222,
        price: 70,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย/ลดอาการนอนไม่กลับ",
        number: 2,
        name: "Jasmine Lotion",
        mainImage: BestSeller2,
        category: "Lotion",
        images: [BestSeller2, Shampoo, Spray],
        verified: "50-1-5600024",
        ingredients: (
            <span>
                Emal 28ct
                <br />
                Emal
                <br />
                PEG-75 Lanolin
                <br />
                Citrus X Hystrix L
            </span>
        ),
        howtouse: "HOW TO USE",
        properties: "บำรุงหนังศีรษะ ลดอาการคัน",
        manufacture:
            "เลขที่ 41/1 หมู่ 2 ตำบลหนองหอย อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่",
        manufacturing_date: "วันเดือนปี ที่ผลิต",
        net_volume: "ปริมาตรสุทธิ 200 มล",
        bestseller: "",
    },
    {
        id: 333,
        price: 73,
        desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย/ลดอาการนอนไม่หลับ",
        number: 3,
        name: "Nourishing Rice Lotion",
        mainImage: BestSeller4,
        category: "Lotion",
        images: [BestSeller4, Shampoo, Oil],
        verified: "50-1-5600024",
        ingredients: (
            <span>
                Emal 28ct
                <br />
                Emal
                <br />
                PEG-75 Lanolin
                <br />
                Citrus X Hystrix L
            </span>
        ),
        howtouse: "HOW TO USE",
        properties: "บำรุงหนังศีรษะ ลดอาการคัน",
        manufacture:
            "เลขที่ 41/1 หมู่ 2 ตำบลหนองหอย อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่",
        manufacturing_date: "วันเดือนปี ที่ผลิต",
        net_volume: "ปริมาตรสุทธิ 200 มล",
        bestseller: "",
    },
]

const markets = [
    {
        url: "https://tiktok.com/@queenofnature01",
        name: "Shopee",
        image: QueenShopee,
    },
    {
        url: "https://tiktok.com/@queenofnature01",
        name: "Tiktok Shop",
        image: QueenTikTokShop,
    },
    {
        url: "https://tiktok.com/@queenofnature01",
        name: "My Shop",
        image: QueenMyshop,
    },
    {
        url: "https://tiktok.com/@queenofnature01",
        name: "Line",
        image: QueenContactLine,
    },
    {
        url: "https://tiktok.com/@queenofnature01",
        name: "Messenger",
        image: QueenContactMessenger,
    },
]

const contacts = [
    {
        url: "https://facebook.com/queenofnature01",
        name: "QUEEN Of Nature",
        image: QueenContactFacebook,
    },
    {
        url: "https://www.facebook.com/messages/t/112836901753781",
        name: "QUEEN Of Nature",
        image: QueenContactMessenger,
    },
    {
        url: "https://instagram.com",
        name: "@queenofnature01",
        image: QueenContactInstagram,
    },
    {
        url: "https://line.me",
        name: "@queenofnature01_",
        image: QueenContactLine,
    },
    {
        url: "https://www.tiktok.com/@queennamfon",
        name: "@queenofnature_01",
        image: QueenContactTikTok,
    },
]

const categories = [
    {
        title: "Shampoo",
        image: Shampoo,
        url: "/category",
    },
    {
        title: "Lotion",
        image: Lotion,
        url: "/category",
    },
    {
        title: "Oil",
        image: Oil,
        url: "/category",
    },
    {
        title: "Spray",
        image: Spray,
        url: "/category",
    },
    {
        title: "Soap",
        image: Soap,
        url: "/category",
    },
]
const slides = [
    {
        id: 111,
        price: 79,
        desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
        number: 1,
        name: "Kaffir Lime Shampoo",
        image: BestSeller1,
    },
    {
        id: 222,
        price: 71,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
        number: 2,
        name: "Jasmine Lotion",
        image: BestSeller2,
    },
    {
        id: 333,
        price: 76,
        desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
        number: 3,
        name: "Nourishing Rice Lotion",
        image: BestSeller4,
    },
]

export { products, markets, contacts, categories, slides }
