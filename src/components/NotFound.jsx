import { Link } from 'react-router-dom';
export default function NotFound(){return <div className="py-24 text-center"><p className="eyebrow">404 · Page not found</p><h1 className="mt-4 text-4xl font-black">Lost in the code?</h1><p className="mt-4 text-slate-400">That page doesn't exist. Let's get you back home.</p><Link to="/" className="btn-primary mt-7">Back to home</Link></div>}
