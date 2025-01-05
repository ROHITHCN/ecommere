import '@fortawesome/fontawesome-free/css/all.min.css';
import footer from '../assets/footer.png';

function Footer() {
  return (
    <div className="w-full bg-gray-200 text-black p-6 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <div className="space-y-4">
          <h3 className="font-bold">Customer Service</h3>
          <ul>
            <li><a href="#help-center" className="text-black hover:underline">Help Center</a></li>
            <li><a href="#order-status" className="text-black hover:underline">Order Status</a></li>
            <li><a href="#returns" className="text-black hover:underline">Returns & Replacements</a></li>
            <li><a href="#intl-shipping" className="text-black hover:underline">International Shipping</a></li>
            <li><a href="#login" className="text-black hover:underline">Login</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Shopping</h3>
          <ul>
            <li><a href="#on-sale" className="text-black hover:underline">On Sale Items</a></li>
            <li><a href="#brands" className="text-black hover:underline">Our Brands</a></li>
            <li><a href="#features" className="text-black hover:underline">Product Features</a></li>
            <li><a href="#trade-customers" className="text-black hover:underline">Trade Customers</a></li>
            <li><a href="#view-cart" className="text-black hover:underline">View Your Cart</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Company Info</h3>
          <ul>
            <li><a href="#about-us" className="text-black hover:underline">About Us</a></li>
            <li><a href="#partners" className="text-black hover:underline">Partners</a></li>
            <li><a href="#careers" className="text-black hover:underline">Careers</a></li>
            <li><a href="#privacy-policy" className="text-black hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" className="text-black hover:underline">Terms of Use</a></li>
            <li><a href="#affiliate" className="text-black hover:underline">Affiliate Program</a></li>
            <li><a href="#accessibility" className="text-black hover:underline">Accessibility</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Already Ordered?</h3>
          <ul>
            <li><a href="#file-return" className="text-black hover:underline">File a Return or Replacement <span className="text-xl"> &gt; </span>
            </a></li>
            <li><a href="#view-order-status" className="text-black hover:underline">View Order Status <span className="text-xl"> &gt; </span>
            </a></li>
            <li><a href="#visit-helpdesk" className="text-black hover:underline">Visit Our HelpDesk <span className="text-xl"> &gt; </span>
            </a></li>
          </ul>

          <h3 className="font-bold mt-8">Ready to Order?</h3>
          <ul>
            <li><a href="#call-us" className="text-black hover:underline">Call Us</a></li>
            <li>Monday-Friday 6am - 5pm PST</li>
            <li><a href="#online-chat" className="text-black hover:underline">Online Chat</a></li>
            <li>Monday-Friday 6am - 4pm PST</li>
            <li>Saturday & Sunday 6am - 3pm PST</li>
          </ul>
          <ul className="space-y-2 mt-4">
            <li><a href="#call-us" className="text-black hover:underline">Call Us <span className="text-xl"> &gt; </span></a></li>
            <li><a href="#online-chat" className="text-black hover:underline">Online Chat <span className="text-xl"> &gt; </span></a></li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-400 mt-6"></div>

      <div className="bg-gray-200 text-center text-xs p-4">
        <p>© 2025 1STOPlighting.com. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-gray-700 hover:text-gray-900 text-xl"></i>
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest text-gray-700 hover:text-gray-900 text-xl"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-gray-700 hover:text-gray-900 text-xl"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube text-gray-700 hover:text-gray-900 text-xl"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-gray-700 hover:text-gray-900 text-xl"></i>
          </a>
        </div>

            chdcn
            <img src={footer} alt="footer" width="40" height="5" />
        
      </div>
    </div>
  );
}

export default Footer;
