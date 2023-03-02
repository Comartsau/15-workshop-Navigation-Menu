import {AiFillHome, AiTwotonePhone} from "react-icons/ai"
import { BsFillPersonFill, BsFillCartFill } from "react-icons/bs"

const MenuData = [
{
    title: "หน้าแรก",
    path: "/",
    icon: <AiFillHome />
},
{
    title: "สมาชิก",
    path: "/member",
    icon: <BsFillPersonFill />
},
{
    title: "สินค้า",
    path: "/product",
    icon: <BsFillCartFill />
},
{
    title: "แอดมิน",
    path: "/admin",
    icon: <AiTwotonePhone />
}
]

export default MenuData