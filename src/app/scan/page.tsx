'use client';

import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import { Button } from '@/components/catalyst/button';
import { Routes } from '@/const';
import { Modal } from '@/components/Modal';

const Scan = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState('No result');
    const qrRef = useRef(null);

    const handleScan = (result: any, error: any) => {
        if (!!error) console.info(error);

        if (!result) return;
        setData(result?.text);
        setIsOpen(true);

        qrRef.current.stop();
    };

    return (
        <>
            <main className="flex h-screen flex-col items-center justify-center bg-indigo-700">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-4xl font-bold">QR Scanner</h1>
                    <div>
                        <QrReader
                            className="h-[300px] w-[300px] rounded-md lg:h-[400px] lg:w-[400px]"
                            onResult={handleScan}
                            constraints={{ facingMode: 'environment' }}
                            ref={qrRef}
                        />
                    </div>
                    <Button color="indigo" href={Routes.HOME}>
                        Back
                    </Button>
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
                </div>
            </main>
        </>
    );
};

export default Scan;
