import { track } from "@vercel/analytics";

export function Footer() {
  return (
    <footer className="py-8 text-center bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-gray-600 mb-2">Built during peak hour on Silk Board</p>
        <p className="text-gray-700 mb-2 font-nromal">
          Made with Masale Dose and filter kaapi by{' '}
          <a 
            href="https://twitter.com/adii_kris" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange-500 font-medium hover:text-orange-600 transition-colors font-semibold"
            onClick={() => track('Adi Twitter Profile')}
          >
            Adithya Krishna
          </a>
        </p>
        <p className="text-gray-700">Deployed from TWC, JP Nagar</p>
      </div>
    </footer>
  );
}