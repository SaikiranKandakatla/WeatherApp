import "./WeatherInfo.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function WeatherInfo({Weather}){
    
    const img_url="https://images.unsplash.com/photo-1671991777695-a360666e2f54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh5ZGVyYWJhZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    const img_hot_day="https://images.unsplash.com/photo-1743738049563-520b88442d04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const img_cool_day="https://images.unsplash.com/photo-1558294684-916125171d89?q=80&w=196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="info">
             <Card sx={{ maxWidth: 345 }}>
            <CardMedia className="img"
            sx={{ height: 140 ,width:300}}
            image={Weather.humidity>80?img_url:Weather.tempearture>30?img_hot_day:img_cool_day}
            title="green iguana"
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Weather.city}{Weather.humidity>80?<ThunderstormIcon/>:Weather.tempearture>30?<WhatshotIcon/>:<AcUnitIcon/>}
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