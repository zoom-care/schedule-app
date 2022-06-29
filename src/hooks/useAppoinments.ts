import { useEffect, useState } from "react";
import axios from "axios";
import { AppointmentsDto, AppointmentSlot } from "../zoomcare-api";
import { API_APPOINTMENTS, API_LOGIN } from "../config/api";

export const useAppointmentsHook = () => {
  const [token, setToken] = useState(null);
  const [appointmentDto, setAppointmentDto] = useState<AppointmentsDto>({
    appointmentSlots: [],
  });
  const [appointmentList, setAppointmentList] = useState<AppointmentSlot[]>([]);
  const states = require("us-state-converter");
  const [appoinmentGroupList, setAppoinmentGroupList] = useState<any>([]);

  useEffect(() => {
    //Get Token...
    axios
      .post(API_LOGIN, {
        username: "user",
        password: "user",
      })
      .then((data) => {
        setToken(data?.data?.authToken);
      });
  }, []);

  useEffect(() => {
    //Once get token...
    if (!token) return;
    //Set token to axios
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    //Get appointments
    axios.get(API_APPOINTMENTS).then((data) => {
      setAppointmentList(data?.data?.appointmentSlots);
    });
  }, [token]);

  useEffect(() => {
    //Once get appointments...
    if (!(Array.isArray(appointmentList) && appointmentList.length)) return;
    //set appointmentDto...
    setAppointmentDto({
      appointmentSlots: appointmentList,
    });
  }, [appointmentList]);

  useEffect(() => {
    //Once get appointmentDto...
    if (!appointmentDto) return;

    //Get appoinmentGroupList
    getAppoinmentGroupList();
    // eslint-disable-next-line
  }, [appointmentDto]);

  const getAppoinmentGroupList = async () => {
    //If there are appointments slots...
    if (appointmentDto?.appointmentSlots.length > 0) {
      //Group by clinic
      const clinicGroups = appointmentDto?.appointmentSlots.reduce(
        (groups: any, appointment: any) => {
          const group = groups[appointment.clinicId] || [];
          group.push(appointment);
          groups[appointment.clinicId] = group;
          return groups;
        },
        {}
      );

      let clinicIdList = Object.keys(clinicGroups);
      let myAppoinmentList: any = [];

      //In every clinic...
      for await (const clinicId of clinicIdList) {
        //Get the appointments by clinic
        let appointmentInfoList = clinicGroups[clinicId];

        let appoinmentList: any = [];

        //Go through appointments
        appointmentInfoList.forEach((appointmentInfo: any) => {
          //Create appointment object list with required structure
          appoinmentList.push({
            providerId: appointmentInfo?.provider?.id,
            providerName: `${appointmentInfo?.provider?.name} ${appointmentInfo?.provider?.credentials}`,
            providerPhone: appointmentInfo?.provider?.phoneNumber,
            startTime: appointmentInfo?.startTime,
          });
        });

        //Group by provider
        const groupsProvider = appoinmentList.reduce(
          (groups: any, item: any) => {
            const group = groups[item.providerId] || [];
            group.push(item);
            groups[item.providerId] = group;
            return groups;
          },
          {}
        );

        let appoinmentGroupedList = [];
        let providerIdList = Object.keys(groupsProvider);
        let timeFinalList: any = [];
        let appoinmentGrouped = {
          providerId: "",
          providerName: "",
          providerPhone: "",
          timeList: [],
        };

        //For every provider grouped...
        for (const providerId of providerIdList) {
          let myProviderList = groupsProvider[providerId];

          //Go through every startTime
          myProviderList.forEach((element: any) => {
            timeFinalList.push(element.startTime);
          });

          //If there are at least one startTime...
          if (timeFinalList.length > 0) {
            //Create object appointmentGrouped
            appoinmentGrouped = {
              providerId: myProviderList[0].providerId,
              providerName: myProviderList[0].providerName,
              providerPhone: myProviderList[0].providerPhone,
              timeList: timeFinalList,
            };
          }
          appoinmentGroupedList.push(appoinmentGrouped);
        }

        let clinicInfo = await getClinicInfo(+clinicId);

        if (clinicInfo !== null) {
          //Create generic object of appoinment whit the required structure
          let myAppoinment = {
            clinicName: clinicInfo?.name,
            clinicAddress: clinicInfo?.address,
            clinicLocation: `${clinicInfo?.city}, ${states.abbr(
              clinicInfo?.state
            )} ${clinicInfo?.zipcode}`,
            appoinmentList: appoinmentGroupedList,
          };
          myAppoinmentList.push(myAppoinment);
        }
      }

      //Add to final list...
      setAppoinmentGroupList(myAppoinmentList);
    }
  };

  const getClinicInfo = async (clinicId: number) => {
    try {
      let clinicInfo = await axios.get(`/api/clinics/${clinicId}`);
      return clinicInfo?.data;
    } catch (error) {
      return null;
    }
  };

  //return the final list
  return appoinmentGroupList;
};
