import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { OrderCard, OrderNumber } from "@/components/index";

export default function Home() {

  const orders = [
    { number: "1", status: false }, { number: "2", status: true }, { number: "3", status: true }, { number: "2", status: true }, { number: "2", status: true }
  ]

  return (
    <div className="gridLayout">
      <div className="flex w-full max-w -sm items-center space-x-2 max-w-[280px]">
        <Input type="text" placeholder="Search" />
        <Button type="submit">Search</Button>
      </div>
      <section className="mt-11">
        <h2 className="text-2xl mb-6">Order list</h2>
        <div className="flex gap-2 flex-wrap">
          {orders.map(({ number, status }, index) => (
            <OrderNumber key={index} number={number} status={status} />
          ))}
        </div>
      </section>
      <section className="mt-[40px] flex flex-wrap gap-7">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />

      </section>
    </div>
  );
}
