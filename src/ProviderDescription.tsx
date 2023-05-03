import { Provider } from "./zoomcare-api"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stethoscope from "./stethoscope.webp"
import { grey } from '@mui/material/colors';
import { formatPhoneNumber, formatProviderTitle, formatStartTime } from "./utils";

export default function ProviderDescription({ name, credentials, phoneNumber, startTimeArr }: Provider & { startTimeArr: string[] }) {
	return (
		<Stack spacing={2} direction="row">
			<Avatar
        alt="Stethoscope"
        src={Stethoscope}
        sx={{ width: 95, height: 95, bgcolor: grey[200], img: { width: '50%', height: '80%'} }}
      />
			<div>
				<Typography variant="h6">{formatProviderTitle(name, credentials)}</Typography>
				{phoneNumber && <Typography variant="body1">{formatPhoneNumber(phoneNumber)}</Typography>}
				<Stack spacing={1} direction="row">
					{startTimeArr.map(formatStartTime).map((time, idx) => <Button key={idx} variant="contained">{time}</Button>)}
				</Stack>
			</div>
		</Stack>
	)
}