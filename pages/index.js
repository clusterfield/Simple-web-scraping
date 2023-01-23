import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Container, Card, Row, Text } from "@nextui-org/react";
import {Header} from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 
    <div>
      <Header/>
      <main>
        <Container>
          <Card css={{ $: '$colors$primary' }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  NextUI gives you the best developer experience with all the features
                  you need for building beautiful and modern websites and
                  applications.
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </div>
  )
}
