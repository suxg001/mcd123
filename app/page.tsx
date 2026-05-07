'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div className="flex justify-center items-center h-screen">加载中...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">MCD123</h1>
        
        {session ? (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-xl">欢迎回来！</p>
              <p className="text-gray-600 mt-2">{session.user?.name || session.user?.email}</p>
            </div>
            <button
              onClick={() => signOut()}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-xl transition"
            >
              退出登录
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => signIn('google')}
              className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition"
            >
              <span>Google 登录</span>
            </button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">或</span>
              </div>
            </div>
            <button
              onClick={() => signIn('credentials')}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition"
            >
              用户名密码登录
            </button>
          </div>
        )}
      </div>
    </div>
  );
}