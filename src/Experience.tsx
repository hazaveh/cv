interface Props {
    employer: string;
    title: string;
    startDate: string;
    endDate: string;
    stack: string;
    keypoints: string[];
}

export default function Experience({employer, title, startDate, endDate, stack, keypoints}: Props) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <div className="flex gap-x-2 items-center">
                    <h1 className="font-bold text-xl">{employer}</h1> 
                    <h5 className="text-sm text-gray-400">{startDate} - {endDate}</h5>
                </div>
                <span className="italic font-semibold">{title}</span>
            </div>
            <p className="tracking-wide font-semibold text-slate-500 text-sm">{stack}</p>
            <ul className="list-disc list-inside text-sm">
                {keypoints.map((keypoint, index) => <li key={index}>{keypoint}</li>)}
            </ul>
        </div>
    );
}