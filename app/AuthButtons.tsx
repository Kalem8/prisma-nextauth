"use client"

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
    return (
        <button
            className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            onClick={() => signIn()}>
            Login
        </button>
    )
}

export const LogoutButton = () => {
    return (
        <button
            className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            
            onClick={() => signOut()}>
            Logout
        </button>
    )
}
