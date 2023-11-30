import React from 'react';
import Link from 'next/link';

export default function Footer({ children }: { children?: React.ReactNode }) {
    return (
        <footer className="bg-gradient-to-r from-slate from-30% to-green py-3">
            <div className="container mx-auto flex flex-row justify-between items-stretch px-4 text-xl text-black text-center">
                <ul className="flex flex-col md:flex-row items-center gap-5 md:list-none">
                    <li className='inline-block md:mr-5'>Copyright &copy; 2023 - CRITICICE</li>
                    <li><Link href="/terms" className="hover:text-orange">Terms of Sevices</Link></li>
                    <li className='hidden md:block'><span>&#8226;</span></li>
                    <li><Link href="/privacy" className="hover:text-orange">Privacy & Cookies</Link></li>
                    <li className='hidden md:block'><span>&#8226;</span></li>
                    <li><Link href="/faq" className="hover:text-orange">FAQ</Link></li>
                </ul>
                <ul className="flex flex-col md:flex-row items-center gap-5 md:list-none">
                    <li><Link href="/blog" className="hover:text-orange">Blog</Link></li>
                    <li className='hidden md:block'><span>&#8226;</span></li>
                    <li><Link href="/deck" className="hover:text-orange">Deck</Link></li>
                    <li className='hidden md:block'><span>&#8226;</span></li>
                    <li><Link href="/" className="hover:text-orange">Telegram</Link></li>
                    <li className='hidden md:block'><span>&#8226;</span></li>
                    <li><Link href="/" className="hover:text-orange">Discord</Link></li>
                    <li className='hidden md:block'><span>&#8226;</span></li>
                    <li><Link href="/" className="hover:text-orange">Twitter</Link></li>
                </ul>
            </div>
        </footer>
    );
};