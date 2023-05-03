import React from "react";
import { Provider, Clinic } from "./zoomcare-api";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ProviderDescription from "./ProviderDescription";
import ClinicDescription from "./ClinicDescription";

export default function AppointmentDescription({ clinic, provider, startTimeArr }: { clinic: Clinic, provider: Provider, startTimeArr: string[]}) {
	return (
		<Card sx={{ width: 350, mb: 1 }} elevation={4}>
			<CardContent>
				<ClinicDescription {...clinic} />
				<ProviderDescription {...provider} startTimeArr={startTimeArr} />
			</CardContent>
		</Card>
	);
}