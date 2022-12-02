import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';

import { PageHeader } from '@ant-design/pro-layout';
import 'antd/dist/reset.css';
export default function Home() {
  return (
      <div className="App">
        <PageHeader></PageHeader>
        <Button type="primary">Button</Button>
      </div>
  )
}
