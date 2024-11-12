import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center">
                {/* Social Icons */}
                <div className="flex space-x-6 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:seuemail@dominio.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <FaEnvelope size={24} />
                    </a>
                </div>
                
                {/* Footer Text */}
                <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} EcoSphere. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
