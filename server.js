import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) =>{
    res.send('Dwaipayan');
});

app.get('/stress-test',(req,res) =>{

    for (let i = 0; i < 1000000; i++) {
  
    };

    res.send('Stress test completed');

})

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
    
})