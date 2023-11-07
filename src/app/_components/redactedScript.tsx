import { Redacted_Script } from 'next/font/google';

const redacted = Redacted_Script({
    weight: ['400'],
    subsets: ['latin']
});

export const RedactedScript = ({ text }: { text: string }) => (
    <span
        className={`overflow-clip w-[100%] text-[50px] ${redacted.className}`}
    >
        {text}
    </span>
);
