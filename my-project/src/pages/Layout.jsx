
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Layout = () => {
    const { user, loading } = useAuth();

    useEffect(() => {
    }, [user]);
  
    if (loading) {
      return (
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  
    if (!user) {
      return <Navigate to="/login" replace />;
    }

  return (
    <main className="bg-gray-50 dark:bg-slate-900">  
        <Header/>
        <SideBar/>
        <Outlet/>
    </main>
  )
}

export default Layout