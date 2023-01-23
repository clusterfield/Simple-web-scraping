import {Text, Navbar, Container, Row, Col} from '@nextui-org/react'
import Link from 'next/link'

export function Header(){
    return (
        <header>
             <Navbar isBordered variant="static" >
                 <Navbar.Content hideIn="xs" >
                            <Link href = "/">Home</Link>
                            <Link href = "/">About</Link>
                            <Link href = "/">Search</Link>
                 </Navbar.Content>
             </Navbar>
        </header>
    )
}