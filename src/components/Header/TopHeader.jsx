
import { Phone, Mail, MapPin } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-spice-100 py-2 border-b border-spice-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-spice-900 font-bold text-xl mb-2 md:mb-0">
        Indo M & S Venture PVT. LTD.
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-spice-600" />
            <div>
              <div className="text-sm text-spice-900">+91 8600146527</div>
              {/* <div className="text-xs text-spice-600">Make A Call</div> */}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-spice-600" />
            <div>
              <div className="text-sm text-spice-900">indo@indianspices.com</div>
              {/* <div className="text-xs text-spice-600">Get An Estimate</div> */}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-spice-600" />
            <div>
              <div className="text-sm text-spice-900"><b>Corporate office:</b> 401, 4th floor, Archway building sopanbaug road, Balewadi, Pune-411045, India</div>
              <div className="text-sm text-spice-900"><b>Registered office:</b> Bhatshirgaon, Taluka-Shirala, District-Sangali, 415408, Maharashtra, India</div>
              {/* <div className="text-xs text-spice-600">Location</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
