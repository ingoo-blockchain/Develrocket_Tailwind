'use Client'
import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'
interface RootLayOutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: 'Web7722',
    description: 'Generated by Web7722 Blog',
}

const RootLayout: React.FC<RootLayOutProps> = ({ children }) => {
    return (
        <html>
            <body className="bg-gray-100 dark">
                <StyledComponentsRegistry>
                    <GlobalStyles />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}

export default RootLayout
