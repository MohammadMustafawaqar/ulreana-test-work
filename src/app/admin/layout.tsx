import Layout from '@/components/layout/Layout'
import { Toaster } from 'react-hot-toast'


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <Layout>
    {children}
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
    />
  </Layout>
}
