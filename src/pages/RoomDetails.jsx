// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
// import StarRating from '../components/StarRating'

// const RoomDetails = () => {
//     const {id} = useParams()
//     const [room, setRoom] = useState(null)
//     const [mainImage, setMainImgae]= useState(null)

//     useEffect(()=>{
//       const room = roomsDummyData.find(room => room._id === id)
//       room && setRoom(room);
//       room && setMainImgae(room.images[0])
//     },[])
//   return room && (
//       <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
//         {/* Room Details */}
//         <div className='flex flex-col md:flex-row items-start md:items-center gap-2 '>
//             <h1 className='text-3xl md:text-4xl font-sans'>{room.hotel.name} <span className='font-serif text-sm'>({room.roomType})</span></h1>
//             <p className='text-xs font-sans py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
//         </div>

//         {/* Room Rating */}
//         <div className='flex items-center gap-1 mt-2'>
//             <StarRating />
//             <p className='ml-2'>200+ reviews</p>
//         </div>

//          {/* Room Address */}
//           <div className='flex items-center gap-1 text-gray-500 mt-2'>
//               <img src={assets.locationIcon} alt="location-Icon" />
//               <span>{room.hotel.address}</span>
//           </div>

//           {/* Room Images */}
//           <div className='flex flex-col lg:flex-row mt-6 gap-6'>
//               <div className='lg:w-1/2 w-full'>
//                   <img src={mainImage} alt="Room-Image" className='w-full rounded-xl shadow-lg object-cover' />
//               </div>
//               <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
//                  {room?.images.length > 1 && room.images.map((image, index)=>(
//                      <img onClick={()=>setMainImgae(image)}
//                      key={index} src={image} alt="Room-Images" 
//                      className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}/>
//                  ))}
//               </div>
//           </div>

//           {/* Room Highlights */}

//           <div className='flex flex-col md:flex-row md:justify-between mt-10'>
//               <div className='flex flex-col'>
//                  <h1 className='text-3xl md:text-4xl font-sans'>Experince Luxury Like Never Before</h1>
//                  <div className='flex flex-wrap items-enter mt-3 mb-6 gap-4'>
//                     {room.amenities.map((item, index)=>(
//                        <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
//                           <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
//                           <p className='text-xs'>{item}</p>
//                        </div> 
//                     ))}
//                  </div>
//               </div>
//               {/* Room Price  */}
//               <p className='text-2xl font-medium'>₹{room.pricePerNight}/night</p>
//           </div>

//           {/* Checkin Checout time  */}

//           <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
               
//                 <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

//                      <div className='flex flex-col'>
//                         <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
//                         <input type="date" id='checkInDate'placeholder='check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
//                      </div>
//                      <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
//                      <div className='flex flex-col'>
//                         <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
//                         <input type="date" id='checkOutDate'placeholder='check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
//                      </div>
//                       <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
//                      <div className='flex flex-col'>
//                         <label htmlFor="guests" className='font-medium'>Guests</label>
//                         <input type="number" id='guests'placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
//                      </div>

//                 </div>

//                 <button type='submit' className='bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
//                     Check Availability
//                 </button>
//           </form>

//           {/* Common Specificaation */}
//           <div className='mt-25 space-y-4'>
//              {roomCommonData.map((spec, index)=>(
//                 <div key={index} className='flex items-start gap-2'>
//                      <img src={spec.icon} alt={`${spec.title}-Icon`} className='w-6.5' />
//                      <div>
//                         <p className='text-base'>{spec.title}</p>
//                         <p className='text-gray-500'>{spec.description}</p>
//                      </div>
//                 </div>
//              ))}
//           </div>
//           <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
//              <p>Guests Will be allocated on the ground floor according to availability. you get a comfartable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot plese mark the number of guests to get the exact price of groups. The Guests will be allocated ground floor according to availability. you get the comfortable two bedroom apartment that has a true city feeling.  </p>
//           </div>
//           {/* Hosted by */}
//           <div className='flex flex-col items-start gap-4 '>
//              <div className='flex gap-4'>
//                  <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-16 md:w-16 rounded-full' />
//                  <div>
//                     <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
//                     <div className='flex items-center mt-1'>
//                         <StarRating />
//                         <p className='ml-2'>200+ reviews</p>
//                     </div>
//                  </div>
//              </div>
//              <button className='px-6 py-2.5 mt-4 rounded text-white bg-blue-500 hover:bg-blue-400 transition-all cursor-pointer'>Contact Now</button>
//           </div>
//       </div>
//   )
// }

// export default RoomDetails


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImgae] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room);
        room && setMainImgae(room.images[0])
    }, [id])

    const handleCheckAvailability = (e) => {
        e.preventDefault();
        const checkInInput = document.getElementById('checkInDate').value;
        const checkOutInput = document.getElementById('checkOutDate').value;

        if (!checkInInput || !checkOutInput) {
            toast.error('Please select both Check-In and Check-Out dates');
            return;
        }

        const checkInDate = new Date(checkInInput);
        const checkOutDate = new Date(checkOutInput);

        checkInDate.setHours(0, 0, 0, 0);
        checkOutDate.setHours(0, 0, 0, 0);

        if (checkOutDate < checkInDate) {
            toast.error('Check-Out date cannot be before Check-In date');
        } else if (checkInDate.getTime() === checkOutDate.getTime()) {
            toast.success('Room is available!');
        } else {
            toast.success('Room is available!');
        }
    }

    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <ToastContainer />
            {/* Room Details */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2 '>
                <h1 className='text-3xl md:text-4xl font-sans'>{room.hotel.name} <span className='font-serif text-sm'>({room.roomType})</span></h1>
                <p className='text-xs font-sans py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>

            {/* Room Rating */}
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            {/* Room Address */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="location-Icon" />
                <span>{room.hotel.address}</span>
            </div>

            {/* Room Images */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="Room-Image" className='w-full rounded-xl shadow-lg object-cover' />
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImgae(image)}
                            key={index} src={image} alt="Room-Images"
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>

            {/* Room Highlights */}
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-sans'>Experience Luxury Like Never Before</h1>
                    <div className='flex flex-wrap items-enter mt-3 mb-6 gap-4'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-2xl font-medium'>₹{room.pricePerNight}/night</p>
            </div>

            {/* Check-in Checkout Time */}
            <form onSubmit={handleCheckAvailability} className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                        <input type="date" id='checkInDate' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                        <input type="date" id='checkOutDate' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                </div>
                <button type='submit' className='bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                    Check Availability
                </button>
            </form>

            {/* Common Specification */}
            <div className='mt-25 space-y-4'>
                {roomCommonData.map((spec, index) => (
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-Icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                <p>Guests will be allocated on the ground floor according to availability. The price quoted is for two guests. Please mark the number of guests to get the exact price.</p>
            </div>

            {/* Hosted by */}
            <div className='flex flex-col items-start gap-4 '>
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-16 md:w-16 rounded-full' />
                    <div>
                        <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
                        <div className='flex items-center mt-1'>
                            <StarRating />
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                    </div>
                </div>
                <button className='px-6 py-2.5 mt-4 rounded text-white bg-blue-500 hover:bg-blue-400 transition-all cursor-pointer'>Contact Now</button>
            </div>
        </div>
    )
}

export default RoomDetails
