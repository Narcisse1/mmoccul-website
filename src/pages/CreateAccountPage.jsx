import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBriefcase, FaCamera, FaCheckCircle } from 'react-icons/fa';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';

export const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    secondaryAddress: '',
    sex: '',
    phoneNumber: '',
    dateOfBirth: '',
    email: '',
    occupation: '',
    passportPhoto: null,
    localisationPlan: null,
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [passportPreview, setPassportPreview] = useState(null);
  const [planPreview, setPlanPreview] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: false,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, [fieldName]: 'Please upload an image file' }));
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [fieldName]: 'File size must be less than 5MB' }));
        return;
      }

      setFormData(prev => ({ ...prev, [fieldName]: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (fieldName === 'passportPhoto') {
          setPassportPreview(reader.result);
        } else {
          setPlanPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
      
      // Clear error
      if (errors[fieldName]) {
        setErrors(prev => ({ ...prev, [fieldName]: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.sex) newErrors.sex = 'Please select your sex';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
    if (!formData.passportPhoto) newErrors.passportPhoto = 'Passport photo is required';
    if (!formData.localisationPlan) newErrors.localisationPlan = 'Localisation plan is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      alert('Account request submitted successfully! We will review your application and contact you soon.');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        secondaryAddress: '',
        sex: '',
        phoneNumber: '',
        dateOfBirth: '',
        email: '',
        occupation: '',
        passportPhoto: null,
        localisationPlan: null,
        acceptTerms: false
      });
      setPassportPreview(null);
      setPlanPreview(null);
    }
  };

  return (
    <>
      <Header />
      <div className='w-full min-h-screen flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[120px] py-[80px] bg-gradient-to-br from-slate-50 via-white to-green-50'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-12' data-aos="fade-up">
          <div className='inline-flex items-center gap-2 px-5 py-2 bg-themegreen/10 border border-themegreen/20 rounded-full mb-6'>
            <FaUser className='text-themegreen' />
            <span className='text-themegreen text-sm font-semibold tracking-wider uppercase'>
              Join MMOCCUL
            </span>
          </div>
          
          <h2 className='text-slate-900 lg:text-5xl text-3xl font-bold font-poppins mb-6'>
            Create Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-themegreen to-green-600'>Account</span>
          </h2>
          
          <p className='text-gray-600 text-lg font-poppins leading-relaxed'>
            Fill out the form below to start your journey with MMOCCUL. We'll review your application and get back to you within 48 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className='w-full max-w-4xl mx-auto' data-aos="fade-up" data-aos-delay="200">
          <form onSubmit={handleSubmit} className='bg-white rounded-2xl shadow-xl p-8 lg:p-12'>
            
            {/* Personal Information Section */}
            <div className='mb-10'>
              <h3 className='text-slate-900 text-2xl font-bold font-poppins mb-6 flex items-center gap-3'>
                <div className='w-10 h-10 bg-themegreen/10 rounded-full flex items-center justify-center'>
                  <FaUser className='text-themegreen' />
                </div>
                Personal Information
              </h3>
              
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                {/* First Name */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    First Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                    placeholder='Enter your first name'
                  />
                  {errors.firstName && <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Last Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                    placeholder='Enter your last name'
                  />
                  {errors.lastName && <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>}
                </div>

                {/* Sex */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Sex <span className='text-red-500'>*</span>
                  </label>
                  <select
                    name='sex'
                    value={formData.sex}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.sex ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                  >
                    <option value=''>Select your sex</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                  {errors.sex && <p className='text-red-500 text-sm mt-1'>{errors.sex}</p>}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Date of Birth <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='date'
                    name='dateOfBirth'
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                  />
                  {errors.dateOfBirth && <p className='text-red-500 text-sm mt-1'>{errors.dateOfBirth}</p>}
                </div>

                {/* Occupation */}
                <div className='lg:col-span-2'>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Occupation <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='occupation'
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.occupation ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                    placeholder='Enter your occupation'
                  />
                  {errors.occupation && <p className='text-red-500 text-sm mt-1'>{errors.occupation}</p>}
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className='mb-10'>
              <h3 className='text-slate-900 text-2xl font-bold font-poppins mb-6 flex items-center gap-3'>
                <div className='w-10 h-10 bg-themegreen/10 rounded-full flex items-center justify-center'>
                  <FaMapMarkerAlt className='text-themegreen' />
                </div>
                Contact Information
              </h3>
              
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                {/* Address */}
                <div className='lg:col-span-2'>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Address <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                    placeholder='Enter your primary address'
                  />
                  {errors.address && <p className='text-red-500 text-sm mt-1'>{errors.address}</p>}
                </div>

                {/* Secondary Address */}
                <div className='lg:col-span-2'>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Secondary Address <span className='text-gray-500 text-sm'>(Optional)</span>
                  </label>
                  <input
                    type='text'
                    name='secondaryAddress'
                    value={formData.secondaryAddress}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all'
                    placeholder='Enter your secondary address (if any)'
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Phone Number <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='tel'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                    placeholder='+237 XXX XXX XXX'
                  />
                  {errors.phoneNumber && <p className='text-red-500 text-sm mt-1'>{errors.phoneNumber}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Email Address <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-themegreen/20 focus:border-themegreen transition-all`}
                    placeholder='your.email@example.com'
                  />
                  {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Document Upload Section */}
            <div className='mb-10'>
              <h3 className='text-slate-900 text-2xl font-bold font-poppins mb-6 flex items-center gap-3'>
                <div className='w-10 h-10 bg-themegreen/10 rounded-full flex items-center justify-center'>
                  <FaCamera className='text-themegreen' />
                </div>
                Required Documents
              </h3>
              
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                {/* Passport Photo */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Passport Photo <span className='text-red-500'>*</span>
                  </label>
                  <div className={`border-2 border-dashed ${errors.passportPhoto ? 'border-red-500' : 'border-gray-300'} rounded-lg p-6 text-center hover:border-themegreen transition-all cursor-pointer`}>
                    <input
                      type='file'
                      id='passportPhoto'
                      name='passportPhoto'
                      accept='image/*'
                      onChange={(e) => handleFileChange(e, 'passportPhoto')}
                      className='hidden'
                    />
                    <label htmlFor='passportPhoto' className='cursor-pointer'>
                      {passportPreview ? (
                        <div className='flex flex-col items-center gap-3'>
                          <img src={passportPreview} alt='Passport Preview' className='w-32 h-32 object-cover rounded-lg' />
                          <p className='text-sm text-gray-600'>Click to change photo</p>
                        </div>
                      ) : (
                        <div className='flex flex-col items-center gap-3'>
                          <FaCamera className='text-4xl text-gray-400' />
                          <p className='text-gray-600'>Click to upload passport photo</p>
                          <p className='text-sm text-gray-500'>Max size: 5MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                  {errors.passportPhoto && <p className='text-red-500 text-sm mt-1'>{errors.passportPhoto}</p>}
                </div>

                {/* Localisation Plan */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Photo of Localisation Plan <span className='text-red-500'>*</span>
                  </label>
                  <div className={`border-2 border-dashed ${errors.localisationPlan ? 'border-red-500' : 'border-gray-300'} rounded-lg p-6 text-center hover:border-themegreen transition-all cursor-pointer`}>
                    <input
                      type='file'
                      id='localisationPlan'
                      name='localisationPlan'
                      accept='image/*'
                      onChange={(e) => handleFileChange(e, 'localisationPlan')}
                      className='hidden'
                    />
                    <label htmlFor='localisationPlan' className='cursor-pointer'>
                      {planPreview ? (
                        <div className='flex flex-col items-center gap-3'>
                          <img src={planPreview} alt='Plan Preview' className='w-32 h-32 object-cover rounded-lg' />
                          <p className='text-sm text-gray-600'>Click to change photo</p>
                        </div>
                      ) : (
                        <div className='flex flex-col items-center gap-3'>
                          <FaCamera className='text-4xl text-gray-400' />
                          <p className='text-gray-600'>Click to upload localisation plan</p>
                          <p className='text-sm text-gray-500'>Max size: 5MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                  {errors.localisationPlan && <p className='text-red-500 text-sm mt-1'>{errors.localisationPlan}</p>}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className='mb-8'>
              <div className='flex items-start gap-3'>
                <input
                  type='checkbox'
                  id='acceptTerms'
                  name='acceptTerms'
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                  className='mt-1 w-5 h-5 text-themegreen border-gray-300 rounded focus:ring-themegreen'
                />
                <label htmlFor='acceptTerms' className='text-gray-700'>
                  I accept the <a href='#' className='text-themegreen hover:underline font-semibold'>Terms and Conditions</a> and understand that my information will be used in accordance with MMOCCUL's privacy policy. <span className='text-red-500'>*</span>
                </label>
              </div>
              {errors.acceptTerms && <p className='text-red-500 text-sm mt-1'>{errors.acceptTerms}</p>}
            </div>

            {/* Submit Button */}
            <div className='flex justify-center'>
              <button
                type='submit'
                className='inline-flex items-center gap-3 bg-themegreen hover:bg-green-600 text-white text-lg font-semibold py-4 px-12 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'
              >
                <FaCheckCircle />
                <span>Submit Request</span>
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className='w-full max-w-4xl mx-auto mt-8' data-aos="fade-up" data-aos-delay="400">
          <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
            <h4 className='text-blue-900 font-bold mb-2 flex items-center gap-2'>
              <FaCheckCircle className='text-blue-600' />
              What happens next?
            </h4>
            <ul className='text-blue-800 space-y-2 ml-6'>
              <li className='list-disc'>Our team will review your application within 48 hours</li>
              <li className='list-disc'>We'll contact you via phone or email for verification</li>
              <li className='list-disc'>Once approved, you can visit any branch to complete your registration</li>
              <li className='list-disc'>You'll receive your member ID and can start enjoying our services</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
