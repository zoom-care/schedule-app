import { useEffect, useState } from 'react';
import { axiosGet, getCredentials } from '../utils';
import ProviderCard from './ProviderCard';

function Providers(): JSX.Element {
  const [finalCards, setfinalCards] = useState<Card[]>([]);

  type Card = {
    id: number,
    clinicId: number,
    durationInMinutes: number,
    provider: {
      id: number,
      name: string,
      credentials: string,
      language: string,
      phoneNumber: string
    },
    name: string,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    startTime: string,
    day: string,
    time: string,
    allTimes: string[]
  }

  useEffect(() => {
      // load appointment and clinic data
      getCredentials().then(async (r: any) => {
        const apptResponse = await axiosGet('/api/appointments')
        const clinicResponse: any = await axiosGet('/api/clinics')
        const clinics: any[] = clinicResponse.clinics
        const cards: Card[] = apptResponse.appointmentSlots

        // first, populate clinic data on each card, and set time and date
        cards.forEach(card => {
          const cId = card.clinicId
          clinics.forEach(clinic => {
            if (cId === clinic.id) {
              const { id, ...clinicWithoutId } = clinic // remember all clinic object's keys except id (clinicWithoutId)
              Object.assign(card, clinicWithoutId) // copy those keys over to "card"
            }
          })
          card.day = card.startTime.slice(0,10)
          card.time = card.startTime.slice(11,16)
          card.allTimes = []
        })
        // next, handle all appointment times for each card, and finalize which cards we  display
        cards.forEach(card => {
          card.allTimes.push(card.time)
          cards.forEach(innerCard => {
            const cId = card.clinicId
            const cId2 = innerCard.clinicId
            const dd = card.day
            const dd2 = innerCard.day
            if ((cId === cId2) && (dd === dd2)) {
              // check if to ensure we're not adding a time that's already in array
              if (!card.allTimes.includes(innerCard.time)) {
                card.allTimes.push(innerCard.time)
              }
            }
          })
          // Don't create a new card if it's a duplicate date and clinic
          let isDuplicate = false
          finalCards.forEach(fc => {
            isDuplicate = false
            const cId = card.clinicId
            const fcId = fc.clinicId
            const cDay = card.day
            const fcDay = fc.day
            if ((cId === fcId) && (cDay === fcDay)) isDuplicate = true
            // console.log("dupe of final?",isDuplicate)
          })
          if (!isDuplicate) {
            finalCards.push(card)
            setfinalCards([
              ...finalCards
            ])
        }
        })
        // console.log(finalCards)
      })
    }, []);

  return (
    <> 
      <h2>Available Appointments</h2>
      {/* {finalCards.length} */}
      {finalCards.map((c) => (
        <ProviderCard
          key={c.id}
          providerName={c.provider.name}
          credentials={c.provider.credentials}
          day={c.day}
          allTimes={c.allTimes}
          clinicName={c.name}
          phoneNumber={c.provider.phoneNumber}
          address={c.address}
          city={c.city}
          state={c.state}
          zipcode={c.zipcode}
        />

      ))}
    </>
  )
}

export default Providers;
