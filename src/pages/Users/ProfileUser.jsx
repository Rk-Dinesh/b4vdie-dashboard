import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../../components/ui/Icon";
import Card from "../../components/ui/Card";
import axios from "axios";
import MobileLogo from "../../assets/aircraft.png";
import { API } from "../../host";




const ProfileUser = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userid = params.get("userid");

  const [user, setUser] = useState([]);
  const [post, setPost] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const user = await axios.get(`${API}/getUserId?userid=${userid}`);
      const userData = user.data
      //console.log(userData)
      setUser([userData]);
      const Post = await axios.get(`${API}/getcommunityId?userid=${userid}`);
      const postData = Post.data.token
      console.log(postData)
      setPost(postData);

    } catch (error) {
      console.error("Error fetching  data:", error);

    }
  };

  const handleDelete = async (community_id) => {
    try {

      await axios.delete(`${API}/deletecommunity?community_id=${community_id}`);


      setPost(prevCategories =>
        prevCategories.filter(category => category.community_id !== community_id)
      );
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>

      <div className="space-y-5 profile-page" >
        {user.map((user, index) => (
          <div key={index} className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
            <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
            <div className="profile-box flex-none md:text-start text-center">
              <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
                <div className="flex-none">
                  <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
                    <img
                      src={MobileLogo}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                    <Link
                      to="#"
                      className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                    >
                      <Icon icon="heroicons:pencil-square" />
                    </Link>
                    <br />
                    <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                      {user?.userid || "N/A"}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                    {`${user?.fname} ${user?.lname}` || "N/A"}
                  </div>
                  <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                    {user?.dob || "N/A"}
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
              <div className="flex-1">
                <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                {`${user?.kms} Kms` || "0" }
                </div>
                <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                  Distance
                </div>
              </div>

              <div className="flex-1">
                <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                  {user?.followers ? user.followers.length : 0}
                </div>
                <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                  Followers
                </div>
              </div>

              <div className="flex-1">
                <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                  {user?.following ? user.following.length : 0}
                </div>
                <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                  Following
                </div>
              </div>
            </div>
          </div>
        ))}

        {user.map((user, indexs) => (
          <div key={indexs} className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-12 col-span-12">
              <Card title="Contact Info" >
                <div className="  flex justify-around">
                  <div className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:envelope" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        EMAIL
                      </div>
                      <a
                        href="mailto:someone@example.com"
                        className="text-base text-slate-600 dark:text-slate-50"
                      >
                        {user?.email || "N/A"}
                      </a>
                    </div>
                  </div>

                  <div className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:phone-arrow-up-right" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        PHONE
                      </div>
                      <a
                        href="tel:0189749676767"
                        className="text-base text-slate-600 dark:text-slate-50"
                      >
                        {user?.phone || "N/A"}
                      </a>
                    </div>
                  </div>

                  <div className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:map" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        LOCATION
                      </div>
                      <div className="text-base text-slate-600 dark:text-slate-50">
                        {`${user?.address} , ${user?.state} - ${user?.postcode}` || "N/A"}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 h-max">
          {post.map((post, indexz) => (
            <Card key={indexz} bodyClass="p-4 rounded-md" className="group ">
              <div className=" bg-white dark:rounded relative h-[420px] flex flex-col justify-center items-center mb-3 rounded-md">
                <div className="h-[330px]">
                  <img
                    className="  h-full w-full   transition-all duration-300 group-hover:scale-105"
                    src={`${API}/${post.image}`}
                    alt="Image"
                    //style={{ paddingBottom: '50px' }}
                  />
                </div>
                <div>
               <div style={{ position: 'absolute', top: '-15px', left: '-15px' }}> 
               <div className=" flex " >
                      <Icon  icon="ion:heart"  width="25" className="text-danger-600 "/>  <p > {post?.like ? post.like.length : 0}</p>
              </div>
               </div>
                  <div  style={{  position: 'absolute', top: '-5px', right: '10px' }}>
                    <p className="	text-slate-900 dark:text-slate-300 "style={{fontSize : "13px" }}>
                     Posted On : {post.date || "N/A"}
                    </p>
                  </div>

                  <div  className= "flex" style={{  position: 'absolute', top: '385px', left: '1px' }}>
                    <p style={{fontSize : "14px", fontWeight:'bold' }}>Description </p>
                    <p className="	text-slate-900 dark:text-slate-300 " style={{fontSize : "14px", fontFamily : 'cursive',width: '250px', marginRight: '10px'}}>
                     : {post.desc || "N/A"} 
                    </p>
                  </div>

                  <div style={{ position: 'absolute', bottom: '40px', right: '15px' }} >
                    <button
                      onClick={() => handleDelete(post.community_id)}
                      className="bg-slate-100 text-slate-400  p-2.5  mb-1.5 rounded-full hover:bg-red-200 hover: text-red-600">
                      <Icon icon="heroicons:trash" className="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600" />
                    </button>
                  </div>
                </div>
              </div>

            </Card>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProfileUser;
