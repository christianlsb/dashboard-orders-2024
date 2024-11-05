import { X, Bird } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import userOrder from "@/assets/img/userOrder.png"
import pizza from "@/assets/img/pizza.png"

interface OrderCard {
    status: boolean
    number: string
}

const OrderCard = ({ status, number }: OrderCard) => {
    return (
        <Card className="max-w-[340px]">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Order #351</CardTitle>
                    <Image src={userOrder} alt="flag" width={50} height={50} />
                </div>
                <CardDescription>05 Feb 2023, 08:28 PM</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5">
                        <Image src={pizza} alt="flag" width={80} height={80} />
                        <div className="flex-col">
                            <p>Vegetable  Mixups</p>
                            <CardDescription>CFresh Prawn mix salad</CardDescription>
                            <div className="flex justify-between">
                                <span>$5.30</span>
                                <span>Qty: 1</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image src={pizza} alt="flag" width={80} height={80} />
                        <div className="flex-col">
                            <p>Vegetable  Mixups</p>
                            <CardDescription>CFresh Prawn mix salad</CardDescription>
                            <div className="flex justify-between">
                                <span>$5.30</span>
                                <span>Qty: 1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex justify-between w-full">
                    <div>
                        <p>X2 Items</p>
                    </div>
                    <div className="flex gap-5">
                        <button className="flex items-center gap-2 border border-active w-[50px] h-[50px] justify-center rounded-lg">
                            <Bird size={20} color="#87b6a1" />
                        </button>
                        <button className="flex items-center gap-2 border border-cancel w-[50px] h-[50px] justify-center rounded-lg">
                            <X size={20} color="#E4A2B0" />
                        </button>
                    </div>
                </div>
            </CardFooter>
        </Card>

    )
}

export default OrderCard