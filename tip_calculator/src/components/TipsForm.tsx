import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

//PROPS
type TipsFormProps = {    
    tip : number,
    setTip : React.Dispatch<React.SetStateAction<number>>
}

export default function TipsForm({setTip} : TipsFormProps){
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
        <p className="text-xl text-left font-extrabold w-full">Tip selector: </p>
        <RadioGroup className="text-xl text-left font-extrabold w-full">
            {tipOptions.map(tip => (
                <div key={tip.id}className="flex items-center space-x-2">
                    <RadioGroupItem value={tip.value.toString()} id={tip.id} onClick={() => setTip(tip.value)}/>
                    <Label htmlFor={tip.id} onClick={() => setTip(tip.value)}>{tip.label}</Label>
                </div>
            ))}
        </RadioGroup>
        </>        
    )
}
