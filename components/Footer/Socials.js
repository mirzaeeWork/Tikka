import CustomPhoneIcon from '../Icons/phoneIcons';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Box, Typography, Link } from '@mui/material';

function Socials() {
    return (
        <>
            <Box className='socials' >
                <Box className='phone'>
                    <CustomPhoneIcon />
                    <Typography component="span" >
                        تلفن پشتیبانی :
                    </Typography>
                    <Typography component="span" >
                        021-91016620
                    </Typography>
                </Box>
                <Typography className="text_about" >
                    تمامی حقوق سایت متعلق به تیکا؛ پلتفرم جست و جو و انتخاب استاد آنلاین زبان و معلم خصوصی می باشد.
                </Typography>

                <ul className="socials__links">
                    <li>
                        <Link href="">
                            <PinterestIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <TelegramIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <YouTubeIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <LinkedInIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <InstagramIcon />

                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <TwitterIcon />
                        </Link>
                    </li>
                </ul>
            </Box>

        </>
    );
}

export default Socials;
