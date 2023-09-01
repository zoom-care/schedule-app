import uniqid from 'uniqid';
import Provider from './components/Provider';
import useAppointmentProviders from './hooks/useAppointmentProviders';

function App() {
  const providers = useAppointmentProviders();

  return (
    <div className="w-full h-screen flex flex-col text-secondary">
      <div className="bg-white w-full flex py-4 px-10 text-primary font-bold text-2xl shadow">
        ZoomCare
      </div>
      <div className="p-10 w-full flex flex-col gap-2" data-testid="provider">
        {providers.length > 0 ? (providers.map(provider => (
          <Provider
            key={uniqid('provider')}
            {...provider}
          />
        ))) : (
          <p>No providers</p>
        )}
      </div>
    </div>
  );
}

export default App;
