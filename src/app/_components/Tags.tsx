export const Tags = ({
    labels,
    classname = 'font-extrabold py-1 px-4 border-solid border-2 border-black bg-[#ffe280]'
}: {
    labels: string[];
    classname?: string;
}) => {
    return (
        <div className="flex flex-row gap-2 flex-wrap">
            {labels.map((l: string, i: number) => {
                return (
                    <div key={i} className={`${classname} rounded max-w-fit`}>
                        {l.replaceAll('_', ' ')}
                    </div>
                );
            })}
        </div>
    );
};
