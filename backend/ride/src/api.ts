import express from 'express';
import Ride from './domain/Ride';
import { OperationCanceledException } from 'typescript';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/calculate_ride', function (req, res) {
    try {
        const ride = new Ride();
        for (const segment of req.body.segments) {
            ride.addSegments(segment.distance, new Date(segment.date));
        }
        const price = ride.calculate();
        res.json(price);
    } catch (e: unknown) {
        if (e instanceof Error) {
            res.status(422).send(e.message);
            return
        }
        res.status(422).send("unkown error")
    }

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});