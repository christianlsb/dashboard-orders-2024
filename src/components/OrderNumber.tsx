import { Card } from "@/components/ui/card"
import { X, Bird } from "lucide-react"

interface OrderNumber {
    status: boolean
    number: string
}

const OrderNumber = ({ status, number }: OrderNumber) => {
    return (
        <Card className={`flex items-center w-[100%] max-w-[100px] h-[50px] justify-center gap-1 ${status && true ? "border-active" : "border-cancel"}`}>
            {status && true ? <Bird size={24} color={status && true ? "#87B6A1" : "#E4A2B0"} /> : <X size={24} color={status && true ? "#87B6A1" : "#E4A2B0"} />}
            <span className={status && true ? "text-active" : "text-cancel"}>{'#' + number}</span>
        </Card>
    )
}

export default OrderNumber