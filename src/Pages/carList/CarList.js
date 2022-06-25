import productImg from '../../assets/images/detail-4.jpg'
import {PencilAltIcon , TrashIcon} from "@heroicons/react/outline";
const CarList = () => {
    return (
        <div className="py-8 w-full max-w-7xl mx-auto container text-left h-510">
            <div className="lg:flex items-center justify-start w-full">
                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src={productImg} alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-800">Tata Tiago </p>
                                <p className="text-sm leading-normal pt-2 text-cartNumBg">Booked</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <PencilAltIcon className='w-4 h-4 text-blue-600 mr-2 cursor-pointer' />
                                <TrashIcon className='w-4 h-4 text-cartNumBg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600"> Please find the car details below. you can also edit or delete car accoring to Availablity.</p>
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">DL4S BN 9733</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Manual</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">10000 Km Driven</div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src={productImg} alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-800">Tata Tiago </p>
                                <p className="text-sm leading-normal pt-2 text-green-600">Available</p>
                            </div>
                            <div className='inline-flex items-center'>
                                <PencilAltIcon className='w-4 h-4 text-blue-600 mr-2 cursor-pointer' />
                                <TrashIcon className='w-4 h-4 text-cartNumBg cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600"> Please find the car details below. you can also edit or delete car accoring to Availablity.</p>
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">DL4S BN 9733</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">Manual</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">10000 Km Driven</div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};
export default CarList;
