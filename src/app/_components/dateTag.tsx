export const DateTag = ({ date }: { date: string }) => {
    const newDate = new Date(date);
    return (
        <>
            {newDate && (
                <span className="font-bold">
                    {`${newDate.toLocaleString('default', {
                        month: 'long'
                    })} ${newDate.getFullYear()}`}
                </span>
            )}
        </>
    );
};
