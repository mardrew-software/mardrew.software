export const Tags = ({ labels }: { labels: string[] }) => {
    return (
        <div className="flex flex-row gap-2 flex-wrap">
            {labels.map((l: string) => {
                return (
                    <div className="font-extrabold py-1 px-4 border-solid border-2 border-black bg-[#ffe280] rounded max-w-fit">
                        {l.replaceAll('_', ' ')}
                    </div>
                );
            })}
        </div>
    );
};
