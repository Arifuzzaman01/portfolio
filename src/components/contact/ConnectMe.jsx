import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Copy, 
  Check,
 
} from 'lucide-react';

const ConnectMe = () => {
  const [copiedField, setCopiedField] = useState(null);

  // Contact information - you can customize these
  const contactInfo = {
    phone: '+8801339313060',
    email: 'arifuzzamanar29@gmail.com',
    whatsapp: '+8801339313060',
    address: 'Barguna, Bangladesh',

  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      copyable: true
    },
    {
  icon: Mail,
  label: 'Email',
  value: contactInfo.email,
  href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=Contact%20from%20Portfolio&body=Hello,%20I%20would%20like%20to%20get%20in%20touch...`,
  color: 'text-red-600',
  bgColor: 'bg-red-100',
  copyable: true
},
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: contactInfo.whatsapp,
      href: `https://wa.me/${contactInfo.whatsapp.replace('+', '')}`,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      copyable: true
    },
    {
      icon: MapPin,
      label: 'Address',
      value: contactInfo.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      copyable: false
    },
    
  ];

  return (
    <div className="p-3 lg:p-5  rounded-xl shadow-lg text-gray-50">
      <h2 className="text-2xl font-bold  mb-6 text-center">
        Connect With Me
      </h2>
      
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="lg:flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-3 flex-1">
              <div className={`p-2 rounded-full ${method.bgColor}`}>
                <method.icon className={`w-5 h-5 ${method.color}`} />
              </div>
              
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-100">{method.label}</p>
                <p className="text-base font-semibold text-gray-300">
                  {method.value}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end-safe  space-x-2 mt-2 md:mt-0">
              {method.copyable && (
                <button
                  onClick={() => handleCopy(method.value, method.label)}
                  className="p-2 text-gray-50 hover:text-gray-400 transition-colors duration-200"
                  title={`Copy ${method.label}`}
                >
                  {copiedField === method.label ? (
                    <Check className="w-4 h-4 text-green-300" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
              
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-1 md:py-2 rounded-lg font-medium text-white transition-colors duration-200 ${
                  method.label === 'Phone' ? 'bg-blue-600 hover:bg-blue-700' :
                  method.label === 'Email' ? 'bg-blue-600 hover:bg-blue-700' :
                  method.label === 'WhatsApp' ? 'bg-blue-600 hover:bg-blue-700' :
                  method.label === 'Address' ? 'bg-blue-600 hover:bg-purple-700' :
                  'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                Open
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Receiver Information */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">Receiver Information:</h3>
        <p className="text-sm text-gray-600">
          All communications will be directed to the profile owner. 
          Please mention your purpose clearly when contacting.
        </p>
      </div>

      {/* Copy Success Message */}
      {copiedField && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {copiedField} copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default ConnectMe;