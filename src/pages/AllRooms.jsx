import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm ">
      <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm ">
      <input type="radio" name='sortOptions' checked={selected} onChange={() => onChange(label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('');
  
  const roomTypes = [
    "Single Room",
    "Double Room",
    "Luxury Room",
    "Family Suite",  
  ];
  
  const priceRanges = [
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',
  ];
  
  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low',
    'Newest First',
  ];

  // Handle room type checkbox changes
  const handleRoomTypeChange = (checked, label) => {
    setSelectedRoomTypes(prevState => 
      checked ? [...prevState, label] : prevState.filter(item => item !== label)
    );
  };

  // Handle price range checkbox changes
  const handlePriceRangeChange = (checked, label) => {
    setSelectedPriceRanges(prevState => 
      checked ? [...prevState, label] : prevState.filter(item => item !== label)
    );
  };

  // Handle sorting radio button change
  const handleSortOptionChange = (label) => {
    setSelectedSortOption(label);
  };

  // Apply filters to the rooms list
  const filterRooms = () => {
    let filteredRooms = roomsDummyData;

    // Filter by room type
    if (selectedRoomTypes.length > 0) {
      filteredRooms = filteredRooms.filter(room => 
        selectedRoomTypes.includes(room.type)
      );
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      filteredRooms = filteredRooms.filter(room => {
        const roomPrice = room.pricePerNight;
        return selectedPriceRanges.some(range => {
          const [min, max] = range.split(' to ').map(Number);
          return roomPrice >= min && roomPrice <= max;
        });
      });
    }

    // Sort rooms based on the selected sorting option
    if (selectedSortOption === 'Price: Low to High') {
      filteredRooms = filteredRooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (selectedSortOption === 'Price: High to Low') {
      filteredRooms = filteredRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
    } else if (selectedSortOption === 'Newest First') {
      filteredRooms = filteredRooms.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return filteredRooms;
  };

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* Main Room Listing */}
      <div>
        <div className='flex flex-col items-start text-left'>
          <h1 className='font-serif text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Filtered Rooms */}
        {filterRooms().map((room) => (
          <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
            <img
              onClick={() => { navigate(`/room/${room._id}`); scrollTo(0, 0); }}
              src={room.images[0]} alt="hotel-img" title='View Room Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p onClick={() => { navigate(`/room/${room._id}`); scrollTo(0, 0); }}
                className='text-gray-800 text-3xl font-serif cursor-pointer'>{room.hotel.name}</p>
              <div className='flex items-center'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenities */}
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 px-2 py-2 rounded-lg bg-[#F5F5FF]/70'>
                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                    <p className='text-xs'>{item}</p>
                  </div>
                ))}
              </div>
              {/* Room price per night */}
              <p className='text-xl font-medium text-gray-700'>₹{room.pricePerNight} /night</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && 'border-b'}`}>
          <p className='text-base font-medium text-gray-800'>FILTERS</p>
          <div className='text-xs cursor-pointer'>
            <span onClick={() => setOpenFilter(!openFilter)} className='lg:hidden'>
              {openFilter ? 'HIDE' : 'SHOW'}
            </span>
            <span className='hidden lg:block'>CLEAR</span>
          </div>
        </div>

        <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} selected={selectedRoomTypes.includes(room)} onChange={handleRoomTypeChange} />
            ))}
          </div>

          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`₹ ${range}`} selected={selectedPriceRanges.includes(range)} onChange={handlePriceRangeChange} />
            ))}
          </div>

          <div className='px-5 pt-5 pb-7'>
            <p className='font-medium text-gray-800 pb-2'>Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} selected={selectedSortOption === option} onChange={handleSortOptionChange} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
