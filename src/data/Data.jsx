import Shampoo from "../assets/images/shampoo.jpg"
import Lotion from "../assets/images/lotion.jpg"
import Oil from "../assets/images/oil.jpg"
import Spray from "../assets/images/spray.jpg"
import Soap from "../assets/images/soap.jpg"
import KAFFIRLIME from "../assets/images/KAFFIRLIME.webp"
import JASMINE from "../assets/images/JASMINE.webp"
import EUCALYPTUS from "../assets/images/EUCALYPTUS.webp"
import DOKMOKE from "../assets/images/DOKMOKE.webp"
import POMEGRANADE from "../assets/images/POMEGRANADE.webp"
import RICE from "../assets/images/RICE.webp"
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
        id: 1,
        price: 75,
        desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
        number: 1,
        name: "Kaffir Lime Shampoo",
        mainImage: KAFFIRLIME,
        category: "Shampoo",
        images: [KAFFIRLIME, Spray, Lotion],
        verified: "50-1-5600024",
        ingredients: "Emal 28ct, Emal, PEG-75 Lanolin, Citrus X Hystrix L",
        howtouse: "ชโลมลงบนผมเปียกแล้วสระเป็นประจำทุกวัน",
        properties: "บำรุงหนังศีรษะ ลดอาการคัน",
        bestseller: <Bestseller />,
    },
    {
        id: 2,
        price: 78,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย/ลดอาการนอนไม่หลับ",
        number: 2,
        name: "Jasmine Lotion",
        mainImage: JASMINE,
        category: "Lotion",
        images: [JASMINE, Lotion, Shampoo],
        verified: "50-1-5602024",
        ingredients:
            "Beeswax, Cetyl Alcohol, Dianthus Caryophyllus Flower Oil, Glyceride, Glycerin, Isopropyl Maristate, Lecithin, Methylparaben Perfume, Propylparaben, Stearyl Alcohol, Water",
        howtouse: "ลูบไล้โลชั่นทั่วผิวกายบ่อยครั้งเป็นประจำทุกวัน",
        properties: "บำรุงรักษาผิวพรรณ เนียนนุ่มชุ่มชื้น กลิ่นกายหอม",
        bestseller: "",
    },
    {
        id: 3,
        price: 79,
        desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย/ลดอาการนอนไม่หลับ",
        number: 3,
        name: "Nourishing Rice Lotion",
        mainImage: RICE,
        category: "Lotion",
        images: [RICE, Spray, Shampoo],
        verified: "50-1-5602024",
        ingredients:
            "Beeswax, Cetyl Alcohol, Dianthus Caryophyllus Flower Oil, Glyceride, Glycerin, Isopropyl Maristate, Lecithin, Methylparaben Perfume, Propylparaben, Stearyl Alcohol, Water",
        howtouse: "ลูบไล้โลชั่นทั่วผิวกายบ่อยครั้งเป็นประจำทุกวัน",
        properties: "บำรุงรักษาผิวพรรณ เนียนนุ่มชุ่มชื้น กลิ่นกายหอม",
        bestseller: <Bestseller />,
    },
    {
        id: 4,
        price: 72,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกโมก น้ำมันหอมระเหยให้กลิ่นดอกโมก ราชินีดอกไม้ไทย ช่วยให้ผ่อนคลาย กลิ่นหอมนุ่มนวล สุขุม และอบอุ่น",
        number: 4,
        name: "Dok Moke Lotion",
        mainImage: DOKMOKE,
        category: "Lotion",
        images: [DOKMOKE, Lotion, Spray],
        verified: "50-1-5602024",
        ingredients:
            "Beeswax, Cetyl Alcohol, Dianthus Caryophyllus Flower Oil, Glyceride, Glycerin, Isopropyl Maristate, Lecithin, Methylparaben Perfume, Propylparaben, Stearyl Alcohol, Water",
        howtouse: "ลูบไล้โลชั่นทั่วผิวกายบ่อยครั้งเป็นประจำทุกวัน",
        properties: "บำรุงรักษาผิวพรรณ เนียนนุ่มชุ่มชื้น กลิ่นกายหอม",
        bestseller: "",
    },
    {
        id: 5,
        price: 77,
        desc: "โลชั่นบำรุงผิวกลิ่นทับทิม น้ำมันหอมระเหยให้กลิ่นทับทิม",
        number: 5,
        name: "Pomegranade Lotion",
        mainImage: POMEGRANADE,
        category: "Lotion",
        images: [POMEGRANADE, Spray, Shampoo],
        verified: "50-1-5602024",
        ingredients:
            "Beeswax, Cetyl Alcohol, Dianthus Caryophyllus Flower Oil, Glyceride, Glycerin, Isopropyl Maristate, Lecithin, Methylparaben Perfume, Propylparaben, Stearyl Alcohol, Water",
        howtouse: "ลูบไล้โลชั่นทั่วผิวกายบ่อยครั้งเป็นประจำทุกวัน",
        properties: "บำรุงรักษาผิวพรรณ เนียนนุ่มชุ่มชื้น กลิ่นกายหอม",
        bestseller: "",
    },
    {
        id: 6,
        price: 76,
        desc: "สเปรยปรับอากาศกลิ่นยูคาลิปตัส มีส่วนผสมของน้ำมันยูคาลิปตัส ให้ความรู้สึกเย็นสดชื่น ผ่อนคลาย ลดอาการคัดจมูก",
        number: 6,
        name: "Eucalyptus Air Spray",
        mainImage: EUCALYPTUS,
        category: "Spray",
        images: [EUCALYPTUS, Lotion, Shampoo],
        verified: "50-1-5602024",
        ingredients: "no",
        howtouse: "no",
        properties: "no",
        bestseller: "",
    },
]

