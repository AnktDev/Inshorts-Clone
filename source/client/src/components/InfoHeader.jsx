
import {Box, Typography, styled} from '@mui/material';
import { margin, padding } from '@mui/system';

const Container = styled(Box)(( {theme}) => ({
    background: '#f44336',
    color: '#FFFFFF',
    display:'flex',
    alignItems: 'center',
    height: 48,
    marginBottom:30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));



 
const Image = styled('img')({
   height:34,
   paddingTop:5,
   '&:last-child': {
        margin: '0 50px 0 20px'
   }
 

})

const Text = styled(Typography)`

font-size: 14px;
font-weight: 300;
margin-left: 50px;
margin-top: 10px;
 
`


const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png'; 
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png'; 

    return(
        <Container>
            <Text>
                For best experience use Inshorts App on your SmartPhones.
            </Text>
            <Box style={{display: 'flex', marginLeft:'auto'}}>
                <Image src = {appleStore} alt = "appleStore"/>
                <Image src = {googleStore} alt = "googleStore"/>
            </Box>
        </Container>
    )
}

export default InfoHeader;