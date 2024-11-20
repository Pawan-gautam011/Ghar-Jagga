import fb from "../src/assets/facebook.png";
import messenger from '../src/assets/messenger.png';
import Whatsapp from '../src/assets/whatsapp.png';
import viber from '../src/assets/viber.png';
import mail from '../src/assets/email-icon.png';
import share from '../src/assets/share-others.png';
import home from '../src/assets/main img.png';
import photo from "../src/assets/Rectangle 2499.png";
import photo2 from "../src/assets/Rectangle 2496.png";
import { BsTelephone } from "react-icons/bs";
import map from "../src/assets/map.png"
import fb2 from "../src/assets/fb.png";

import tiktok from "../src/assets/tiktok.png";
import twiter from "../src/assets/twiter.png";
import yt from "../src/assets/yt.png";
import logo1 from "../src/assets/Logo1.png"
import icon from "../src/assets/propertyIcon.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {

  const properties = [
    {
      id: 1,
      location: "Nawalparasi West",
      details: "Khalsa Chhintang Sahidbhumi Rural Municipality - 8\nNear Saraswati Ma. Bi.",
      kittaNo: "4631.25",
      area: "0-10-0-0",
      bank: "Prime Bank",
    },
    {
      id: 2,
      location: "Kathmandu",
      details: "Budhanilkantha Municipality - 9\nNear Karuna Hospital",
      kittaNo: "946 Ka",
      area: "0-6-2-0",
      bank: "Sanima",
    },
    {
      id: 3,
      location: "Jhapa",
      details: "Shivgunj Municipality - 9\nNear Saraswati Ma. Bi.",
      kittaNo: "1328",
      area: "6264.83",
      bank: "NIMB Bank",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="ml-24 ">
        <div className="md:flex m-5 ml-3 items-center ">
          <p className="text-[#25295B]">Hero</p>
          <MdOutlineKeyboardArrowRight />
          <p className="text-[#25295B] ml-3 font-bold">Jagga</p>
          <MdOutlineKeyboardArrowRight />
          <p className="text-[#5d5e74] ml-3">
            6 Aana Land Available in Budhanilkantha, Kathmandu
          </p>
        </div>
      </div>

      {/* Title */}
      <h1 className="ml-28 m-3 font-semibold sm:text-[40px] text-xl">
        6 Aana Land Available in Budhanilkantha, Kathmandu
      </h1>

      {/* Published Date */}
      <p className="ml-28 sm:w-[300px] w-[200px] mt-5 border border-gray-400 rounded p-2 text-center">
        Published On: Aug 20, 2024
      </p>
      <hr className="w-[1050px] ml-28 mt-5" />

      {/* Main Content */}
      <div className="sm:ml-28 flex items-start mt-10 ml-5">
        {/* Share Section */}
        <div className="mr-16">
          <h1 className="text-[#333333] font-semibold text-[18px] ml-20 mt-10">
            Share:
          </h1>
          <h2 className="text-[#25295B] font-bold text-[24px] mt-2 ml-16">
            888.88K
          </h2>
          <div className="flex gap-x-6 mt-5">
            <img src={fb} alt="Facebook" />
            <img src={messenger} alt="Messenger" />
            <img src={Whatsapp} alt="WhatsApp" />
            <img src={viber} alt="Viber" />
            <img src={mail} alt="Mail" />
            <img src={share} alt="Share" />
          </div>
          <div className="flex items-center mt-5">
            <input
              type="text"
              value="https://logoipsum.com/jagga/123..."
              readOnly
              className="w-[300px] px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none"
            />
            <button className="ml-2 px-4 py-2 bg-[#25295B] text-white rounded-md hover:bg-[#1f224a]">
              Copy Link
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-[370px] text-[#333333]">
          <p className="text-justify leading-7 sm:block hidden">
            That day, for no particular reason, I decided to go for a little
            run. So I ran to the end of the road. And when I got there, I
            thought maybe I’d run to the end of town. And when I got there, I
            thought maybe I’d just run across Greenbow County.
          </p>
          <p className="mt-4 text-justify leading-7 sm:block hidden">
            And I figured, since I run this far, maybe I’d just run across the
            great state of Alabama. And that’s what I did. I ran clear across
            Alabama. For no particular reason I just kept on going.
          </p>
          <hr className="mt-12" />
        </div>
      </div>

      {/* Property Section */}
      <div className="flex justify-center gap-10 p-10 -mx-[200px]">
        {/* Property Photos */}
        <div className="w-[400px]">
          <h2 className="text-lg font-semibold mb-4">Property Photos</h2>
          <div className="border rounded-xl border-gray-300 overflow-hidden">
            <img
              src={home}
              alt="Property"
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="flex gap-2 mt-3">
            <img
              src={home}
              alt="Thumbnail 1"
              className="w-[80px] h-[60px] border border-gray-300 rounded-md object-cover"
            />
            <img
              src={photo2}
              alt="Thumbnail 2"
              className="w-[80px] h-[60px] border border-gray-300 rounded-md object-cover"
            />
            <img
              src={home}
              alt="Thumbnail 3"
              className="w-[80px] h-[60px] border border-gray-300 rounded-md object-cover"
            />
            <img
              src={photo}
              alt="Thumbnail 4"
              className="w-[80px] h-[60px] border border-gray-300 rounded-md object-cover"
            />
          </div>
        </div>

        {/* Property Details */}
        <div className="w-[600px] mx-10">
          <div className="grid grid-cols-1 gap-4">
            <p>
              <span className="font-semibold">Property ID:</span> BFI-02-007-7f3af63bc9fb
              <hr className="mt-2" />
            </p>
            <p>
              <span className="font-semibold">Province:</span> Sudur Paschim
              <hr className="mt-2" />
            </p>
            <p>
              <span className="font-semibold">District:</span> Nawalparasi West
              <hr className="mt-2" />
            </p>
            <p>
              <span className="font-semibold">Local Level:</span> Khalsa Chhintang
              Sahidbhumi Rural Municipality
              <hr className="mt-2" />
            </p>
            <p>
              <span className="font-semibold">Ward:</span> 33
            </p>
          </div>
          
          <div className="border rounded-lg mt-6 p-4">
            <div className="grid grid-cols-3 items-center text-center">
              <div>
                <p className="text-lg font-semibold text-[#25295B]">0 - 10 - 2 - 5</p>
                <p className="text-sm text-gray-500">Ropani - Aana</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#25295B]">0 - 1 - 0 - 0.3</p>
                <p className="text-sm text-gray-500">Bigha - Kattha</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#25295B]">3701</p>
                <p className="text-sm text-gray-500">Sq. Meter</p>
              </div>
            </div>
            <div className="mt-2 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500 mt-2">Area</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-[400px] bg-white border border-gray-300 p-4 rounded-lg shadow-md ml-28">
        <h3 className="font-semibold text-lg mb-4">Contact Person</h3>
        <hr />
        <ul>
          <li className="mb-2">

              
          
            <span className="font-medium">Harihardas Prasad Upadhyaya</span>
            <br />
            <div className='flex items-center'>
            <BsTelephone />

            <span className="text-gray-500 mx-3">9868986898</span>
            </div>
            <hr className='mt-2' />
          </li>
          <li className="mb-2">
            <span className="font-medium">Bir Bahadur Bishowkarma</span>
            <br />
            <div className='flex items-center'>
            <BsTelephone />
            <span className="text-gray-500 mx-3">9868986898</span>
            </div>
            <hr className='mt-2'  />
          </li>
          <li>
            <span className="font-medium">Pawan Kumari Mali Bhandari</span>
            <br />
            <div className='flex items-center'>
            <BsTelephone />
            <span className="text-gray-500 mx-3">9868986898</span>
            </div>
         
          </li>
        </ul>
      </div>

      {/* Offer Section */}

      <div className="w-[400px] bg-[#F96D7B] text-white rounded-lg p-6 mx-[590px] -mt-[300px] shadow-md">
        <h3 className="text-lg font-semibold mb-4">Want to offer a price?</h3>
        <label htmlFor="bid" className="block mb-2 text-sm">
          Your Bid
        </label>
        <div className="flex items-center bg-white text-black rounded-md mb-4 overflow-hidden">
          <span className="px-3 text-sm">NRs.</span>
          <input
            type="number"
            id="bid"
            placeholder="Enter Amount"
            className="w-full p-2 rounded-r-md text-sm focus:outline-none"
          />
        </div>
        <p className="mb-4 text-sm">
          Offer a reasonable price for this property.
        </p>
        <hr/>
        <p className="mb-2 font-bold text-sm mt-3">Bidding Starts at:</p>
        <div className=" border text-white rounded-md px-3 py-2 mb-4 text-sm">
          NRs. 1,25,00,000
        </div>
        <p className="text-sm">
          This is the minimum price you can offer for this property.
        </p>
        <hr className='mt-4'/>
        <p className="text-xs mt-4 leading-tight">
          <span className="font-bold underline">Disclaimer:</span> Offering a price does
          NOT mean you are entering in any kind of transaction. This information
          is collected for research purposes only.
        </p>
      </div>

      <div className="w-[900px] border border-gray-300 rounded-lg shadow-md p-4 bg-white mt-10 ml-24">
  <h3 className="font-bold text-lg mb-3 ">Property Location</h3>
  <hr />
  <div className=" mt-3 overflow-hidden rounded-lg shadow-xl">
    <img src={map} alt="" />
  </div>
</div>


<div className="bg-[#f9f9ff] py-12 px-6">
      {/* Recommended Properties Section */}
      <h2 className="text-[#25295B] text-2xl font-bold mb-8 mx-16">
        Recommended Properties
        <hr className='mt-5' />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  justify-items-center">
        {properties.map((property) => (
          <div
            key={property.id}
            className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-md p-6"
          >
            <img
              src={icon}
              alt="Property Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-[#EF4B68] font-bold text-lg mb-2">
              {property.location}
            </h3>
            <p className="text-gray-500 text-sm mb-4 whitespace-pre-wrap leading-relaxed">
              {property.details}
            </p>
            <div className="grid grid-cols-3 text-center text-sm text-gray-600">
              <div>
                <p className="font-bold text-[#25295B]">{property.kittaNo}</p>
                <p>Kitta No.</p>
              </div>
              <div>
                <p className="font-bold text-[#25295B]">{property.area}</p>
                <p>Area</p>
              </div>
              <div>
                <p className="font-bold text-[#25295B] ">{property.bank}</p>
                <p>BFI</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="mt-16 bg-[#25295B] text-white py-12 rounded-xl">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {/* Logo and Info */}
          <div>
            <img src={logo1} alt="Logo Ipsum" className="w-32 mb-4 " />
            <p className="text-sm leading-relaxed">
              Logoipsum Pvt. Ltd. Lazimpat, Kathmandu, Nepal
            </p>
            <p className="text-sm mt-2">info@logoipsum.com</p>
          </div>

          {/* Explore Properties */}
          <div>
            <h4 className="font-bold text-lg mb-4">Explore Properties</h4>
            <hr  className='w-44'/>
            <ul className="space-y-2 text-sm">
              <div className='flex items-center'>
              <FaArrowRightLong />
              <li className='m-2'>Ghar</li>
              </div>
              <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2'>Jagga</li>
              </div>
              <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2' >Province</li>
              </div>
              <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2' >District</li>
              </div>
              
            </ul>
          </div>

          

          {/* Tools and Knowledge */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tools</h4>
            <hr  className='w-44'/>
            <ul className="space-y-2 text-sm">
            <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2' >Area Convertor</li>
              </div>

            </ul>
            <h4 className="font-bold text-lg mt-6 mb-4">Knowledge Center</h4>
            <hr  className='w-44'/>
            <ul className="space-y-2 text-sm">
            <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2' >Read Blogs</li>
              </div>
              
              <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2' >Community</li>
              </div>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <hr  className='w-44'/>
            <ul className="space-y-2 text-sm">
            <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2' >About Us</li>
              </div>
              <div className='flex items-center '>
              <FaArrowRightLong />
              <li className='m-2' >Contact Us</li>
              </div>
              
            </ul>
            <h4 className="font-bold text-lg mt-6 mb-4">Keep in Touch</h4>

            <hr/>

            <div className="flex space-x-3 mt-5">
              <img src={fb2} alt="Facebook" className="w-6 h-6" />
      
              <img src={tiktok} alt="Twitter" className="w-6 h-6" />
              <img src={twiter} alt="TikTok" className="w-6 h-6" />
              <img src={yt} alt="YouTube" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-600 text-sm pt-6 text-center flex justify-evenly items-center">
         
          <p className=" ">
            <a href="#" className=" underline">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className=" underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className=" underline">
              Data Usage Policy
            </a>
          </p>
          <p className=''>
            ©2024. Logoipsum. All Rights Reserved. Powered by Zendatum Inc.
          </p>
        </div>
      </footer>
    </div>

    </>
  );
};

export default Hero;
