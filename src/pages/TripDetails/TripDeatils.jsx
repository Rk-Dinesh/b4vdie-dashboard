import React,{useState,useEffect} from 'react'
import Card from '../../components/ui/Card'
import { useLocation, Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import MobileLogo from "../../assets/aircraft.png";
import Button from '../../components/ui/Button';
import { API } from '../../host';



function TripDeatils() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tripid = params.get("tripid");

  const navigate = useNavigate()
  

  const transportdata = {mode_of_transport : " ",from : " ",to : " "};
  const pitstopdata = {pitstop_name : " ",pitstop_location : " "};
  const travellerdata = {cotraveller_name : "",join_location : " "};
  const alertdata = {alerttype : " ", interval : " "};

  const [transport, setTransport] = useState(transportdata);
  const [pitstop,setPitstop] = useState(pitstopdata);
  const [traveller, setTraveller] = useState(travellerdata);
  const [alert, setAlert] = useState(alertdata)
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const transport = await axios.get(`${API}/gettransport?tripid=${tripid}`);
         const transportData = transport.data.tokens[0]
       //  console.log(transportData)
        setTransport(transportData);

        const pitstop = await axios.get(`${API}/getpitstop?tripid=${tripid}`);
        const pitstopData = pitstop.data.token[0]
        
         setPitstop(pitstopData);
        
        const travel = await axios.get(`${API}/gettraveller?tripid=${tripid}`);
        const travellerData = travel.data.token[0]
        setTraveller(travellerData);

        const Alert = await axios.get(`${API}/getalert?tripid=${tripid}`);
        const alertData = Alert.data.token[0]
        setAlert(alertData);

    } catch (error) {
      console.error("Error fetching  data:", error);
      
    }
  };

  const handleAlert = (tripid) => {
    navigate(`/alert?tripid=${tripid}`);
  }

  const handlePitstop = (tripid) => {
    navigate(`/pitstop?tripid=${tripid}`);
  }

  const handleTransport = (tripid) => {
    navigate(`/transport?tripid=${tripid}`);
  }

  const handleTraveller = (tripid) => {
    navigate(`/traveller?tripid=${tripid}`);
  }


  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 h-max">
      <Card bodyClass="p-4 rounded-md" className="group ">
      <div className=" bg-white dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
          <div className="">
            <img
              className="  h-full w-full    transition-all duration-300 group-hover:scale-105"
              src={MobileLogo}
               
            />
          </div>
        </div>
        <div>
          {/* <div className="flex justify-between items-center ">
            <p className="	text-slate-900 dark:text-slate-300 ">
              Transport
            </p>
          </div> */}
          {/* <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
            Mode of Transport : {transport?.mode_of_transport || "N/A"}
          </p>
          <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
            From :  {transport?.from || "N/A"}
          </p>
          <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
          To : {transport?.to || "N/A"}
          </p> */}
          
        </div>
        <Button
           onClick={() => handleTransport(tripid)}
            text="View Transport"
            icon="heroicons:link"
            className="btn-outline-dark w-full btn-sm  font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white  dark:hover:bg-slate-700 "
            iconClass=" text-sm leading-none"
          />
      </Card>
      <Card bodyClass="p-4 rounded-md" className="group ">
      <div className=" bg-white dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
          <div className="h-[146px]">
            <img
              className="  h-full w-full   transition-all duration-300 group-hover:scale-105"
              src={MobileLogo}
             
            />
          </div>
        </div>
        <div>
          {/* <div className="flex justify-between items-center ">
            <p className="	text-slate-900 dark:text-slate-300 ">
              Pitstop
            </p>
          </div> */}
          {/* <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
            Name : {pitstop?.pitstop_name || "N/A"}
          </p>
          <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
            Location : {pitstop?.pitstop_location || "N/A"}
          </p> */}
          
        </div>

        <Button
           onClick={() => handlePitstop(tripid)}
           text="View Pitstop"
           icon="heroicons:link"
           className="btn-outline-dark w-full btn-sm  font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white  dark:hover:bg-slate-700 "
           iconClass=" text-sm leading-none"
         />
        
      </Card>
      <Card bodyClass="p-4 rounded-md" className="group ">
      <div className=" bg-white dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
          <div className="h-[146px]">
            <img
              className="  h-full w-full  object-contain  transition-all duration-300 group-hover:scale-105"
              src={MobileLogo}
            />
          </div>
        </div>
        <div>
          {/* <div className="flex justify-between items-center ">
            <p className="	text-slate-900 dark:text-slate-300 ">
              Co-Traveller
            </p>
          </div> */}
          {/* <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
           Name : {traveller?.cotraveller_name || "N/A"}
          </p>
          <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
          Join Location : {traveller?.join_location || "N/A"}
          </p> */}
          
        </div>

        <Button
            onClick={() => handleTraveller(tripid)}
           text="View Co-Traveller"
           icon="heroicons:link"
           className="btn-outline-dark w-full btn-sm  font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white  dark:hover:bg-slate-700 "
           iconClass=" text-sm leading-none"
         />

      </Card>
      <Card bodyClass="p-4 rounded-md" className="group ">
      <div className=" bg-white dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md">
          <div className="h-[146px]">
            <img
              className="  h-full w-full  object-contain  transition-all duration-300 group-hover:scale-105"
              src={MobileLogo}
            />
          </div>
        </div>
        <div>
          {/* <div className="flex justify-between items-center ">
            <p className="	text-slate-900 dark:text-slate-300 ">
              TripAlert
            </p>
          </div> */}
          {/* <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
            Alert-Type : {alert?.alerttype || "N/A"}
          </p>
          <p className="text-slate-900 dark:text-slate-300 text-base	font-medium	mt-2 truncate	">
          Interval : {alert?.interval || "N/A"}
          </p>  */}
          {/* <Link to={`/tripdetails?tripid=${row.original.tripid}` } className="action-btn"></Link> */}
          {/* <Link to={`/alert?tripid=${tripid}`} className="action-btn"> */}
         
         {/* </Link> */}
        </div>

        <Button
          onClick={() => handleAlert(tripid)}
           text="View Alert"
           icon="heroicons:link"
           className="btn-outline-dark w-full btn-sm  font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white  dark:hover:bg-slate-700 "
           iconClass=" text-sm leading-none"
         />
      </Card>
    </div>

  )
}

export default TripDeatils