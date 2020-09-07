import * as React from 'react';

export default function Home(props) {
    return (
        <svg width={21} height={21} viewBox="0 0 21 21" {...props}>
            <g fill="#2A2E3B" fillRule="evenodd" transform="translate(5 5)">
                <rect width={3} height={3} x={4} y={4} rx={1} />
                <rect width={3} height={3} x={4} rx={1} />
                <rect width={3} height={3} x={8} y={4} rx={1} />
                <rect width={3} height={3} x={8} rx={1} />
                <rect width={3} height={3} x={8} y={8} rx={1} />
                <rect width={3} height={3} x={4} y={8} rx={1} />
                <rect width={3} height={3} y={4} rx={1} />
                <rect width={3} height={3} rx={1} />
                <rect width={3} height={3} y={8} rx={1} />
            </g>
        </svg>
    );
}
