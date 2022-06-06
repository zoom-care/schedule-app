import React from 'react'

import './ProviderView.css';

import logo from 'assets/images/provider.png'

const ProviderView = (props: any) => (
    <div>
        {props.providersData.map((provider: any) =>
            <div className="clinic">
		        <div className='description'>
                    <h4>{provider.name}</h4>
                    <div className='address'>
				        <p>{provider.address}</p>
				        <p>{provider.city}, {provider.state} {provider.zipCode}</p>
                    </div>
			    </div>
			    <div className="provider">
			        <img className="logo" alt="" src={logo}></img>
                    <div>
                        <p className='name'>{provider.providerName}, {provider.credentials}</p>
                        <p>{provider.phoneNumber}</p>
                        {provider.startTimes.map((time: string) =>
                            <button className="button">{time}</button>
                        )}
                    </div>
			    </div>
		    </div>  
        )}
	</div>
)

export default ProviderView