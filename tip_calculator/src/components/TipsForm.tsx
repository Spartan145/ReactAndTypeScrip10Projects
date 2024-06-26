import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function TipsForm(){
    const tipOptions = [
        {
            id: 'tip-10',
            value: .10,
            label: '10%'
        },
        {
            id: 'tip-20',
            value: .20,
            label: '20%'
        },
        {
            id: 'tip-50',
            value: .50,
            label: '50%'
        },
    ]
    return (
        <>
        <div className="font-semibold">Tip selector</div>
        <RadioGroup className="text-xl text-left font-extrabold w-full" defaultValue={tipOptions[0].id}>
            {tipOptions.map(tip => (
                <div key={tip.id}className="flex items-center space-x-2">
                    <RadioGroupItem value={tip.id} id={tip.id}/>
                    <Label htmlFor={tip.id}>{tip.label}</Label>
                </div>
            ))}
        </RadioGroup>
        </>        
    )
}
