import "./WeatherInfo.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function WeatherInfo({Weather}){
    
    const img_url="https://images.unsplash.com/photo-1671991777695-a360666e2f54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh5ZGVyYWJhZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    
    return (
        <div className="info">
             <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 ,width:300}}
            image={img_url}
            title="green iguana"
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Weather.city}
                    </Typography>
                    
                    <Typography variant="body2" color='text.secondary'  component={'span'} >
                        <>
                        <p>Temperature={Weather.tempearture}&deg;C</p>
                        <p>Description={Weather.desc}</p>
                        <p>humidity={Weather.humidity}</p>
                        <p>Max Temp={Weather.tempearturemaximum}&deg;C</p>
                        <p>Min temp{Weather.tempearturemin}&deg;C</p>
                        </>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
    )
}