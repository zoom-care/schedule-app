import React from "react";
import { ApiError, Clinic } from "./zoomcare-api";
import Typography from '@mui/material/Typography';

export default function ClinicDescription({ address, city, name, state, zipcode: zipCode, error }: Clinic & Partial<ApiError>) {
	return (
		<div>
			{error ? (
				<Typography variant="h6">
					Clinic not found
				</Typography>
			) : (
				<React.Fragment>
					<Typography variant="h6">
						{name}
					</Typography>
					<Typography variant="body1">
						{address}
					</Typography>
					<Typography variant="body1">
						{`${city}, ${state} ${zipCode}`}
					</Typography>
				</React.Fragment>
			)}
		</div>
	)
}