const markets = [
    {
        url: "#",
        name: "Shopee",
        image: QueenShopee,
    },
    {
        url: "#",
        name: "Tiktok Shop",
        image: QueenTikTokShop,
    },
    {
        url: "#",
        name: "My Shop",
        image: QueenMyshop,
    },
    {
        url: "#",
        name: "Line",
        image: QueenContactLine,
    },
    {
        url: "https://www.facebook.com/messages/t/112836901753781",
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
        url: "#",
        name: "@queenofnature01",
        image: QueenContactInstagram,
    },
    {
        url: "#",
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
const carousel = [
    {
        id: 111,
        price: 79,
        desc: "แชมพูมะกรูด บำรุงหนังศีรษะ ลดอาการคัน มีส่วนผสมของน้ำมันหอมระเหยกลิ่นมะกรูด ให้ความรู้สึกสดชื่น หายใจโล่งสบาย",
        number: 1,
        name: "Kaffir Lime Shampoo",
        image: KAFFIRLIME,
    },
    {
        id: 222,
        price: 71,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกมะลิ น้ำมันหอมระเหยให้กลิ่นมะลิหอมสดชื่น ทำให้ผ่อนคลาย ความเครียด ช่วยให้นอนหลับสบาย",
        number: 2,
        name: "Jasmine Lotion",
        image: JASMINE,
    },
    {
        id: 333,
        price: 76,
        desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
        number: 3,
        name: "Nourishing Rice Lotion",
        image: RICE,
    },
    {
        id: 444,
        price: 71,
        desc: "โลชั่นบำรุงผิวกลิ่นดอกโมก น้ำมันหอมระเหยให้กลิ่นดอกโมก ราชินีดอกไม้ไทย ช่วยให้ผ่อนคลาย กลิ่นหอมนุ่มนวล สุขุม และอบอุ่น",
        number: 2,
        name: "Dok Moke Lotion",
        image: DOKMOKE,
    },
    {
        id: 555,
        price: 76,
        desc: "โลชั่นบำรุงผิวกลิ่นทับทิม น้ำมันหอมระเหยให้กลิ่นทับทิม",
        number: 3,
        name: "Pomegranade Lotion",
        image: POMEGRANADE,
    },
    {
        id: 666,
        price: 73,
        desc: "โลชั่นบำรุงผิวกลิ่นน้ำนมข้าว น้ำมันหอมระเหยให้กลิ่นน้ำนมข้าวละมุน อ่อนหวาน และอบอุ่น ทำให้ผ่อนคลาย ช่วยให้นอนหลับสบาย",
        number: 3,
        name: "Eucalyptus Spray",
        image: EUCALYPTUS,
    },
]

export { products, markets, contacts, categories, carousel }
