import { beforeEach, describe, expect, test, vi } from 'vitest'
import request from 'supertest';
import express from 'express';
import * as dogController from '../controllers/dogController';
import dogRoutes from "../routes/dogRoutes"

vi.mock('../controllers/dogController');
const app = express();
app.use(express.json());
app.use('/api/dogs', dogRoutes);


describe('Dog Routes  Get /api/dogs/random', () => {

    beforeEach(() => {
        vi.resetAllMocks();
    });
    // test 4 assigment 4
    test("it should return 200 with true and a image url", async () => {
        const apiDogMockData = {
            success: true,
            data: {
                message: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
                status: 'success',
            },
        };
        vi.spyOn(dogController, 'getDogImage').mockImplementation(async (_req, res) => {
            res.status(200).json(apiDogMockData);
        });
        const res = await request(app).get('/api/dogs/random');

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data.message).toBe(apiDogMockData.data.message);
    });
});