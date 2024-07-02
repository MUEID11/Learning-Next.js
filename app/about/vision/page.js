import Button from '@/app/components/Button';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/whitelogo.png'
const page = () => {
    return (
        <div>
            Mastering web dev
            <Image placeholder='blur' src={logo} alt='some image'></Image>
            <Button/>
        </div>
    );
};

export default page;