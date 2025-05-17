import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Combobox } from "@/components/merchant-combobox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const frameworks = [
  {
    type: "Next.js",
  },
  {
    type: "SvelteKit",
  },
  {
    type: "Nuxt.js",
  },
  {
    type: "Remix",
  },
  {
    type: "Astro",
  },
]



export function NewTransactionCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const [selectedCounterParty, setSelectedCounterParty] = React.useState("")
    const [selectedTransactionType, setSelectedTransactionType] = React.useState("")
    const [selectedTaxCategory, setSelectedTaxCategory] = React.useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); // prevent page reload
        console.log("T Type:", selectedTransactionType);
        console.log("Counter Party:", selectedCounterParty);
        console.log("Tax Category:", selectedTaxCategory);
}
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
            <CardHeader>
            <CardTitle>New Transaction</CardTitle>
            <CardDescription>
                Enter transaction information
            </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" type="text" placeholder="(optional) Auto Generated" required />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="date">Date</Label>
                            <Input id="date" type="date" required />
                        </div>
                        <div className="grid gap-3">
                            <div className="flex items-center">
                            <Label htmlFor="">Item/Service Type</Label>
                            <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                                Placeholder example text
                            </a>
                            </div>
                            <Input id="" type="" required />
                        </div>
                        <div className="flex flex-row gap-6">
                            <div className="grid gap-3 w-1/2">
                                <Label htmlFor="counter-party">Counter Party</Label>
                                <Combobox 
                                    data={frameworks}
                                    value={selectedCounterParty}
                                    onChange={setSelectedCounterParty}
                                    placeholder="..."
                                />
                            </div>
                            <div className="grid gap-3 w-1/2">
                                <Label htmlFor="transaction-type">Transaction Type</Label>
                                <Combobox
                                    data={frameworks}
                                    value={selectedTransactionType}
                                    onChange={setSelectedTransactionType}
                                    placeholder="..."
                                />
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="total">Total</Label>
                            <Input id="total" type="" required />
                        </div>
                        <div className="flex flex-row gap-6">
                            <div className="grid gap-3 w-1/2">
                                <Label htmlFor="tax-amount">Tax Deductible Amount</Label>
                                <Input id="tax-amount" type="" required />
                            </div>
                            <div className="grid gap-3 w-1/2">
                                <Label htmlFor="tax-category">Category</Label>
                                <Combobox
                                    data={frameworks}
                                    value={selectedTaxCategory}
                                    onChange={setSelectedTaxCategory}
                                    placeholder="..."
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button type="submit" className="w-full">
                            Add Transaction
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
        </div>
    )
}
