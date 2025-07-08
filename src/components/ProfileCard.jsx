import React from "react";
import profileImg from "../assets/images/user.png";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-[300px] bg-[url(/src/assets/images/bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="bg-white shadow-xl rounded-xl p-3 w-full max-w-5xl mt-80 h-[250px]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <img
              src={profileImg}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">Lorem Mollis</h2>
              <p className="text-gray-500">@loremmollis</p>
              <div className="flex gap-8 mt-2">
                <div className="text-center">
                  <p className="font-semibold text-[#000000]">156</p>
                  <p className="text-sm text-[#000000]">Following</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-[#000000]">457</p>
                  <p className="text-sm text-[#000000]">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-[#000000]">382</p>
                  <p className="text-sm text-[#000000]">Owned</p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-600 hover:text-black transition mb-20 font-semibold cursor-pointer">
            Edit Profile
          </button>
        </div>
        <hr className="my-4" />
        <p className="text-gray-600 text-sm leading-relaxed w-[880px]">
          Rhoncus facilisis cursus tortor varius vitae. Tristique varius arcu
          sit pretium viverra. Ornare hac posuere integer molestie mi aliquam
          quis in eget. Non arcu tempor sed facilisis non aliquet adipiscing
          ullamcorper massa. Sapien ornare sit odio id lorem vitae. Ipsum, lacus
          cursus iaculis praesent cursus consectetur. Dolor ac faucibus in
          tempor adipiscing eget. Risus venenatis, ut fames libero, cras eu ut.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
