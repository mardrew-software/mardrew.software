'use client';
import parse from 'html-react-parser';
import { Element, Text } from 'domhandler';
import { DOMNode, HTMLReactParserOptions } from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

export const ParsedText = ({ html }: { html: string }) => {
    return <div className="flex flex-col gap-2">{parse(html, options)}</div>;
};

const options: HTMLReactParserOptions = {
    replace(domNode: DOMNode) {
        const node = domNode as Element;
        if (node.name === 'a') {
            const text = node.children[0] as Text;
            return (
                <Link
                    target="_blank"
                    className="text-slate-500 underline hover:text-[#E9B9BD]"
                    href={node.attribs.href}
                >
                    {text.data}
                </Link>
            );
        } else if (node.name === 'img') {
            return (
                <Image
                    alt={node.attribs.title}
                    src={node.attribs.src}
                    width={parseInt(node.attribs.width)}
                    height={parseInt(node.attribs.height)}
                />
            );
        }
    }
};
