import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ZCImg } from "../../components/ZCImg/ZCImg.styled";
import {
  Header,
  HomeLayout,
  ComponentContainer,
  ComponentContainer2,
  AppointmentLayout,
  AppointmentItemRow,
  AppointmentItem,
  AppointmentItemColumn,
  AppointmentItemWrap,
  ZCButton,
} from "./Home.styled";
import Logo from "../../assets/logo_zoom_care.png";
import LogoClinic from "../../assets/logo_clinic.png";
import { HorizontalLine, MSpacing } from "../../components/Spacing.styled";
import { ZCText } from "../../components/Typography.styled";
import { useAppointmentsHook } from "../../hooks/useAppoinments";
import { formatDate, formatPhoneNumber } from "../../utils/format";

const Home = () => {
  const navigate = useNavigate();

  let appointmentsResultList = useAppointmentsHook();
  const [appoinmentGroupList, setAppoinmentGroupList] = useState<any>(
    appointmentsResultList
  );

  useEffect(() => {
    if (!appointmentsResultList) return;
    setAppoinmentGroupList(appointmentsResultList);
  }, [appointmentsResultList]);

  useEffect(() => {
    if (!appoinmentGroupList || appoinmentGroupList.length === 0) return;
    console.log(appoinmentGroupList);
  }, [appoinmentGroupList]);

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <HomeLayout>
      <Header>
        <ComponentContainer className="mr-15">
          <ComponentContainer2
            className="pointer"
            onClick={() => onClickLogo()}
          >
            <ZCImg
              src={Logo}
              alt="ZC-logo"
              width={"10rem"}
              height={"10rem"}
            ></ZCImg>
          </ComponentContainer2>
        </ComponentContainer>
      </Header>

      <AppointmentLayout>
        {appoinmentGroupList.map((item: any, index: number) => {
          return (
            <div key={index}>
              <AppointmentItem className="bg-white">
                <AppointmentItemRow>
                  <AppointmentItemColumn>
                    <AppointmentItemRow className="w-start pd-0">
                      <ZCText className="bold sm1">{item?.clinicName}</ZCText>
                    </AppointmentItemRow>
                    <AppointmentItemRow className="w-start pd-0">
                      <ZCText className="xs">{item?.clinicAddress}</ZCText>
                    </AppointmentItemRow>
                    <AppointmentItemRow className="w-start pd-0">
                      <ZCText className="xs">{item?.clinicLocation}</ZCText>
                    </AppointmentItemRow>
                  </AppointmentItemColumn>
                </AppointmentItemRow>
                <MSpacing />
                <AppointmentItemRow>
                  <AppointmentItemColumn className="pr-1">
                    <ZCImg
                      src={LogoClinic}
                      alt="ZC-logo-clinic"
                      width={"12rem"}
                      height={"10rem"}
                    ></ZCImg>
                  </AppointmentItemColumn>

                  <AppointmentItemWrap>
                    {item?.appoinmentList?.length > 0 ? (
                      item?.appoinmentList.map(
                        (appointmentItem: any, appointmentIndex: number) => (
                          <AppointmentItem key={appointmentIndex}>
                            <AppointmentItemColumn>
                              <AppointmentItemRow className="w-start pd-0">
                                <ZCText className="bold blue">
                                  {appointmentItem?.providerName}
                                </ZCText>
                              </AppointmentItemRow>
                              <AppointmentItemRow className="w-start pd-0">
                                <ZCText>
                                  {formatPhoneNumber(
                                    appointmentItem?.providerPhone
                                  )}
                                </ZCText>
                              </AppointmentItemRow>
                              <AppointmentItemRow className="w-start pd-0">
                                <AppointmentItemWrap>
                                  {appointmentItem?.timeList?.length > 0 ? (
                                    appointmentItem?.timeList.map(
                                      (time: any, timeIndex: number) => (
                                        <AppointmentItemRow
                                          key={timeIndex}
                                          className="w-start pr-1"
                                        >
                                          <ZCButton>
                                            {formatDate(time, "hh:MM A")}
                                          </ZCButton>
                                        </AppointmentItemRow>
                                      )
                                    )
                                  ) : (
                                    <ZCText>No agenda available</ZCText>
                                  )}
                                </AppointmentItemWrap>
                              </AppointmentItemRow>
                            </AppointmentItemColumn>
                          </AppointmentItem>
                        )
                      )
                    ) : (
                      <ZCText>No Appointments Found</ZCText>
                    )}
                  </AppointmentItemWrap>
                </AppointmentItemRow>
              </AppointmentItem>
              <HorizontalLine className="my-0" />
            </div>
          );
        })}
      </AppointmentLayout>
    </HomeLayout>
  );
};

export default Home;
