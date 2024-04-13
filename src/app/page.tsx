import { Button } from '@/components/catalyst/button';
import { Routes } from '@/const';

const Home = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-indigo-700">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Scan with Confidence.
                        <br />
                        Verify QR Codes Instantly.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
                        Ensure every QR code you scan is safe before you click.
                        Protect yourself from malicious links with real-time
                        security checks.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button color="white" href={Routes.SCAN}>
                            QR Scan
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
