"use client"
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

function Header() {

  // const { data } = useSession();

  // useEffect(() => {
  //   console.log(data);
  // }, [data])

  return (
    <div className='p-5 shadow-sm flex  justify-between
    '>
      <div className='flex items-center gap-8 '>
        <Image src='/logo.png' alt='logo'
          width={180} height={100} />
        <div className='md:flex items-center
            gap-6 hidden
            '>

          <Link href={'/'} className='hover:scale-105 hover:text-primary mr-8
                cursor-pointer'>Home</Link>
          <Link href={'/search/Panting'} className='hover:scale-105 hover:text-primary mr-8
                cursor-pointer'>Search</Link>
        </div>
      </div>
      <div>
        <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <UserButton afterSignOutUrl='/' showName />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={'/mybooking'}>My Booking</Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem> */}

            </DropdownMenuContent>
          </DropdownMenu>

        </SignedIn>

        <SignedOut>
          <Button asChild >
            <Link href="/sign-in">Login/Sign Up</Link>
          </Button>
        </SignedOut>


      </div>
    </div >
  )
}

export default Header