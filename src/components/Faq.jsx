import React from "react"
import { Fragment, useState } from "react"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react"
function Icon({ id, open }) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
            />
        </svg>
    )
}
const Faq = () => {
    const [open, setOpen] = useState(0)

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value)
    }
    return (
        <div className='px-10'>
            <Fragment>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        Queen Of Nature คืออะไร?
                    </AccordionHeader>
                    <AccordionBody>
                        Queen Of Nature เป็นแบรนด์เล็ก ๆ ที่เริ่มต้นจากความสนใจ
                        เริ่มศึกษา จนนำมาสู่การทำผลิตภัณฑ์ต่าง ๆ
                        ทั้งผลิตภัณฑ์บำรุงผิว ทำความสะอาด เป็นต้น
                        ซึ่งเป็นงานอดิเรก และพัฒนาผลิตภัณฑ์ให้ดียิ่งขึ้น
                        โดยจะใช้สารสกัดจากธรรมชาติ ไม่สังเคราะห์ ให้ความรู้สึก
                        และสัมผัสจากธรรมชาติ
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        ทำไมต้องเลือก Queen Of Nature?
                    </AccordionHeader>
                    <AccordionBody>
                        เพราะ Queen Of Nature
                        เป็นแบรนด์ที่ทำผลิตภัณฑ์ที่เป็นมิตรต่อผู้ใช้
                        แบรนด์ของเราอยากให้ผู้ใช้ได้สัมผัสกับกลิ่นอายของธรรมชาติในทุก
                        ๆ วัน อีกทั้งยังเข้าถึงได้ง่าย กับราคาย่อมเยาว์
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        วิธีการสั่งซื้อ ทำได้อย่างไร?
                    </AccordionHeader>
                    <AccordionBody>
                        <p>
                            ออนไลน์: ค้นหาสินค้า &gt; คลิก 'สั่งซื้อด้วย' &gt;
                            เลือกตลาด &gt; และชำระเงินในตลาดกลางของเรา ออฟไลน์:
                            ค้นหาสินค้า &gt; คลิก 'สั่งซื้อกับ' &gt;
                            เลือกผู้ติดต่อของเรา &gt; และทำข้อตกลงที่นั่น
                            *สินค้าบางรายการไม่สามารถจัดส่งทางออนไลน์ได้
                            เลยมีภาพมาให้ชมกันเท่านั้น ขออภัยมา ณ ที่นี้
                        </p>
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div>
    )
}

export default Faq
