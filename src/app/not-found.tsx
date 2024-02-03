import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='absolute top-1/2 left-1/2 text-center'>
      <h2 className='font-mono'>Not Found</h2>
      <p className='font-mono'>Could not find requested resource</p>
    </div>
  )
}