import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-popover-foreground py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Trusty Money</h3>
            <p className="mt-2 text-sm">Your trusted platform for financial management.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="/privacy" className="text-popover-foreground hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-popover-foreground hover:underline">Terms of Service</a>
              </li>
              <li>
                <a href="/contact" className="text-popover-foreground hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-popover-foreground">
          © {new Date().getFullYear()} Trusty Money. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
