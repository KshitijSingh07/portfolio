
    import Link from 'next/link';

    export default function NotFound() {
      return (
        <div className='flex flex-col bg-sec justify-center items-center min-w-auto min-h-screen'>
          <h2 className='font-extrabold text-4xl mb-4'>Page Not Found</h2>
          <p className='text-gray-400 text-2xl mb-4'>Could not find the requested resource.</p>
          <Link className='hover:text-blue-500 transition-colors' href="/">Return Home</Link>
        </div>
      );
    }