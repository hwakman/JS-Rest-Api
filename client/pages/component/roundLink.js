import React from 'react';
import Link from 'next/link';

export default function Round (props) {
    return (
        <nav>
            <li><Link href="/index"><a>home</a></Link></li>
            <li><Link href="/list"><a>list</a></Link></li>
            <li><Link href="/requestlist"><a>request list</a></Link></li>
            <li><Link href="/history"><a>history list</a></Link></li>
        </nav>
    );
}