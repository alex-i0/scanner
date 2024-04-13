'use client';

import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Button } from '@/components/catalyst/button';
import { Routes } from '@/const';
import { Modal } from '@/components/Modal';

const Scan = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState('No result');

    const handleScan = (result: any, error: any) => {
        if (!!error && !result) return console.info(error);
        setData(result?.text);
        setIsOpen(true);
    };

    return (
        <>
            <main className="flex h-screen flex-col items-center justify-center bg-indigo-700">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-4xl font-bold">QR Scanner</h1>
                    <div>
                        <QrReader
                            className="w-[300px] lg:w-[400px]"
                            onResult={handleScan}
                            constraints={{ facingMode: 'environment' }}
                            videoStyle={{
                                borderRadius: '15px',
                                height: 'auto',
                            }}
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
